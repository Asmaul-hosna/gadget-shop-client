import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    
    return (
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/addProduct">AddProduct</Link>
            </li>
            <li>
              <Link to="/manageProduct"> ManageProduct</Link>
            </li>
           </ul>
        </nav>
           <Switch>
            <Route path="/addProduct">
            <AddProduct></AddProduct>
            </Route>
             <Route path="/manageProduct">
                <ManageProduct></ManageProduct>
                </Route>
            </Switch>
        </Router>
    );
};

export default Admin;
