import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { getCategories } from './helper/adminapicall';


const AllCategories = ()=>{
    
    const [categories,setCategories] = useState([])

    const {user,token} = isAuthenticated()

    const preload =()=>{
        getCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setCategories(data)
            }
        })
    }

    useEffect(()=>{
        preload()
    },[])



    return (
        <Base title="Welcome admin" description="Manage products here">
        <h2 className="mb-4"></h2>
        
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-white my-3">Categories</h2>
            {
                categories.map((category,index) =>{
                return(
                  <div key={index} className="row mb-2 ">
                  <div className="col-2">
                    <h4 className="text-white text-left">{category.name}</h4>
                  </div>
                  </div>
                )
                })
            }
            <Link className="btn btn-info mt-2 rounded" to={`/admin/dashboard`}>
            <span className="">Back to Admin Home</span>
          </Link>
          </div>
         
        </div>
      </Base>
    )
    
}

export default AllCategories;