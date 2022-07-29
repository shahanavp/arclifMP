const Productdata =require("../server/src/models/products")
const cartdata=require("../server/src/models/cart")

require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const dbconnect = require('./src/database/dbconnection');


var fs = require('fs');

const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override')

const app = express();
//middleware
app.use(express.json());
dbconnect();
app.use(methodOverride('_method'))

const conn = mongoose.createConnection(process.env.MONGO_URI)

app.use(express.static(path.join(__dirname,"./build")))
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



app.use(cors({ origin: '*', credentials: true }));
// app.use(cors());
// app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

const authrouter = require('./src/route/auth');
// const fileRoute = require('./src/route/file');

app.use('/api', authrouter)
// app.use('/file',fileRoute)

app.get('/', (req, res) => {
  res.send("welcome")
})

app.post('/upload/:id', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
})

app.get('/files', (req, res) => {

  gfs.files.find().toArray((err, files) => {
    if (!files) {
      return res.status(404).json({ err: 'No files exist' })
    }
   
    return res.json(files);
    
  })
})

app.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file) {
      return res.status(404).json({ err: 'No files exist' })
    }
 
    return res.json({ type: file.contentType, file });
   
  })
})


app.get('/fileuploaded/:filename', (req, res) => {

  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
   
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === "application/pdf") {

      const readStream = gridfsBucket.openDownloadStream(file._id);
      readStream.pipe(res);
      

    } else {
      res.status(404).json({
        err: 'No file found'
      });
    }
  });
});

// add product
// app.get("/addproduct",(req,res)=>{
// res.send("add")})

app.post("/addproduct",(req,res)=>{
  try {
    const product = req.body.product;
    console.log("new product")  
    const newProduct = new Productdata({
        vendor_id : product.vendor_id,
        productname : product.productname ,
        productimage : product.productimage ,
        productcategory : product.productcategory, 
        productprice : product.productprice,  
        productsize : product.productsize, 
      })
      newProduct.save((err,docs)=>{
        if(!err){
          console.log("product added");
          console.log(docs);
        }
        else{
          console.log(err);
        }
      })
      res.json({msg:"success"});  
  } catch (error) {
    console.log(error);
  }
})

// view products

app.post("/getallproducts",(req,res)=>{
  const logId = req.body.login_id;
  // console.log(logId)
  Productdata.find({vendor_id:logId},(err,results)=>{
    // console.log("get all products");
    // console.log(typeof(results))
    res.json({docs:results})
    // console.log(results);
  })
})

//view category wise data
app.post("/getallproduct",(req,res)=>{
  const category=req.body.category;
  Productdata.find({productcategory:category})
  .then((results)=>{
    console.log(results);
    res.json({docs:results})
  })
})






// view single products

app.post("/vendorsingle",(req,res)=>{
  const productId = req.body.productId;
  // console.log(productId)
  Productdata.findOne({_id:productId},(err,results)=>{
    // console.log(results);
    res.json(results);
  })
})

//view single products buyer
app.post("/buyersingle",(req,res)=>{
  const productId = req.body.productId;
  // console.log(productId)
  Productdata.findOne({_id:productId},(err,results)=>{
    // console.log(results);
    res.json(results);
  })
})

//ADD TO CART
app.post("/addproductcart",(req,res)=>{
  try {
    const productId = req.body.productId;
    const productquantity=req.body.productquantity
    const totalamount=req.body.totalamount
    console.log(productId)
    console.log("add to cart")  
    const newProduct = new cartdata({
        product_id : productId,
        productquantity: productquantity,
        totalamount:totalamount ,
        
      })
      newProduct.save((err,docs)=>{
        if(!err){
          console.log("product added");
          console.log(docs);
        }
        else{
          console.log(err);
        }
      })
      res.json({msg:"success"});  
  } catch (error) {
    console.log(error);
  }
})

//view cart data
app.post("/getcartproducts",(req,res)=>{
 
 cartdata.aggregate([
    { $lookup:
       {
         from: 'products_tbs',
         localField: 'product_id',
         foreignField: '_id',
         as: 'cart'
       }
     }
    ]).then((resp)=>{
res.json({resp:resp})
    })
  })

//delete from cart
  app.post("/deletecart",(req,res)=>{
    const cartId = req.body.id;
    // console.log(productId);
   cartdata.deleteOne({_id:cartId},(err,docs)=>{
      if(!err){   
        // console.log(docs);
  res.json({msg:"success"})
      }
    })
  })




app.post("/vendorsingle/deleteproduct",(req,res)=>{
  const productId = req.body.productId;
  // console.log(productId);
  Productdata.deleteOne({_id:productId},(err,docs)=>{
    if(!err){   
      // console.log(docs);
res.json({msg:"success"})
    }
  })
})

// edit product 

app.post("/editproduct",(req,res) =>{
  const productId = req.body.productId;
  // console.log(productId.productId);
  Productdata.findOne({_id:productId.productId},(err,results)=>{
    // console.log(results);
    res.json(results);
  })
})

      /// update product

      app.put("/editproduct",(req,res)=>{
        const product = req.body.product;
        console.log(product);
        const productId  = req.body.productId;
        console.log(productId);
        Productdata.updateOne({_id:productId.productId},{productname:product.productname,productprice:product.productprice,productsize:product.productsize,vendor_id:product.vendor_id,productimage:product.productimage,productcategory:product.productcategory},(err,docs)=>{
          if(!err){
            // console.log(docs);
          }
        })         
           res.json({msg:"success"})
      })

//heruku step
// if (process.env.NODE_ENV =="production"){
//   app.use(express.static("myapp/build"));

 
// }
 app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
  })

// port listen

app.listen(process.env.PORT || 5000, () => {
  console.log(`server started at ${process.env.PORT} `);
});
