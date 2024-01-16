import './catresdashbord.css';
import './serviceprovidercss.css';
import userImage from "../../images/user.jpg";
import secondBannerImage from '../../images/klipartz.png';
function CatresDashBoard() {
    return (<>
        <div className="container my-3 bg-dark" id='main-container'>
            <div className="container text-light">
                <div className="row" style={{marginTop:"15vh"}}>
                    <div className="col col-lg-6  col-md-12 col-12 p-5">
                        <h3><span className="text-danger">Crafting Culinary Experiences -Elevating Events</span>
                            <span>with Exquisite Catering</span>
                        </h3>
                        <div className="row">
                            <div className="col col-lg-3 col-md-3 col-12 firstImageBanner"></div>
                            <div className="col col-lg-9 col-md-9 col-12">
                                <p className="py-3 fs-5">Feel free to customize it based on specific details about your catering business and the services you provide.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col col-lg-6 col-md-12 col-12 SecondImageBanner">
                        {/* <img src={secondBannerImage} alt="image.." height="350" /> */}
                    </div>
                </div>

                {/* <button className="btn btn-danger">Submit</button> */}
            </div>
        </div>
        <div className="container-fluid d-flex p-0">
        {/* <!-- Sidebar Start --> */}
        <div className="sidebar pe-4 pb-3 position-absolute w-25 mySideBar" style={{top: "82vh",left:"4vw"}}>
            <nav className="navbar bg-light navbar-light bg-dark border-radius m-0  ">
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src={userImage} alt="" style={{width: "40px", height: "40px"}}/>
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
                    <a href="#" className="nav-item nav-link  mySideBar text-light "><i
                            className="fa fa-th me-2 text-dark"></i>See Request</a>
                    <a href="#" className="nav-item nav-link mySideBar text-light "><i
                            className="fa fa-th me-2 text-dark"></i>Dashboard</a>
                    <a href="#" className="nav-item nav-link mySideBar text-light "><i
                            className="fa fa-th me-2 text-dark"></i>Customers Orders</a>
                    <a href="#" className="nav-item nav-link mySideBar text-light "><i
                            className="fa fa-table me-2 text-dark"></i>Add Bank Details</a>
                    <a href="#" className="nav-item nav-link mySideBar text-light "><i
                            className="fa fa-th me-2 text-dark"></i>Add Description</a>
                    <a href="#" className="nav-item nav-link mySideBar text-light "><i
                            className="fa fa-th me-2 text-dark"></i>Updates Password</a>
                    <a href="#" className="nav-item nav-link mySideBar text-light "><i
                            className="fa fa-th me-2 text-dark"></i>Charts</a>

                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End --> */}

        {/* <!-- Content Start --> */}
        <div className="container-fluid mx-5">
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg text-light  px-4 py-0 mySideBar">
                <div className="container-fluid mySideBar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand mx-2 mx-lg-5 text-light" href="#">CATERER-PROFILE</a>

                    <form className="d-flex mx-2 mx-lg-5 my-2">
                        <input className="form-control border-0 text-light nameSection" type="search" placeholder="Search"/>
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
                                    <img className="rounded-circle me-lg-2"  src={userImage} alt=""
                                        style={{width:" 40px", height: "40px"}}/>
                                    <span className="d-none d-lg-inline-flex text-light">John Doe</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

            {/* <!-- New Container for Cards --> */}
            <div className="container mt-5 me-1">
                <div className="row">
                    <div className="col-lg-6 mx-auto  text-light scrollers">
                        {/* <!-- Cards starts --> */}
                        <div className="col-lg-9 mb-3 mySideBar">
                            <div className="row p-2 w-100 bg-info">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4 text-center cloudy-text">
                                    <span className="imagesSideSecion">26</span><br/>
                                    <span className="imagesSideSecion">June 2024</span>
                                </div>
                                <div className="col col-lg-5 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>Lorem ipsum, dolor sit consectetur maxime?</span><br/>
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                            className="text-light">07:00 pm - 01:00 am </small></span><br/>
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                            className="text-light">Address </small></span>
                                </div>
                                <div className="col col-lg-4 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Cards end --> */}
                        <div className="col-lg-12 mb-3 mySideBar ">
                            <div className="row p-2 ">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4 text-center">
                                    <span className="imagesSideSecion">26</span><br/>
                                    <span className="imagesSideSecion">June 2024</span>
                                </div>
                                <div className="col col-lg-6 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>Lorem ipsum, dolor sit consectetur maxime?</span><br/>
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                            className="text-light">07:00 pm - 01:00 am </small></span><br/>
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                            className="text-light">Address </small></span>
                                </div>
                                <div className="col col-lg-3 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3 mySideBar">
                            <div className="row p-2">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4  text-center">
                                        <span>26</span><br/>
                                        <span>June 2024</span>
                                </div>
                                <div className="col col-lg-6 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>Lorem ipsum, dolor sit consectetur maxime?</span><br/>
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                            className="text-light">07:00 pm - 01:00 am </small></span><br/>
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                            className="text-light">Address </small></span>
                                </div>
                                <div className="col col-lg-3 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3 mySideBar">
                            <div className="row p-2">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4  text-center">
                                        <span>26</span><br/>
                                        <span>June 2024</span>
                                </div>
                                <div className="col col-lg-6 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>Lorem ipsum, dolor sit consectetur maxime?</span><br/>
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                            className="text-light">07:00 pm - 01:00 am </small></span><br/>
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                            className="text-light">Address </small></span>
                                </div>
                                <div className="col col-lg-3 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3 mySideBar">
                            <div className="row p-2">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4  text-center">
                                        <span>26</span><br/>
                                        <span>June 2024</span>
                                </div>
                                <div className="col col-lg-6 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>Lorem ipsum, dolor sit consectetur maxime?</span><br/>
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                            className="text-light">07:00 pm - 01:00 am </small></span><br/>
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                            className="text-light">Address </small></span>
                                </div>
                                <div className="col col-lg-3 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3 mySideBar">
                            <div className="row p-2">
                                <div className="col col-lg-3 col-md-4 col-12 my-2 my-lg-4  text-center">
                                        <span>26</span><br/>
                                        <span>June 2024</span>
                                </div>
                                <div className="col col-lg-6 col-md-4 col-12  my-2">
                                    <h5 className="text-light">Andrew Anderson</h5>
                                    <span>Lorem ipsum, dolor sit consectetur maxime?</span><br/>
                                    <span className="card-text"><i className="bi bi-clock text-danger me-3"></i><small
                                            className="text-light">07:00 pm - 01:00 am </small></span><br/>
                                    <span className="card-text"><i className="bi bi-geo-alt text-danger me-3"></i><small
                                            className="text-light">Address </small></span>
                                </div>
                                <div className="col col-lg-3 col-md-4 col-12">
                                    <button className="btn btn-danger my-5">View Requirments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End New Container for Cards --> */}

        </div>
        {/* <!-- Content End --> */}
    </div>

    </>);
}

export default CatresDashBoard;