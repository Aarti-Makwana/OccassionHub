import './CatererDashboard.css';
import userImage from "../../images/user.jpg";
import { useState, useEffect } from 'react';
import { caterre_requestUrl } from '../../urls.js';
import axios from 'axios';

function CaterersDashboard() {
    const [activeLink, setActiveLink] = useState('seeRequest');
    const [allRequestedUserData, setAllRequestedUserData] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    var openSideBar = () => {
        document.getElementById("sideNavBar").style.display = "block";
    }
    const fetchData = async () => {
        try {
            const response = await axios.get(caterre_requestUrl + '/catereSeeRequestedData');
            setAllRequestedUserData(response.data.allUserRequestedDataForCateres);
            setUserInfo(response.data.normalUserInfo);
        } catch (err) {
            console.log("Error in catrers dashboard while showing data ", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLinkClick = async (link) => {
        if (link !== activeLink) {
            setActiveLink(link);
            if (link === 'seeRequest') {
                fetchData();
            }
        }
    }
    const renderContent = () => {
        if (activeLink === 'seeRequest') {
            return (
                <>
                    {console.log("allRequestedUserData-----> ", allRequestedUserData)}
                    {allRequestedUserData.map((data, index) => (
                        <div className="col-lg-9 mb-1 mySideBar w-100 bg-dark" key={index}>
                            <div className="row p-2 w-100 mb-3">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4 text-center cloudy-text">
                                    <span className="imagesSideSecion">{new Date(data.date).getDate()}</span><br />
                                    <span className="imagesSideSecion">{new Date(data.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="col col-lg-5 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>{data.addtionalmenu}</span><br />
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                        className="text-light">{data.time} </small></span><br />
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                        className="text-light">{data.location} </small></span>
                                </div>
                                <div className="col col-lg-4 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            );
        } else if (activeLink === 'dashboard') {
            return <p className='bg-dark text-danger'>dashboard here</p>;
        } else if (activeLink === 'customerOrder') {
            return <p className='bg-dark text-danger'>customer Order here</p>;
        } else if (activeLink === 'bankDetails') {
            return (
                <>
                    <p className='bg-dark text-danger'>bank Details here</p>
                </>
            );
        } else if (activeLink === 'description') {
            return (
                <>
                    <p className='bg-dark text-danger'>description here</p>
                </>
            );
        } else if (activeLink === 'updatePassword') {
            return (
                <>
                    <p className='bg-dark text-danger'>update Password here</p>
                </>
            );
        }

        return null;
    }
    return (<>
        <div className="container my-3 bg-dark" id='catrer-main-container'>
            <div className="container text-light">
                <div className="row" style={{ marginTop: "15vh" }}>
                    <div className="col col-lg-6  col-md-12 col-12 p-5">
                        <h3><span className="text-danger" >Crafting Culinary Experiences -Elevating Events</span> <br />
                            <span>  with Exquisite Catering</span>
                        </h3>
                        <div className="row">
                            <div className="col col-lg-3 col-md-3 col-12 firstImageBanner"></div>
                            <div className="col col-lg-9 col-md-9 col-12">
                                <p className="py-3 fs-5">Feel free to customize it based on specific details about your catering business and the services you provide.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col col-lg-6 col-md-12 col-12 SecondImageBanner">
                    </div>
                </div>
            </div>
        </div>

        <div className="container" id="catrerMainDiv">
            <div className='container my-3'>
                <nav className="navbar navbar-expand-lg text-light px-4   mySideBar" style={{ top: "1vh" }}>
                    <div className="container-fluid " >
                        <span className="navbar-toggler-icon" onClick={openSideBar}></span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a className="navbar-brand mx-2 mx-lg-5 text-light" href="#">CATERER-PROFILE</a>

                        <form className="d-flex mx-2 mx-lg-5 my-2">
                            <input className="form-control border-0 text-light nameSection" type="search" placeholder="Search" />
                        </form>

                        <div className="navbar-nav mx-2 mx-lg-5 my-2">
                            <button className="btn btn-danger">
                                <i className="bi bi-plus"></i> Add Gallery
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav align-items-center ms-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link  " >
                                        <i className="fa fa-envelope me-lg-2 text-danger"></i>
                                        <span className="d-none d-lg-inline-flex text-light">Message</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a href="#" className="nav-link" >
                                        <i className="fa fa-bell me-lg-2 text-danger"></i>
                                        <span className="d-none d-lg-inline-flex text-light">Notification</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                        <img className="rounded-circle me-lg-2" src={userImage} alt=""
                                            style={{ width: " 40px", height: "40px" }} />
                                        <span className="d-none d-lg-inline-flex text-light">John Doe</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='container-fluid row'>
                <div className="col-md-4 col-4 col-lg-4 siderbar pe-4 pb-3 mySideBar" style={{ width: "25vw", marginLeft: "1vw" }} id="sideNavBar">
                    <nav className="navbar bg-light navbar-light bg-dark border-radius m-0  ">
                        <div className="d-flex align-items-center ms-4 mb-4">
                            <div className="position-relative">
                                <img className="rounded-circle" src={userImage} alt="" style={{ width: "40px", height: "40px" }} />
                                <div
                                    className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                                </div>
                            </div>
                            <div className="ms-3 pt-4">
                                <h6 className="mb-0">Jhon Doe</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                        <div className="navbar-nav w-100 mySideBar">
                            <div className="nav-item nav-link mySideBar text-light " onClick={() => handleLinkClick('seeRequest')}>
                                <i className="fa fa-th me-2 text-dark"></i>See Request
                            </div>
                            <div className="nav-item nav-link mySideBar text-light " onClick={() => handleLinkClick('dashboard')}>
                                <i className="fa fa-th me-2 text-dark"></i>Dashboard
                            </div>
                            <div className="nav-item nav-link mySideBar text-light " onClick={() => handleLinkClick('customerOrder')}>
                                <i className="fa fa-th me-2 text-dark"></i>Customers Orders
                            </div>
                            <div className="nav-item nav-link mySideBar text-light " onClick={() => handleLinkClick('bankDetails')}>
                                <i className="fa fa-th me-2 text-dark"></i>Add Bank Details
                            </div>

                            <div className="nav-item nav-link mySideBar text-light " onClick={() => handleLinkClick('description')}>
                                <i className="fa fa-th me-2 text-dark"></i>Add Description
                            </div>
                            <div className="nav-item nav-link mySideBar text-light " onClick={() => handleLinkClick('updatePassword')}>
                                <i className="fa fa-th me-2 text-dark"></i>Updates Password
                            </div>

                        </div>
                    </nav>
                </div>

                <div className="col-lg-8 col-md-8 col-8">
                    <div className="row">
                        <div className="col-lg-12 mx-auto  text-light scrollers" >
                            {renderContent()}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default CaterersDashboard;
