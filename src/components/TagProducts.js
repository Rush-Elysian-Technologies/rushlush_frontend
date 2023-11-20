// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../logo.svg'; 
import { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import { useParams } from "react-router-dom";

function TagProducts() {

    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    const [totalResult,setTotalResults] = useState(0);
    // const [baseurl, setbaseurl] = useState(baseUrl+'/products');
    
    const { tag }= useParams();
    // console.log(category_id);
    
    // Fetch data from API products
    useEffect(() => {
        fetchData(baseUrl+'/products/'+tag);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                // this shows product data results
                setProducts(data.results);
                // this is total products result
                setTotalResults(data.count);
            });
    }

    function changeUrl(baseurl){
        console.log(baseurl);
        fetchData(baseurl);
    }

    //  Create links for products
    var links=[];
    var limit=1;
    // var totalLinks=totalResult/limit;
    var totalLinks=Math.ceil(totalResult/limit);
    for(let i=1; i<=totalLinks; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/products/${tag}/?page=${i}`)} to={`/products/${tag}/?page=${i}`} class="page-link">{i}</Link></li>)
    }


    return (
        <section className='container mt-4'>
            <h3 className='mb-4'>All Products</h3>
            <div className='row mb-4'>
                {
                    products.map((product)=> <SingleProduct product={product} />)
                }
            </div>
            {/* Pagination start*/}
            <nav aria-label="Page navigation example">
                {/* we can show totla no of products here
                {totalResult} */}
                <ul class="pagination">
                    {links}
                </ul>
            </nav>
            {/* Pagination end */}

        </section>
    )
}

export default TagProducts;