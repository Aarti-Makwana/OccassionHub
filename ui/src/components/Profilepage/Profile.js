import { Link } from 'react-router-dom';
import '../../App.css';
import userProfile from "../../images/anjali.jpg";
import './profile.css';
import jscookie from 'js-cookie';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

var userData = {};
function Profile() {
    const [selectedValue, setSelectedValue] = useState('');
    const history = useNavigate();
    // const profileData = useSelector((state) => state.userSlice.profileData);
    // console.log("profileData : ",profileData)
    // const userDataCookie = jscookie.get("userdata");
    // console.log("userDataCookie in profile page: ", userDataCookie);
    // if (userDataCookie) {
    //     try {
    //         userData = JSON.parse(userDataCookie);
    //         console.log("userDataCookie in profile page : ",userDataCookie);
    //         // return userData;
    //     } catch (error) {
    //         console.log("Error parsing user data from cookie", error);
    //         // return null;
    //     }
    // }
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);

        switch (selectedOption) {
            case 'dj':
                history('/djregister');
                break;
            case 'caterer':
                history('/catererregister');
                break;
            case 'venue':
                history('/venueregister');
                break;
            case 'decoration':
                history('/decorationregister');
                break;
            default:
                history('/profile');
                break;
        }
    };
    const userLogout = () => {
        jscookie.remove("user");
        history('/');
    }

    return (<>
        <div className='container p-2 w-75 text-white mb-3 profilemaincontainer'>
            <div className='bg-dark p-2'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-end'>
                        <button className='ourbtn'>Search Services</button>
                        <button className='ourbtn ms-1'><i className="fa fa-bell" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 d-flex flex-column justify-content-center'>
                        <div className="d-flex justify-content-center mt-1">
                            <img src={userProfile} className="img-fluid w-75" alt="Profile Image" />
                        </div>
                        <div className='profilebuttons d-flex flex-column justify-content-center'>
                            <button className="btn btn-danger w-75 mt-1 " >Buy Passes</button>
                            <select className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }} value={selectedValue} onChange={handleChange}>
                                <option>Become A Staff</option>
                                <option className='text-start' value='dj'>Dj user</option>
                                <option className='text-start' value='caterer'>Caterer Manager</option>
                                <option className='text-start' value='venue'>Venue Manager</option>
                                <option className='text-start' value='decoration'>Decoration Manager</option>
                            </select>
                            <button className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }}>View Quotation</button>
                            <button className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }}>View Bill</button>
                            <button className="btn btn-danger w-75 mt-1 " style={{ width: "250px" }} onClick={userLogout}>Log Out</button>
                        </div>
                    </div>
                    <div className='col-lg-8 p-4'>
                        <div className='mt-4'>
                            <h2 className="usernameProfile">I am <span className='nameP'> Dheeraj singh chouhan</span></h2>
                            <button className="btn btn-danger">Edit Profile</button>
                            <hr style={{ height: '3px', backgroundColor: "#ff0057" }} />
                        </div>
                        <div className='py-4'>
                            <div className='row mt-2'>
                                <div className='col-lg-4 text-start'>
                                    <h4>Email</h4>
                                </div>
                                <div className='col-lg-8 text-start'>
                                    <h4>Dheerajsinghchouhan@gmail.com</h4>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-4 text-start'>
                                    <h4>Address</h4>
                                </div>
                                <div className='col-lg-8 text-start'>
                                    <h4>Mangliya Indore Mp</h4>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-4 text-start'>
                                    <h4>Phone Number</h4>
                                </div>
                                <div className='col-lg-8 text-start'>
                                    <h4>6264037225</h4>
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