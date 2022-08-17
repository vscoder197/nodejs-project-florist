//core module
const path=require('path');
//express module
const express = require('express');
const app=express();
//imports
const homeRouter=require('./routers/home');
const shopRouter=require('./routers/shop');
const adminRouter=require('./routers/admin');
//body parser
const bodyParser=require('body-parser');
//database the data base
const mongoConnect=require("./util/database").mongoConnect;

//adding static stai
//app.use('/static',express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
//adding views
app.set('view engine','ejs');
app.set('views','views');
//register the routes
app.use('/',homeRouter);
app.use('/shop',express.static(path.join(__dirname,'public')));
app.use('/shop/shop-details',express.static(path.join(__dirname,'public')));
app.use('/shop',shopRouter);

app.use('/admin',adminRouter);
app.use('/',(req,res)=>{
    res.status(404).render('404');
});

mongoConnect(()=>{
    console.log("run");
    //console.log(client);
    
    app.listen(3000);
})
//app.listen(3000);

