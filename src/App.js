import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import CheckOut from './component/CheckOut/CheckOut';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Admin from './component/Admin/Admin';
import Orders from './component/Orders/Orders';


export const UserContext = createContext();


function App() {
  const[loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/admin">  Admin</Link>
            </li>
            <li>
              <Link to="/checkOut">checkOut</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path ="/checkOut/:_id">
            <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
              </PrivateRoute>
            <Route path="/login">
              <Login></Login>
              </Route>
         </Switch>
      </Router>
    </UserContext.Provider>
       
     
   
  );
}

export default App;
