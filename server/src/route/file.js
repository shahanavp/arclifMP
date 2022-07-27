const express = require('express');
const mongoose = require('mongoose');
var fs = require('fs');

const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const fileRouter = express.Router();

const conn = mongoose.createConnection(process.env.MONGO_URI)

let gfs;

conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')

})

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({
  storage
});


fileRouter.post('/upload/:id', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
  })
  
  fileRouter.get('/files', (req, res) => {
  
    gfs.files.find().toArray((err, files) => {
      if (!files) {
        return res.status(404).json({ err: 'No files exist' })
      }
      //if files exists
      return res.json(files);
      // return console.log(files)
    })
  })
  
  fileRouter.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (!file) {
        return res.status(404).json({ err: 'No files exist' })
      }
      //if files exists
      return res.json({ type: file.contentType, file });
      // return console.log(files)
    })
  })
  

  fileRouter.get('/fileuploaded/:filename', (req, res) => {
    // const file = await gfs.files.findOne({ filename: request.params.filename });
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
  
      // Check if image
      if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === "application/pdf") {
        // Read output to browser
     
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
        
  
      } else {
        res.status(404).json({
          err: 'No file found'
        });
      }
    });
  });
  