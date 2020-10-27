import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Ordered from "./components/cart/Ordered";
 
function App(props) {
 
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path="/" component={ProductList} />
             <Route path="/my-cart" component={Cart} />
             <Route path="/login" component={Login} />
             <Route path="/ordered" component={Ordered} />
            
          </Switch>
        </div>
      </BrowserRouter>
  );
}
 
export default App;