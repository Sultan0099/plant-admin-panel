import React, { useEffect, useState } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';

import Navbar from './Components/Nav_Sidebar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import Uploads from './Pages/uploadProducts';
import C_orders from './Pages/C_orders';
import EditProduct from './Pages/EditProduct';

import { getUserWithToken } from "./redux/actions/auth";


function App() {

  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    const res = dispatch(getUserWithToken());

    if (res.err) {
      localStorage.removeItem("token");
      window.location = "/login"
      console.log("runs")
    } else {
      console.log(res.token)
    }

  }, [])


  return (
    <>
      <Router>
        <div className="main_container">
          <Navbar />
          <div className="main_container_2">
            <div className="item">
              <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={SignUp} />

                <>
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/orders' component={Orders} />
                  <Route path='/products' component={Products} />
                  <Route path='/uploads' component={Uploads} />
                  <Route path='/c_orders' component={C_orders} />
                  <Route path="/edit-product/:productId" component={EditProduct} />
                </>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
