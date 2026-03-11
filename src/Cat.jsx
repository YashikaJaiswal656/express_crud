import { useState } from "react"
import Header from "./include/header"
import axios from "axios"

function Cat(){
  const [cat,setCat]=useState("");
  const [slug,setSlug]=useState("");
  const handleSubmit=async(e)=>{
   e.preventDefault();
   try{
    await axios.post("http://localhost:5000/create_cat",{
    cat:cat,
    slug:slug
    })
        alert("category added")

   }catch(err){
     console.log(err)
    }
  }
  
    return(
        <>
        <Header/>
<div className="form_container">
   <div className="form_cont">
    <div className="heading">
      <h3>Create a Categories</h3>
    </div>
    <hr className="hr"/>
    <form onSubmit={handleSubmit}>
      <div className="grid_form">
        <div className="form_input">
          <label htmlFor="">Categorie</label>
          <input type="text" name="cat" value={cat} onChange={(e)=>setCat(e.target.value)}/>
        </div>
        <div className="form_input">
          <label htmlFor="">Slug</label>
          <input type="text" name="slug" value={slug} onChange={(e)=>setSlug(e.target.value)}/>
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
export default Cat