import { useEffect, useState } from "react"
import Header from "./include/header"
import axios from "axios"
import { useParams } from "react-router-dom"


function Edit(){
  const {id}=useParams();
  const [name,setName]=useState("");
  const [catt,setCatt]=useState("");
  const [price,setPrice]=useState("");
  const [detail,setDetail]=useState("");
  const [description,setDescription]=useState("");
  const[file,setFile]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/update/${id}`,{
      name,catt,price,detail,description,file
    })
    .then(()=> alert("update sucessfully"))
    .catch(err=> console.log(err))
  }
    const [cat,setCat]=useState([])
    
useEffect(()=>{
  axios.get(`http://localhost:5000/edit_view/${id}`)
  .then((res)=>{
    setName(res.data[0].name)
    setCatt(res.data[0].cat)
    setPrice(res.data[0].price)
    setDetail(res.data[0].detail)
    setDescription(res.data[0].description)
  })
},[id])
    useEffect(()=>{
        axios.get("http://localhost:5000/category")
        .then((res)=>{
            setCat(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
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
          <select name="catt" value={catt} onChange={(e)=>setCatt(e.target.value)}>
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
          <input type="text" name="detail" value={detail} onChange={(e)=>setDetail(e.target.value)}/>
        </div>
        <div className="form_input">
          <label htmlFor="">Description</label>
          <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className="form_input">
          <label >File</label>
          <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])} />
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
export default Edit