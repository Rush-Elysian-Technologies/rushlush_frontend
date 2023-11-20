import {Routes, Route} from 'react-router-dom';



// Assets
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import { UserContext } from './Context';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// Website
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';
import TagProducts from './components/TagProducts';

// customer panel
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import CustomerLogout from './components/Customer/CustomerLogout';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import Wishlist from './components/Customer/Wishlist';
import Profile from './components/Customer/Profile';
import ChangePassword from './components/Customer/ChangePassword';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';


// Seller panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SelletProducts';
import AddProduct from './components/Seller/AddProduct';
import VendorOrders from './components/Seller/VendorOrders';
import Customers from './components/Seller/Customers';
import Reports from './components/Seller/Reports';
import VendorProfile from './components/Seller/VendorProfile';
import VendorChangePassword from './components/Seller/VendorChangePassword';

import { CartContext } from './Context';
import { useState } from 'react';
const checkCart=localStorage.getItem('cartData');

function App() {
  // you should ensure that checkCart is never null use new
  // const [cartData,setCartData]=useState(JSON.parse(checkCart));
  // New
  const initialCartData = checkCart ? JSON.parse(checkCart) : [];
  const [cartData, setCartData] = useState(initialCartData);
  
  return (
    <CartContext.Provider value={{cartData,setCartData}}>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts />} />
        <Route path='/products/:tag' element={<TagProducts />} />
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order/success' element={<OrderSuccess />} />
        <Route path='/order/failure' element={<OrderFailure />} />
        {/*  customer Routes */}
        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/login' element={<Login />} />
        <Route path='/customer/logout' element={<CustomerLogout />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
        <Route path='/customer/wishlist' element={<Wishlist />} />
        <Route path='/customer/profile' element={<Profile />} />
        <Route path='/customer/change-password' element={<ChangePassword />} />
        <Route path='/customer/addresses' element={<AddressList />} />
        <Route path='/customer/add-address' element={<AddAddress />} />
        {/* Seller Routes */}
        <Route path='/seller/register' element={<SellerRegister />} />
        <Route path='/seller/login' element={<SellerLogin />} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/seller/products' element={<SellerProducts />} />
        <Route path='/seller/add-product' element={<AddProduct />} />
        <Route path='/seller/orders' element={<VendorOrders />} />
        <Route path='/seller/customers' element={<Customers />} />
        <Route path='/seller/reports' element={<Reports />} />
        <Route path='/seller/profile' element={<VendorProfile />} />
        <Route path='/seller/change-password' element={<VendorChangePassword />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
