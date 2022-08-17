const getdb = require("../util/database").getdb;

class Product {
    constructor(name,description,price,image){
        this.name=name;
        this.description=description;
        this.price=price;
        this.image=image;
    }
    save(){
        const db=getdb();
       return db.collection('Products').insertOne(this)
        .then(result=>{
            console.log(result);
        }
        )
        .catch(err=>{console.log(`insert err${err}`);});

    }
    static fetchall(){
        const db=getdb();
        return db.collection('Products').find().toArray()
        .then(
            products=>{
                console.log(products);
                return products;
            }
        )
        .catch(
            err=>{
                console.log(err);
            }
        );
    }

   static findById(prodId){
        const db =getdb();
        return db.collection('products').find({_id:prodId}).next()
        .then(product=>{
            
            return product;
        })
        .catch(
            err=>{
                console.log(err);
            }
        );
    }

}
module.exports=Product