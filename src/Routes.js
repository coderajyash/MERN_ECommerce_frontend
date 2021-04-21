import React from 'react';
import  {BrowserRouter,Switch,Route} from 'react-router-dom';
import AdminRoute from './auth/helper/AdminRoutes';
import Home from './core/Home'
import Signin from './user/Signin';
import Signup from './user/Signup';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashBoard from "./user/UserDashBoard"
import AdminDashBoard from "./user/AdminDashBoard"
import AddCategory from './admin/AddCategory';
import AllCategories from "./admin/AllCategories"; 
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';


const Routes=()=>{
    return (
        <BrowserRouter>
            <Switch>
            <Route path ="/" exact component ={Home}/>
            <Route path ="/signup" exact component ={Signup}/>
            <Route path ="/signin" exact component ={Signin}/>
            <PrivateRoute path ="/user/dashboard" exact component ={UserDashBoard}></PrivateRoute>
            <AdminRoute path ="/admin/dashboard" exact component ={AdminDashBoard}></AdminRoute>
            <AdminRoute path ="/admin/create/category" exact component ={AddCategory}></AdminRoute>
            <AdminRoute path ="/admin/categories" exact component ={AllCategories}></AdminRoute>
            <AdminRoute path ="/admin/create/product" exact component ={AddProduct}></AdminRoute>
            <AdminRoute path ="/admin/products" exact component ={ManageProducts}></AdminRoute>
            <AdminRoute path ="/admin/product/update/:productId" exact component ={UpdateProduct}></AdminRoute>

            </Switch>
        </BrowserRouter>
    )
}
export default Routes;