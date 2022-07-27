const Productdata =require("../models/products")

const addproduct = () => {
    try {
        console.log("add product server ok");
        console.log(req.body.product)
        const productplandata = Productdata(req.body)
        productplandata.save().then((response) => {
            res.status(200).json({ msg: "product added", details: response })
        }).catch((err) => {
            console.error(err);
            res.json({ msg: `error : product not added !! ${err}`, })
        })
    } catch (err) {
        res.send(err)
    }

}

const viewproduct = () => {
    try {
        console.log("view products")
        const login_id = req.body.login_id //vendor id
        console.log(login_id);
        Productdata.findOne({ vendor_id: login_id },(err,results)=>{
            console.log(results);
        })
            .then((res) => {
                res.status(200).json({ msg: "success", details: results })
            }).catch((err) => {
                console.error(err);
                res.json({ msg: `error : products not found !! ${err}`, })
            })
    } catch (err) {
        res.send(err)
    }

}

const viewsingleproduct = () => {
    try {
        const id= req.params.id; //product id
        Productdata.findOne({_id:id})
            .then((response) => {
                res.status(200).json({ msg: "success", details: response })
            }).catch((err) => {
                console.error(err);
                res.json({ msg: `error : products not found !! ${err}`, })
            })
    } catch (err) {
        res.send(err)
    }

}
const viewCategoryproduct = () => {
    try {
        const category= req.params.productcategory; //product id
        Productdata.findOne({productcategory:category})
            .then((response) => {
                res.status(200).json({ msg: "success", details: response })
            }).catch((err) => {
                console.error(err);
                res.json({ msg: `error : products not found !! ${err}`, })
            })
    } catch (err) {
        res.send(err)
    }

}

// const editproduct = () =>{
//     try{
//         const id=req.params.id;
//         const data=req.body;
         
//         Productdata.findByIdAndUpdate(id,data).then((res)=>{
//          console.log(res);
//          res.status(200).json({msg:"product data updated",})
//         }).catch((err)=>{
//             console.error(err);
//             res.json({msg:`error : ${err}`,})
//         })
//     }
//     catch(err){
//       res.send(err)
//     }
// }

module.exports = {
    addproduct,
    viewproduct,
    viewsingleproduct,
    viewCategoryproduct,
    // editproduct
}