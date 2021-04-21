import { API } from "../../backend";

import React from 'react'

 const getProducts =()=>{
    return fetch(`${API}/products`,{
        method: 'GET'
    }).then(response =>{
        console.log(response)
        return response.json()
    }).catch(err =>console.log(err))
}


export default getProducts;