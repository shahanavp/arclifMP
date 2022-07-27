const mongoose = require('mongoose')
const Schema = mongoose.Schema    //schema definition

const cartSchema = new Schema({
    product_id:{type:Schema.Types.ObjectId,ref:"products_tb"},
    productquantity: { type: Number },
    totalamount:{type:Number}
   
}, {
    timestamps: true
})

var cartdata = mongoose.model('cart_tb', cartSchema) //model creation
module.exports = cartdata;