// Packages
import { Link } from 'react-router-dom';
// Assets
import logo from '../../logo.svg'; 
import Sidebar from './Sidebar'; 

function Profile(){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Update Profile</h4>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstname"  />
                            </div>
                            <div className="mb-3">
                                <label for="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastname"  />
                            </div>
                            <div className="mb-3">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username"  />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label for="profileImg" className="form-label">Profile Image</label>
                                <input type="file" className="form-control" id="profileImg" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Profile;