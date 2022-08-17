const Product=require('../models/admin');
exports.shop=(req,res)=>{
    Product.fetchall()
    .then(products=>{
        console.log(`products: ${products}`);
        res.render('shop',{prods:products});
    })
    .catch(err=>{
        console.log(err);
    });
   
}
exports.shopDetail=(req,res)=>{
    const prodId= req.params.productId;
    Product.findById(prodId)
    .then(products=>{
    console.log(`products: ${prodId}`);
        res.render('shop-details',{product:products});
    })
    .catch(err=>{
        console.log(err);
    });
   
   
}