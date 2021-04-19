import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import {getCategories} from './helper/adminapicall'

const AddProduct = ()=>{

    const [values,setValues] = useState({
        name: '',
        description: '',
        price:'',
        stock: '',
        photo: '',
        categories: [],
        category:'',
        error:'',
        loading:false,
        getaRedirect:false,
        createdProduct:'',
        formData:''
    })

    const {name,description,price,stock,formData,error,photo,categories,category,createdProduct,getaRedirect,loading} = values

    const preload = ()=>{

      getCategories().then(data=>{
        if(data.error){
          setValues({...values,error:data.error})
        }else{
          setValues({...values,categories:data,formData: new FormData()})
          console.log(categories)
        }
      })
      
    }


    useEffect(()=>{
      preload()
    },[])


    const onSubmit = () =>{

    }

    const handleChange = (name)=>event =>{

    }

    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block rounded">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
                className="mb-2"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control mb-2"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control mb-2"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control mb-2"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control mb-2"
              placeholder="Category"
            >
              <option>Select</option>
              <option value="a">a</option>
              <option value="b">b</option>
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control mb-2"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-2">
            Create Product
          </button>
        </form>
      );



    return (
        <Base title="Add Product" description="You can add a new product here" className="container bg-info p-4">
        <h2 className="text-white">Add Product</h2>
        <div className="row text-white bg-dark rounded">
        <div className="col-md-8 offset-md-2">
        {createProductForm()}
        </div>
        </div>
        <Link className="btn btn-sm btn-info mb-3 rounded" to="/admin/dashboard">Back to Admin Home</Link>
        </Base>
    )
    
}

export default AddProduct;