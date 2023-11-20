// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../logo.svg'; 
function SingleProduct(props){
    console.log(props.product.image);
    return(

        <div className='col-12 col-md-3 col-sm-4 mb-4'>
            <div className="card">
                <Link to={`/product/${props.product.title}/${props.product.id}`}>
                    <img src={props.product.image} class="card-img-top" alt="..."/>
                    {/* <img src={props.product.product_imgs[0].image} className="card-img-top" alt="Product Image" /> */}
                    {/* <img src={logo} class="card-img-top" alt="..."/> */}
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link>
                    </h5>
                    <h5 className="card-title text-muted">Price: Rs. {props.product.price}</h5>
                </div>
                <div className="card-footer">
                    <button title="Add to Cart" className='btn btn-success btn-sm'><i class="fa-solid fa-cart-plus"></i></button>
                    <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i class="fa fa-heart"></i></button>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct;