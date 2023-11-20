import {Link} from 'react-router-dom';

import logo from '../logo.svg'; 
import SingleProduct from './SingleProduct';

function Home(){

    const products=[
        {
            'title':'Product 1',
            'price':100
        },
        {
            'title':'Product 2',
            'price':200
        },
        {
            'title':'Product 3',
            'price':300
        },{
            'title':'Product 4',
            'price':400
        },
    ]
    return(

    <main className='mt-4'>
            <div className='container'>

            {/* Latest Products */}
            <h3 className='mb-4'>Latest Products 
            <Link to="/products" className='float-end btn btn-dark'>
                View All Products
                <i class="fa-solid fa-arrow-right-long"></i>
            </Link>
            </h3>
            <div className='row mb-4'>
                {/* Product Box */}
                {
                    products.map((product)=> <SingleProduct product={product} />)
                }
                {/* Product Box End */}
            </div>
            {/* End Latest Products */}


            {/* Popular categoties */}
            <h3 className='mb-4'>Popular Categories <a href="#" className='float-end btn btn-dark'>View All Categories<i class="fa-solid fa-arrow-right-long"></i></a></h3>
            <div className='row mb-4'>
                {/* Category  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    </div>
                    <div className="card-footer">
                    Shop Now
                    </div>
                </div>
                </div>
                {/* Category Box End */}
                {/* Category  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    </div>
                    <div className="card-footer">
                    Shop Now
                    </div>
                </div>
                </div>
                {/* Category Box End */}
                {/* Category  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    </div>
                    <div className="card-footer">
                    Shop Now
                    </div>
                </div>
                </div>
                {/* Category Box End */}
                {/* Category  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                    </div>
                    <div className="card-footer">
                    Shop Now
                    </div>
                </div>
                </div>
                {/* Category Box End */}
            </div>
            {/* End Popular Categories */}


            {/* Popular Products */}
            <h3 className='mb-4'>Popular Products <a href="#" className='float-end btn btn-dark'>View All Products<i class="fa-solid fa-arrow-right-long"></i></a></h3>
            <div className='row mb-4'>
                {/* Product Box */}
                {
                    products.map((product)=> <SingleProduct product={product} />)
                }
                {/* Product Box End */}
            </div>
            {/* End Popular Products */}


            {/* Popular Sellers */}
            <h3 className='mb-4'>Popular Sellers <a href="#" className='float-end btn btn-dark'>View All Sellers<i class="fa-solid fa-arrow-right-long"></i></a></h3>
            <div className='row mb-4'>
                {/* Seller  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    </div>
                    <div className="card-footer">
                    Categories: <a href="#">Fruits</a>, <a href="#">Vegetables</a>
                    </div>
                </div>
                </div>
                {/* Seller Box End */}
                {/* Seller  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    </div>
                    <div className="card-footer">
                    Categories: <a href="#">Fruits</a>, <a href="#">Vegetables</a>
                    </div>
                </div>
                </div>
                {/* Seller Box End */}
                {/* Seller  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    </div>
                    <div className="card-footer">
                    Categories: <a href="#">Fruits</a>, <a href="#">Vegetables</a>
                    </div>
                </div>
                </div>
                {/* Seller Box End */}
                {/* Seller  Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                    </div>
                    <div className="card-footer">
                    Categories: <a href="#">Fruits</a>, <a href="#">Vegetables</a>
                    </div>
                </div>
                </div>
                {/* Seller Box End */}
            </div>
            {/* End Popular Sellers */}


            {/* Ratings and Reviews */}
            <div id="carouselExample" className="carousel slide my-4 border bg-dark text-white p-5">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <figure className='text-center'>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> 
                    </blockquote>
                    <figcaption>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                    </figcaption>
                    </figure>
                </div>
                <div className="carousel-item">
                    <figure className='text-center'>
                        <blockquote className="blockquote text-center">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> 
                        </blockquote>
                        <figcaption>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <cite title="Source Title">Customer Name</cite>
                        </figcaption>
                    </figure>
                </div>
                <div className="carousel-item">
                    <figure className='text-center'>
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> 
                        </blockquote>
                        <figcaption>
                            <i className='fa fa-star text-warning'></i>
                            <i className='fa fa-star text-warning'></i>
                            <i className='fa fa-star text-warning'></i>
                            <cite title="Source Title">Customer Name</cite>
                        </figcaption>
                    </figure>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/*End of Ratings and Reviews */}


            </div>
    </main>

    )
}

export default Home;