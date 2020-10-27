import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import './Navbar.css'
class Navbar extends Component {
 
    render() {
 
        this.props.cartUpdated();
 
        let total = 0;
 
        this.props.cart.map(item => total += item.product.price * item.quantity);
 
        return (
            <div>
                
                <nav id="nav" className="navbar navbar-default">
                         <div className="col-sm-4">
                             <div className="navbar-header">
                                <NavLink className="navbar-brand" to="/"><h1 className="navshop">Shopping cart</h1></NavLink>
                             </div>
                         </div>
                         
                         <div className ="col-sm-4">
                                <input  type="text" placeholder=  "Search Items"  id="fname" name="fname" size="77" height="32" ></input>
                                <button className="s">Search</button>
                         </div>

                         <div className="col-sm-3">
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                   <li ><  NavLink to="/my-cart" >
                                      {
                                         this.props.cart.length > 0 ? (
                                         <span className="label label-info">{ this.props.cart.length } items</span>
                                         ) : null
                                      }
                                        <i id="navcarticon" className="glyphicon glyphicon-shopping-cart"> </i> My Cart</NavLink></li>
                                </ul>
                            </div>
                          </div>

                          <div className="col-sm-1">
                              <NavLink className="navbar-brand" to="/login"><h3 className="navlog">Login</h3></NavLink>
                          </div>
                    
                </nav>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};
 
export default connect(mapStateToProps)(Navbar);