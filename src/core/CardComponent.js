import React from 'react';
import ImageHelper from './helper/ImageHelper';

const Card = (
  product,
  addtoCart =true,
  removefromCart =false
  ) => {
    console.log(product,"Yash");
    console.log(product.name,product._id)
    console.log(product.product.name)

    var cardTitle,cardDescription,cardPrice

    if(product.product.name === undefined || product.name === '' ) cardTitle = "Product Name"
    else cardTitle = product.product.name
    
    if(product.product.description === undefined || product.description === '' ) cardDescription = "Product Desc"
    else cardDescription = product.product.description
    
    if(product.product.price === undefined || product.price === '' ) cardPrice = "Undefined"
    else cardPrice = product.product.price


    /*const cardTitle = product ? product.name : "Product Name" 
    const cardDescription = product ? product.description : "Product Description" 
    const cardPrice = product ? product.price : "Unavailable" */
    

    const showAddtoCart =(addtoCart)=>{
      return (
      addtoCart && (
              <button
                onClick={() => {}}
                className="btn btn-block btn-outline-success mt-2 mb-2 rounded"
              >
                Add to Cart
              </button>
    )
      )
    }
    
    const showRemovefromCart =(removefromCart)=>{
      return(
        removefromCart && (
          <button
                onClick={() => {}}
                className="btn btn-block btn-outline-danger mt-2 mb-2 rounded"
              >
                Remove from cart
              </button>
        )
      )
    }


    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header text-white lead">{cardTitle}</div>
        <div className="card-body text-center">
         <ImageHelper product={product}/>
          <p className="lead text-white bg-success font-weight-normal text-wrap">
            {cardDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">Rs {cardPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddtoCart(addtoCart)}
            </div>
            <div className="col-12">
              {showRemovefromCart(removefromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Card;