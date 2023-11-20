import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext, CartContext } from '../Context';

function Header(props){
    const userContext=useContext(UserContext);
    const {cartData,setCartData}=useContext(CartContext);
    if(cartData == null){
        var cartItems=0;
    }else{ 
        var cartItems=cartData.length;
    }
    // console.log(userContext);
    // Check if the user is logged in
    const isUserLoggedIn = userContext && userContext.login === true;
    console.log('isUserLoggedIn:', isUserLoggedIn);

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">RuShLuSh</Link>
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">Categories</Link>
                </li>
                {/* Customer Panel */}
                
                {/* Customer Panel */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Account
                    </a>
                    <ul className="dropdown-menu">
                        {!isUserLoggedIn && (
                            <>
                                <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                                <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                            </>
                        )}
                        {isUserLoggedIn && (
                            <>
                                <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/customer/logout">Logout</Link></li>
                            </>
                        )}
                    </ul>
                </li>


                
                {/* Vendor Panel */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Vendor Panel
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                        <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                        <li><Link className="dropdown-item" to="/seller/login">Logout</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">New Orders (4)</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/checkout">My Cart ({cartItems})</Link>
                </li>
                {/* New code for length */}
                {/* {cartData && (
                    <li className="nav-item">
                        <Link className="nav-link" to="/checkout">My Cart ({cartData.length})</Link>
                    </li>
                )} */}
                </ul>
            </div>
        </div> 
    </nav>
    )
}

export default Header;



