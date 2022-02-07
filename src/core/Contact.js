import React, { useEffect } from 'react';
import Base from './Base';
import image from '../dev.png'
import { useState } from 'react';

return (
    <Base title="Developer Page" description="Details">
    <div className="row">
    <hr></hr>
    <div className="col-6">
    <div className="d-flex justify-content-center">
    <img src={image} style={{ maxHeight: "60%", maxWidth: "60%" }} className="border border-primary p-2 rounded m-4"></img></div>
    
    </div>
    <div className="col-6">
    <ul class="list-group m-5">
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="btn rounded rounded bg-primary text-white">Name</span> <p className="text-dark">Yash Raj Singh</p>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="btn rounded rounded bg-primary text-white">Email</span> <p className="text-dark">yashrajsingh.dg@gmail.com</p>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="btn rounded rounded bg-primary text-white">Linked Profile</span> <p className="text-dark">https://www.linkedin.com/in/yash-raj-singh-121aa7173/</p>
  
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="btn rounded rounded bg-primary text-white">Github Profile</span> <p className="text-dark">https://github.com/coderajyash</p>
    
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class="btn rounded rounded bg-primary text-white">Tech Stack Used</span>
  <span className="justify-content-between"><i class="fab fa-react p-2"></i><i class="fab fa-js p-2"></i><i class="fab fa-node p-2"></i>
  <i class="fas fa-database p-2"></i>
  </span>
  </li>
</ul>
    </div>
    </div>
    </Base>
)
}




export default Contact;
