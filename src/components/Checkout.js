// Packages
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assets
import logo from '../logo.svg'; 
import { CartContext } from '../Context';

function Checkout(props){
    // const {cartData,setcartData}= useContext(CartContext);
    const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
    const [productData, setproductData] = useState([]);
    const {cartData, setCartData}=useContext(CartContext);
    const [totalSum, setTotalSum] = useState(0);
    // console.log(cartData);
    // if(cartData == null){
    //     var cartItems=0;
    // }else{ 
    //     var cartItems=cartData.length;
    // }

    let cartItems = 0;
    if (cartData) {
        cartItems = cartData.length;
    }


    const cartRemoveButtonHandler = (product_id) =>{
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        cartJson.map((cart,index)=>{
            if(cart!=null && cart.product.id == product_id){
                // delete cartJson[index];
                cartJson.splice(index, 1);
            }
        });
        var cartString=JSON.stringify(cartJson);
        localStorage.setItem('cartData',cartString);
        setcartButtonClickStatus(false);
        setCartData(cartJson);
    }

    useEffect(() => {
        // Calculate the total sum inside the useEffect
        let sum = 0;
        if (cartData) {
            cartData.forEach((item) => {
                sum += parseFloat(item.product.price);
            });
        }
        // Update the total sum state
        setTotalSum(sum);
    }, [cartData]);

    
    return(

        <div className='container mt-4'>
            <h3 className='mb-4'>All Items ({cartItems})</h3>
            {cartData && cartData.length > 0 ? (
            <div className='row'>
                <div className='col-12'>
                    <div className='table-responsvie'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    {/* <th>Quantity</th>
                                    <th>Amount</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData &&
                                    cartData.map((item,index)=>{
                                        return (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>
                                                    <Link><img src={item.product.image} class="img-thumbnail" width="80" alt={item.product.title}/></Link>
                                                    <p><Link>{item.product.title}</Link></p>
                                                </td>
                                                <td>Rs. {item.product.price}</td>
                                                {/* <td>4 kg</td>
                                                <td>Rs. 2000</td> */}
                                                <td>
                                                    {/* {cartButtonClickStatus &&  */}
                                                    <button title="Remove from Cart" type='button' onClick={()=>cartRemoveButtonHandler(item.product.id)} className='btn btn-warning me-1 mb-1'>
                                                        <i className="fa-solid fa-cart-plus"></i> Remove from Cart
                                                    </button>
                                                    {/* // } */}
                                                </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    {/* <th></th>
                                    <th></th> */}
                                    <th>Total</th>
                                    <th>Rs. {totalSum}</th>
                                </tr>
                                <tr>
                                    <td colSpan='5' align='center'>
                                        <Link to="/categories" className='btn btn-secondary'>Continue Shopping</Link>
                                        <Link to="/confirm-order" className='btn btn-success ms-1'>Proceed to Payment</Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>
            ) : (
                <Link to="/categories" className='btn btn-success'>Home</Link>
            )}        
        </div>

    )
}

export default Checkout;