import { Link } from 'react-router-dom';
import '../../App.css';
import userProfile from "../../images/anjali.jpg";
import './profile.css';
import jscookie from 'js-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { user_requestedUrl } from '../../urls.js';
import DjForm from '../DjRegistration/DjForm.js';
import Caterersreg from '../CatererRegistration/Caterersreg.js'
import Decorationform from '../DecorationRegistration/Decorationform.js';
import Venue from '../VenueRegistration/Venueform.js';
import EditProfile from './EditProfileModal.js';
import UpdatePasswordModal from './UpdatePasswordModal.js';

var userData = {};
function Profile() {
    const [selectedValue, setSelectedValue] = useState('');
    const history = useNavigate();
    const [userDetails, setuserDetails] = useState({});
    var userEmail = jscookie.get("user");

    console.log("userEmail on profile page ---------", userEmail);
    useEffect(() => {
        if (userEmail) {
            try {
                axios.post(user_requestedUrl + "/profile", { userEmail: userEmail })
                    .then(response => {
                        setuserDetails(response.data.userDetails);
                    })
                    .catch(err => {
                        console.log("Error in user profile data ", err);
                    });
            } catch (err) {
                console.log("Error in user profile data ", err);
            }
        }
    }, [userEmail]);
    
    const userLogout = () => {
        jscookie.remove("user");
        history('/');
    }

    return (<>
        <div className='container p-2 w-75 text-white mb-3 profilemaincontainer'>
            <div className='bg-dark p-2'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-end'>
                    <button className='ourbtn'><Link to="/searchServices" className='text-decoration-none text-white'>Search Services</Link></button>
                        <button className='ourbtn ms-1'><i className="fa fa-bell" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 d-flex flex-column justify-content-center'>
                        <div className="d-flex justify-content-center mt-1">
                            <img src={userProfile} className="img-fluid w-75" alt="Profile Image" />
                        </div>
                        <div className='profilebuttons d-flex flex-column justify-content-center'>
                            <button className="btn btn-danger w-75 mt-1 " ><Link to="/passes" style={{color:"white",textDecoration:"none"}}>Buy Passes</Link></button>

                            <div className="dropdown m-0">
                                <a className="btn btn-danger w-75 mt-1 dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Become a Staff
                                </a>
                                <ul className="dropdown-menu bg-danger" aria-labelledby="dropdownMenuLink">
                                    <li className="dropdown-item cursorpointer">
                                        <DjForm />
                                    </li>
                                    <li className="dropdown-item cursorpointer">
                                        <Caterersreg />
                                    </li>
                                    <li className="dropdown-item cursorpointer">
                                        <Decorationform />
                                    </li>
                                    <li className="dropdown-item cursorpointer">
                                        <Venue />
                                    </li>
                                </ul>
                            </div>

                            <button className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }}>View Quotation</button>
                            <button className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }}>View Bill</button>
                            <button className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }} onClick={userLogout}>Log Out</button>
                        </div>
                    </div>
                    <div className='col-lg-8 p-4'>
                        <div className='mt-4'>
                            <h2 className="usernameProfile">I am <span className='nameP'>{userDetails.name}</span></h2>
                            {/* <button className="btn btn-danger">Edit Profile</button> */}
                            <EditProfile userData={userDetails} />
                            <UpdatePasswordModal userData={userDetails} />
                            <hr style={{ height: '3px', backgroundColor: "#ff0057" }} />
                        </div>
                        <div className='py-4'>
                            <div className='row mt-2'>
                                <div className='col-lg-4 text-start'>
                                    <h4>Email</h4>
                                </div>
                                <div className='col-lg-8 text-start'>
                                    <h4>{userDetails.email}</h4>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-4 text-start'>
                                    <h4>Address</h4>
                                </div>
                                <div className='col-lg-8 text-start'>
                                    <h4>{userDetails.address}</h4>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-4 text-start'>
                                    <h4>Phone Number</h4>
                                </div>
                                <div className='col-lg-8 text-start'>
                                    <h4>{userDetails.contect}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='py-2 text-grey' style={{ background: "" }}>
                            <h4 className='ms-2'>Informantion</h4>
                            <h6 className='ms-3'>1. If you want to plan your own event, you can click.</h6>
                            <h6 className='ms-3'>2. If you want to plan your own event.</h6>
                            <h6 className='ms-3'>1. If you want to plan your own event, you can click.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)

}
export default Profile;