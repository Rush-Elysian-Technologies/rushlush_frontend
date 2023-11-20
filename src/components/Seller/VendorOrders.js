// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../../logo.svg'; 
import SellerSidebar from './SellerSidebar';

function VendorOrders(){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
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
                                        <th>Status</th>
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
                                        <td><span className='text-success'><i className='fa fa-check-circle'></i>Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
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
                                        <td><span className='text-secondary'><i className='fa fa-spin fa-spinner'></i>Processing</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
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
                                        <td><span className='text-success'><i className='fa fa-check-circle'></i>Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <Link><img src={logo} class="img-thumbnail" width="80" alt="..."/></Link>
                                            <p><Link>Carrot</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td>4 kg</td>
                                        <td>Rs. 2000</td>
                                        <td><span className='text-danger'><i className='fa fa-times-circle'></i>Cancelled</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
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

export default VendorOrders;