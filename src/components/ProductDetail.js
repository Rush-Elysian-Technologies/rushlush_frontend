import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import logo from '../logo.svg';
import SingleRelatedProduct from './SingleRelatedProduct';
import { UserContext,CartContext } from '../Context';

function ProductDetail() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [productData, setproductData] = useState([]);
    const [productImgs, setproductImgs] = useState([]);
    const [productTags, setproductTags] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const { product_slug, product_id } = useParams();
    const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
    const{cartData, setCartData}=useContext(CartContext);

    useEffect(() => {
        fetchData(baseUrl + '/product/' + product_id);
        fetchRelatedData(baseUrl+'/related-products/'+product_id);
        checkProductInCart(product_id);
        // localStorage.removeItem('cartData');
    },[]);

    // old
    // function checkProductInCart(product_id){
    //     var previousCart=localStorage.getItem('cartData');
    //     var cartJson=JSON.parse(previousCart);
    //     if(cartJson!=null){
    //         cartJson.map((cart)=>{
    //             if(cart!=null && cart.product.id == product_id){
    //                 setcartButtonClickStatus(true);
    //             }
    //         });
    //     }
    // }

    // New
    function checkProductInCart(product_id) {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
    
        if (Array.isArray(cartJson)) {
            for (let cart of cartJson) {
                if (cart && cart.product && cart.product.id === product_id) {
                    setcartButtonClickStatus(true);
                    break;
                }
            }
        }
    }
    
    


    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setproductData(data);
                setproductImgs(data.product_imgs || []);
                setproductTags(data.tag_list);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    function fetchRelatedData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setRelatedProducts(data.results);
        })
    }

    // For tag links
    const tagsLinks=[]
    for(let i=0; i<productTags.length; i++){
        // remove space
        let tag=productTags[i].trim();
        tagsLinks.push(<Link className='badge bg-secondary text-white me-1' to={`/products/${tag}`}>{tag}</Link>)
    }

    const cartAddButtonHandler = () =>{
        var previousCart=localStorage.getItem('cartData');
        var cartJson=JSON.parse(previousCart);
        var cartData={
            'product':{
                'id':productData.id,
                'title':productData.title,
                'price':productData.price,
                'image':productData.image,
            },
            'user':{
                'id':1
            }
            }
        
        if(cartJson!=null){
            cartJson.push(cartData);
            var cartString=JSON.stringify(cartJson);
            localStorage.setItem('cartData',cartString);
            setCartData(cartJson);
        }else{
            var newCartList=[];
            newCartList.push(cartData);
            var cartString=JSON.stringify(newCartList);
            localStorage.setItem('cartData',cartString);
        }
        setcartButtonClickStatus(true);
    }

    // old
    // const cartRemoveButtonHandler = () =>{
    //     var previousCart=localStorage.getItem('cartData');
    //     var cartJson=JSON.parse(previousCart);
    //     cartJson.map((cart,index)=>{
    //         if(cart!=null && cart.product.id == productData.id){
    //             // delete cartJson[index];
    //             cartJson.splice(index, 1);
    //         }
    //     });
    //     var cartString=JSON.stringify(cartJson);
    //     localStorage.setItem('cartData',cartString);
    //     setcartButtonClickStatus(false);
    //     setCartData(cartJson);
    // }

    // new
    const cartRemoveButtonHandler = () => {
        if (productData && productData.id) {
            var previousCart = localStorage.getItem('cartData');
            var cartJson = JSON.parse(previousCart);
        
            if (Array.isArray(cartJson)) {
                for (let index = 0; index < cartJson.length; index++) {
                    const cart = cartJson[index];
                    if (cart && cart.product && cart.product.id === productData.id) {
                        // Use splice to remove the item at the found index.
                        cartJson.splice(index, 1);
                        break; // Exit the loop once the item is removed.
                    }
                }
        
                var cartString = JSON.stringify(cartJson);
                localStorage.setItem('cartData', cartString);
            }
        
            setcartButtonClickStatus(false); // Set the status to false to change the button text.
            setCartData(cartJson); // Update the cart data in the context if needed.
        }
    };
    

    

    
    console.log(localStorage.getItem('cartData'));

    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {productImgs.map((img, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#productThumbnailSlider"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        <div className="carousel-inner">
                            {productImgs.map((img, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={img.image} className='img-thumbnail mb-5' alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className='col-8'>
                    <h3>{productData.title}</h3>
                    <p>{productData.detail}</p>
                    <h5 className="card-title">Price: Rs. {productData.price}</h5>
                    <p className="mt-3">
                        <a title="Demo" href={productData.demo_url} target="_blank" className='btn btn-dark me-1 mb-1'>
                            <i className="fa-solid fa-cart-plus"></i> Demo
                        </a>

                        {!cartButtonClickStatus && 
                        <button title="Add to Cart" type='button' onClick={cartAddButtonHandler} className='btn btn-primary me-1 mb-1'>
                            <i className="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        }
                        {cartButtonClickStatus && 
                        <button title="Remove from Cart" type='button' onClick={cartRemoveButtonHandler} className='btn btn-warning me-1 mb-1'>
                            <i className="fa-solid fa-cart-plus"></i> Remove from Cart
                        </button>
                        }

                        <button title="Buy Now" className='btn btn-success me-1 mb-1'>
                            <i className="fa-solid fa-bag-shopping"></i> Buy Now
                        </button>
                        <button title="Add to Wishlist" className='btn btn-danger me-1 mb-1'>
                            <i className="fa fa-heart"></i> Wishlist
                        </button>
                    </p>

                    <div className='producttags mt-4'>
                        <h5>Tags</h5>
                            <p>
                                {tagsLinks}
                            </p>
                    </div>
                </div>
            </div>

            
            {/* Related Products */}
            {relatedProducts.length > 0 &&
                <>
                    <h3 className='mt-5 mb-3 text-center'>Related Products</h3>
                    <div id="relatedProductsSlider" className="carousel carousel-dark slide " data-bs-ride="true">
                        <div className="carousel-indicators">
                            {relatedProducts.map((product, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#relatedProductsSlider"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                    
                        </div>
                        <div className="carousel-inner">
                            {relatedProducts.map((product, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <SingleRelatedProduct product={product} />
                                </div>
                            ))}
                        </div>
                        {/* left -right buttons */}
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </>
            }
            {/* End Related Products */}
        </section>
    );
}

export default ProductDetail;
