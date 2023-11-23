import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context';
import { CartContext } from '../Context';
import { useEffect } from 'react';


import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api';

function ConfirmOrder() {
    const [ConfirmOrder,SetConfirmOrder]=useState(false);
    const userContext = useContext(UserContext);
    const {cartData, setCartData}=useContext(CartContext);

    if (!userContext.login) {
        window.location.href = "/customer/login";
    } else {
        if(ConfirmOrder==false){
            addOrderInTable();
        }
    }

    function addOrderInTable() {
        const customerId = localStorage.getItem('customer_id'); // Retrieve from localStorage
        if (!customerId) {
            console.log('Customer ID not found in local storage');
            return;
        }

        const formData = new FormData();
        formData.append('customer', customerId);

        // Submit data
        axios.post(baseUrl + '/orders/', formData)
        .then(function (response) {
            var orderId=response.data.id;
            orderItems(orderId);
            SetConfirmOrder(true);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function orderItems(orderId){
        // console.log(orderId);
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);

        if(cartJson!=null){
            cartJson.map((cart,index)=>{
                const formData = new FormData();
                formData.append('order', orderId);
                formData.append('product', cart.product.id);
                formData.append('qty', 1);
                formData.append('price', cart.product.price);          
                // console.log(cartJson);

                // submit data
                axios.post(baseUrl + '/orderitems/', formData)
                .then(function (response) {
                    // Remove Cart Items from local storage
                    cartJson.splice(index, 1);
                    localStorage.setItem('cartData',JSON.stringify(cartJson));
                    setCartData(cartJson);
                })
                .catch(function (error) {
                    console.log(error);
                });
            });
        }
       
    }

    
    console.log(localStorage.getItem('cartData'));

    return (
        <h1 className="text-center">Your Order has been Confirmed</h1>
    );
    
}



export default ConfirmOrder;

