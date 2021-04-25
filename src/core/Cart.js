import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
//import Payment from "./Payment";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const [reload,setReload] = useState(false)


  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);//Remounting a component

  const loadAllProducts = (products) => {
    return (
      <div className="row">
     
        <h2>Your Cart</h2>
        {products.map((product, index) => (
          <div className="col-4 mt-1">
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
          </div>
        ))}
        
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };
  const getAmount = () =>{
    let amount = 0
    products.map((product) =>{
      amount = amount + product.price
      
    })
    return amount
  }

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-5 border border-primary rounded mb-2">
        
        { products !== undefined ? loadAllProducts(products):(<h3>Cart Empty</h3>)}
        </div>
        <div className="col-1"></div>
        <div className="col-6 border border-primary rounded mb-2">
        <div className="mt-3"><h2>Add a delivery address</h2>
        <div class="form-group">
        <label for="inputAddress">Address Line 1</label>
       <input type="text" class="form-control mt-2" id="inputAddress" placeholder="Address-line 1"></input>
       <label for="inputAddress">Address Line 2 </label>
       <input type="text" class="form-control mt-2" id="inputAddress" placeholder="Address-line 2"></input>
       </div>
       
       <div className="row mt-4">
       <div className="col-4 mb-2">
       <h3 className="bg-primary rounded text-white m-2">Total Amount</h3>
       </div>
      <div className="col-6 m-2"><h4>Rs {
        getAmount()
      }</h4></div>
       
       <button className="btn btn-primary rounded mt-3 mr-3">Checkout</button>
       </div>
        </div>
        </div>
      </div>
    </Base>
  );
};

export default Cart;
