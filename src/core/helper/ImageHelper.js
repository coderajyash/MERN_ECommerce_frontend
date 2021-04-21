import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {

  var imageurl


  if (product.product._id === undefined || product.product._id ==='') { imageurl = `https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png` }
  else imageurl = `${API}/product/photo/${product.product._id}`


  
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;