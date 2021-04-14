import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';


const Signin = ()=>{

    const signInForm=()=>{
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
        <form>
        
        <div className="form-group">
        <label className="text-light">E-mail</label>
        <input type="text" className="form-control"></input>
        </div>
        <div className="form-group">
        <label className="text-light">Password</label>
        <input type="password" className="form-control"></input>
        </div>
        <button className="btn btn-success btn-block form-control">Submit</button>
        </form>
        </div>
        </div>
    )
}



    return(
        <Base title="Sign in page" description="Page for Sign In">
        {signInForm()}
        </Base>
    )
}

export default Signin;