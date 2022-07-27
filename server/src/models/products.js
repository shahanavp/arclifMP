const mongoose = require('mongoose')
const Schema = mongoose.Schema    //schema definition

const ProductsSchema = new Schema({
    vendor_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    productname: { type: String },
    productimage: { type: String },
    productcategory: { type: String },
    productprice: { type: String },
    productsize: { type: String },
}, {
    timestamps: true
})

var Productdata = mongoose.model('products_tb', ProductsSchema) //model creation
module.exports = Productdata;


