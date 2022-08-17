//const bodyParser = require("body-parser");

const Product = require("../models/admin");

exports.homeAdmin=((req,res)=>{
    res.render('admin/index');
})
exports.addProduct=((req,res)=>{
    res.render('admin/add-product');
})
exports.addgetProduct=((req,res)=>{
    const name =req.body.name;
    const description =req.body.description;
    const price =req.body.price;
    const image =req.body.image;
    const product=new Product(name,description,price,image);
    product.save()
    .then(result=>{
        console.log("created product");
        console.log(result);
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
   
})