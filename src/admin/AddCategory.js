import React, {useState} from 'react';
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index'
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';



const AddCategory = ()=>{

    const [name,setName] = useState("")
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const {user,token} = isAuthenticated()


    const goBack = ()=>{
        return(
            <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3 rounded" to="/admin/dashboard">Back to Admin Home</Link>
            </div>
        )
    }

    const onSubmit = (event)=> {
        event.preventDefault()
        setError("")
        setSuccess(false)

        //Backend request fired 
        createCategory(user._id, token,{name})
        .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true)
                setName("")
            }
        })
    }

    const handleChange = (event) => {
        setError("")
        setName(event.target.value)
    }

    const successMessage =()=>{
        if(success){
            return<h4 className="text-success">Category Added Successfully</h4>
        }
    }
    const warningMessage =()=>{
        if(error){
            return<h4 className="text-danger">Failed to create category</h4>
        }
    }

    const myCategoryForm = ()=>{
       return( <form>
        <div className="form-group">
        <p className="lead">Enter the category</p>
        <input type="text" className="form-control my-3" autoFocus required placeholder="Ex - Summer" onChange={handleChange} value={name}>
        </input>
        <button className="btn btn-outline-info rounded" onClick={onSubmit}>Create</button>
        </div>
        </form>
       )
    }


    return(
        <Base title="Create A Category" description="Add a new category for t shirts" className="container bg-info p-4">
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
        {successMessage()}
        {warningMessage()}
        {myCategoryForm()}
        {goBack()}
        </div>
        </div>
        </Base>
    )
}

export default AddCategory