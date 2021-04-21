import React, { useEffect, useState } from 'react';
import '../styles.css'
import {API} from '../backend'
import Base from './Base';
import Card from './CardComponent';
import getProducts from './helper/coreapicalls';



const Home=()=>{

    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)

    const loadAllProducts =()=>{
        getProducts().then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setProducts(data)
                console.log(data)
            }
        })
    }
useEffect(()=>{
    loadAllProducts()
},[])


    return(
        <Base title="Home Page" description="Welcome to Our Website">
        <div className="row text-center">
       <h1 className="text-white">Our Collection</h1>
       <div className="row">
       {products.map((product,index)=>{
        
           return (
              <div key= {index} className="col-4 mb-4">
              <Card product={product}></Card>
              </div>
           )
       })}
       </div>
        </div>
        </Base>
    )
}

export default Home;
