const mongoose = require('mongoose')
const Schema = mongoose.Schema    //schema definition

const LoginSchema = new Schema({
    uname: { type: String },
    phonenumber: { type: String, required: true },
    email: { type: String },
    roletype: { type: String, required: true },
}, {
    timestamps: true
})

var Logindata = mongoose.model('login_tb', LoginSchema) //model creation
module.exports = Logindata;


