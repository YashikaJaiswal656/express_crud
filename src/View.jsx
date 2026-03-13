import Header from "./include/header";
import './css/View.css'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
function View(){
    const [product,setProduct]=useState([]);
    const handleDelete=async(id)=>{
      
      try {
        await axios.delete(`http://localhost:5000/product_delete/${id}`)
        alert("product deleted")
        setProduct(product.filter(product=>product.id!==id))
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
        axios.get("http://localhost:5000/product_view")
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <>
         <Header/>        
        <div className="table_container">
            <div className="table_cont">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Categorie</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                    </thead>
                    <tbody>
                    {product.map((product)=>(

                    
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.cat}</td>
                        
                        <td ><button className="delete" onClick={()=>handleDelete(product.id)} >Delete</button></td>
                        
                        
                        <td ><Link className="edit" to={product.id}>Edit</Link></td>
                        
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        </>
    )
}
export default View;