import Header from "./include/header";
import './css/View.css'
import axios from 'axios';
import { useEffect, useState } from "react";
function View(){
    const [product,setProduct]=useState([]);
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
                        <td>delete</td>
                        <td>edit</td>
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