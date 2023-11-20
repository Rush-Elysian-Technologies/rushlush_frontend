// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../../logo.svg'; 
import Sidebar from './Sidebar';

function Wishlist(){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='table-responsvie'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price per KG</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                            <p><Link>Apple</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td>4 kg</td>
                                        <td>Rs. 2000</td>
                                        <td><button className='btn btn-danger'>Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                            <p><Link>Potato</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td>3 kg</td>
                                        <td>Rs. 1500</td>
                                        <td><button className='btn btn-danger'>Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                            <p><Link>Mango</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td>1 kg</td>
                                        <td>Rs. 500</td>
                                        <td><button className='btn btn-danger'>Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>

    )
}

export default Wishlist;