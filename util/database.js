const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;

let db;
const mongoConnect=(callback)=>{

    MongoClient.connect(
        'mongodb+srv://vpcoder:vpvpvp@cluster0.quzmmby.mongodb.net/shop?retryWrites=true&w=majority'
        
    )
    .then(client=>{
        console.log("connected!");
        db=client.db();
        //callback();
       callback(client);
    })
    .catch(err=>{
        console.log(err);
    });
}

const getdb=()=>{
    if(db){
        return db;
    }
    throw 'NO DATABASE FOUND!';
}

exports.mongoConnect=mongoConnect;
exports.getdb=getdb;