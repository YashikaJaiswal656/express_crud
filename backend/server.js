const express =require("express");
const mysql =require("mysql2");
const cors =require("cors");
const app=express();
app.use(cors());
app.use(express.json());
const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"react_db"

});
db.connect((err)=>{
    if(err){
        console.log("connection failed");
    }
    else{
        console.log("connection sucess");
    }
});
app.post("/create_cat",(req , res)=>{
    const {cat,slug}=req.body;
    const sql="INSERT INTO `cat`( `cat`, `slug`) VALUES (?,?)";
    db.query(sql,[cat,slug],(err,result)=>{
        if(err)return res.send(err);
        res.send("category saved");
    });
});
app.post("/product",(req,res)=>{
    const {name,catt,detail,description,price,file}=req.body;
     const sql="INSERT INTO `product`( `name`, `cat`, `detail`, `description`, `price`, `file`) VALUES (?,?,?,?,?,?)";
     db.query(sql,[name,catt,detail,description,price,file],(err,result)=>{
        if(err) return res.send(err)
            res.send("product saved");
     });
});
app.get("/category",(req , res)=>{
    const sql="SELECT * FROM `cat` ";
    db.query(sql,(err,result)=>{
        if(err) return res.send(err);
        res.json(result)
    })
})
app.get("/product_view",(req ,res)=>{
const sql="SELECT * FROM `product` ";
 db.query(sql,(err,result)=>{
    if(err) return res.send(err);
    res.json(result)
 })
})
app.delete("/product_delete/:id",(req,res)=>{
    const id=req.params.id;
    const sql="DELETE FROM `product` WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err) return res.send(err)
            res.send("delete sucess");
    })
})
app.listen(5000,()=>{
    console.log("the server has started");
});