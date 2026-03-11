import { useEffect, useState } from "react";
import './css/App.css';
import Header from "./include/header";
import { Link } from "react-router-dom";
import axios from "axios";


function App(){
const [cat,setCat]=useState([])
const[name,setName]=useState("")
const [catt,setCategorie]=useState("")
const [price,setPrice]=useState("")
const [detail,setDetail]=useState("")
const[description,setDescription]=useState("")
const[file,setFile]=useState("")
const handleSubmit=async(e)=>{
e.preventDefault()
try{
  await axios.post("http://localhost:5000/product",{
    name:name,
    catt:catt,
    price:price,
    detail:detail,
    description:description,
    file:file
  })
  alert("product inserted")
}
catch(err){
console.log(err)
}
}
useEffect(()=>{
  axios.get("http://localhost:5000/category")
  .then((res)=>{
    setCat(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])
return (
  <>
  <Header/>
  <div className="form_container">
   <div className="form_cont">
    <div className="heading">
      <h3>Submit a Product</h3>
    </div>
    <hr className="hr"/>
    <form onSubmit={handleSubmit}>
      <div className="grid_form">
        <div className="form_input">
          <label htmlFor="">Product Name</label>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form_input">
          <label htmlFor="">Categories</label>
          <select name="catt" value={catt} onChange={(e)=>setCategorie(e.target.value)}>
            <option value="">Select a Categorie</option>
            {cat.map((cat)=>( 

             
            <option value={cat.slug}>{cat.cat}</option>
            ))}
          </select>
        </div>
        <div className="form_input">
          <label htmlFor=""> Price</label>
          <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className="form_input">
          <label htmlFor="">Details</label>
          <input type="text" name="detail" value={detail} onChange={(e)=>setDetail(e.target.value)} />
        </div>
        <div className="form_input">
          <label htmlFor="">Description</label>
          <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className="form_input">
          <label >File</label>
          <input type="file" name="file" value={file} onChange={(e)=>setFile(e.target.value)}/>
        </div>
      </div>
      <button
        type="submit"
        class="button"
      >
        Submit
      </button>
      
    </form>
    </div>
  </div>
  
  </>
)

}
export default App;