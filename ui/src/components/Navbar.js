import { Link } from 'react-router-dom';
import video from '../images/main_video.mp4'
import logo from '../images/occassionHub-logo.webp'
import bday from '../images/Caterer.jpg';
import { useEffect, useState } from 'react';
import { adduser, RegisterUserData, userLogin } from '../store/userSlice';
import jscookie from 'js-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import { setNavbar } from '../store/userSlice';
import {useDispatch,useSelector} from 'react-redux';

import { useNavigate} from 'react-router-dom';
var result = "";
const modalCss = {
    content: {
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: '',
        border: 'none',
        borderRadius: '8px',
        width: '100%',
        height: '700px'
        // zIndex :'5'

    }
}
function Navbar() {

    const [isLoginmodal, setLoginmodal] = useState(false);
    const [isRegistrationmodal, setRegistrationmodal] = useState(false);
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    const navbar = useSelector(state=>state.user);
    useEffect(() => {
        dispatch((setNavbar('home')));
        // const token = jscookie.get('user');
        // setToken(token);
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY) {
            // document.getElementById("overlay").style.position = 'fixed'
            document.getElementById("navbar").style.height = '70px';
            document.getElementById("logo").style.height = '40px';
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
            // document.getElementById("navbar").style.backgroundColor = "rgba(51, 51, 51, 0.5)"
            // document.getElementById("navbar").style.backgroundColor = "#2c2c2c"
            document.getElementById("hr").style.display = "none"
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById('content').style.marginTop = '20%'
        }
        else {
            document.getElementById("navbar").style.position = 'absolute';
            document.getElementById("navbar").style.height = '109px';
            document.getElementById("logo").style.height = '50px';
            document.getElementById("navbar").style.backgroundColor = "";
            document.getElementById('content').style.marginTop = '20%'
        }
    });

    function shownav() {
        var offcanvas = document.getElementById('offcanvasExample');
        var navlinks = document.querySelectorAll('.withouttransition');

        offcanvas.addEventListener('shown.bs.offcanvas', function () {
            navlinks.forEach(function (navlink, index) {
                setTimeout(function () {
                    navlink.classList.add('withtransition');
                    navlink.classList.remove('withouttransition');
                }, index * 200);
            });
        });
    }

    function closebutton() {
        var offcanvas = document.getElementById('offcanvasExample');
        var navlinks = document.querySelectorAll('.withtransition');
        document.getElementById('humburger').style.visibility = "visible";
        console.log("navlinkss : ", navlinks);
        offcanvas.addEventListener('shown.bs.offcanvas', function () {
            navlinks.forEach(function (navlink, index) {
                navlink.classList.add('withouttransition');
                navlink.classList.remove('withtransition');
            });
        });
    }

    const [userData, setUserData] = useState({});
    const [otp1, setOtp] = useState('');
    const navigate = useNavigate();
    const getData = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };

    // const handleGenerateOTP = async (event) => {
    //     event.preventDefault();
    //     try {
    //         console.log("userData : ", userData);
    //         const otpResult = await axios.post(requestedURL + "/generateOtp", userData, { withCredentials: true });
    //         console.log(otpResult);
    //         if (otpResult.status === 200) {
    //             alert("email send successfully");
    //             console.log("OTP result: ", otpResult);
    //             navigate("/OtpPage");
    //         }
    //     } catch (error) {
    //         console.error("Error generating OTP : ", error);
    //     }
    // }

    const getOtp = async (event) => {
        event.preventDefault();
        console.log("user data in getotp ", userData);
        result = adduser(userData);
        console.log("result in registration controller ", result);
        document.getElementById("otpfield").style.display = "block";

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("userdata in handlesubmit : ", result)
        result.then((result) => {
            console.log(result.data.Rotp);
            if (result.data.Rotp == otp1) {
                console.log("otp match");
                var result = RegisterUserData(userData);
                result.then((result) => {
                    console.log("result in handle : ", result.status);
                    if (result.status == 201) {
                        alert("Registration Successfull");
                        event.target.reset();
                    }
                });
            } else {
                console.log("not match");

            }
        });
    }
    const [userLoginData, setUserDataLogin] = useState();
    const loginGetData = (event) => {
        const { name, value } = event.target;
        setUserDataLogin({
            ...userLoginData,
            [name]: value
        });
    }
    var message = "";
    const loginHandleSubmit = (event) => {
        event.preventDefault();
        var result = userLogin(userLoginData);
        console.log("result of recruiter : ", result);
        result.then((userResultData) => {
            console.log(userResultData);
            console.log("result of user email : ", userResultData.data.email);
            console.log("result of user status : ", userResultData.status);
            message = userResultData.data.message
            console.log("userResultData.data.message : ", userResultData.data.message);

            console.log("massage in login  : ", message);
            alert("login Successfully")
            setLoginmodal(false);
            event.target.reset();
        });
    }

    const handleLoginButtonClick = () => {
        console.log("in login handle ::  ")
        setLoginmodal(true);
        // document.body.style.overflow = 'hidden';
    };

    const handleLoginModalClose = () => {
        setLoginmodal(false);
        // document.body.style.overflow = 'auto';
    };

    const handleRegistrationModalClose = ()=>{
        setRegistrationmodal(false);
    }

    return (
        <>
            <div className="maindiv">
                <video autoPlay loop muted plays-inline="true" className="video" width="100%">
                    <source src={video} />
                </video>
                <div id="overlay">
                    <nav className="navbar navbar-expand-lg w-100" id="navbar">
                        <div className="container-fluid row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-start">
                                <i className="fa fa-bars ms-4" id="humburger" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                                    style={{ fontSize: "1.5rem", color: "white" }} onClick={() => { shownav() }}></i>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-center">
                                <img src={logo} id="logo" height="80vw" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                                {
                                    (token) ? (<>
                                        <span role='button'>
                                            <Link to='/profile' className='text-decoration-none text-white'>
                                                <i className="bi bi-person" style={{ color: 'white', fontSize: '1.4rem' }} > </i><span className="fs-5">Profile</span>
                                            </Link>
                                        </span>
                                    </>) : (<>
                                        <span role='button' onClick={handleLoginButtonClick} >
                                            <i className="bi bi-box-arrow-in-right" style={{ color: 'white', fontSize: '1.4rem' }} > </i><span className="fs-5" >Login</span>
                                        </span>
                                    </>)
                                }
                            </div>
                        </div>
                    </nav>
                    <div className="col-lg-12 ms-3" id="hr"></div>
                    <div className='text-center text-white p-4' id='content' style={{ marginTop: "11%" }}>
                        <p className='navbarpara1'>Unleash the Extraordinary</p>
                        <p className='mt-3 navbarpara2'>Evalute <span className='webcolor'> your Experience </span> with our Spectacular<br /> Events...!</p>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn text-white bg-dark font-weight-bold mt-2 ms-3 align-items-center" style={{ height: 'auto', width: '40px' }} data-bs-dismiss="offcanvas"
                        aria-label="Close" onClick={() => { closebutton() }}>
                        <h5>X</h5>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="text-end p-5">
                        <div className="mt-3 fs-4 withouttransition"><Link to='/' className='text-white fw-bold text-decoration-none'><span>Home</span></Link></div>
                        <div className="mt-3 fs-4 withouttransition"><Link to='/aboutpage' className='text-white fw-bold text-decoration-none'><span>About</span></Link></div>
                        <div className="mt-3 fs-4 withouttransition"><Link to='/' className='text-white fw-bold text-decoration-none'><span>Gallery</span></Link></div>
                        <div className="mt-3 fs-4 withouttransition"><Link to='/servicepage' className='text-white fw-bold text-decoration-none'><span>Services</span></Link></div>
                        <div className="mt-3 fs-4 withouttransition"><Link to='/' className='text-white fw-bold text-decoration-none'><span>About Us</span></Link></div>
                        <div className="mt-3 fs-4 text-white fw-bold withouttransition"><span>Dj Manager</span></div>
                        <div className="mt-3 fs-4 text-white fw-bold withouttransition"><span>Oranise a Event</span></div>
                        <div className="mt-3 fs-4 text-white fw-bold withouttransition"><span>Catering Manager</span></div>
                        <div className="mt-3 fs-4 text-white fw-bold withouttransition"><span>Decoration Manager</span></div>
                    </div>
                </div>
            </div>

            <Modal size="sm" show={isLoginmodal} onHide={handleLoginModalClose} centered  >
                <Modal.Header closeButton className='bg-black text-white '>
                    <Modal.Title id="contained-modal-title-vcenter ">
                        User login
                    </Modal.Title>
                </Modal.Header >
                <Modal.Body className='p-0'>
                    <div className="login bg-black">
                        <div className="container">
                            <div className="row g-0 p-3">
                                <div className="col-lg-6">
                                    <img src={bday}  className="img-fluid" alt="" />
                                </div>
                                <div className="myform col-lg-6" >
                                    <div id='loginForm'>
                                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "white", fontSize: '2rem' }}>LOGIN FROM</h5>
                                        <form onSubmit={loginHandleSubmit}>
                                            <div className="mb-3 mt-4 d-flex flex-column">
                                                <i className="fa fa-envelope icon" aria-hidden="true"></i>
                                                <input type="email" name="email" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Enter Email" onChange={loginGetData} />
                                            </div>
                                            <div className="mb-3">
                                                <input type="password" name="password" className="form-control input-field" id="exampleInputPassword1" placeholder="Password" onChange={loginGetData} />
                                                <i className="fa fa-unlock-alt icon" aria-hidden="true"></i>
                                            </div>
                                            <button type="submit" className="btn btn-light mt-3 fs-6">Sign In</button>
                                            <p className='fs-5 mt-2'>Don't have an account? <a className='webcolor' onClick={() => { setLoginmodal(false); setRegistrationmodal(true) }}>SignUp</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal size="lg" show={isRegistrationmodal} onHide={handleRegistrationModalClose} centered  >
                <Modal.Header closeButton className='bg-black text-white '>
                    <Modal.Title id="contained-modal-title-vcenter ">
                        User
                    </Modal.Title>
                </Modal.Header >
                <Modal.Body className='p-0'>
                    <div className="login bg-black">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-lg-6 p-4">
                                    <img src={bday}  className="img-fluid registerformimage" alt="" />
                                </div>
                                <div className="myform col-lg-6" >
                                    <div className='mt-4' id='registrationForm'>
                                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "white", fontSize: '2rem' }}>REGISTRATION FROM</h5>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3 mt-4">
                                                <i className="fa fa-user icon" aria-hidden="true"></i>
                                                <input type="name" className="form-control input-field" id="exampleInputName" aria-describedby="nameHelp"
                                                    placeholder="Name" name="name" onChange={getData} />
                                            </div>
                                            <div className="mb-3 mt-4">
                                                <i className="fa fa-envelope icon" aria-hidden="true"></i>
                                                <input type="email" name="email" className="form-control  input-field" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Enter Email" onChange={getData} />
                                            </div>
                                            <div className="mb-3">
                                                <i className="fa fa-unlock-alt icon" aria-hidden="true"></i>
                                                <input type="password" name="password" className="form-control  input-field" id="exampleInputPassword1" placeholder="Password" onChange={getData} />
                                            </div>
                                            <div className="mb-3 mt-4">
                                                <i className="fa fa-phone icon" aria-hidden="true"></i>
                                                <input type="number" name="contect" className="form-control input-field" id="exampleInputContact" aria-describedby="contactHelp"
                                                    placeholder="Contact Us" onChange={getData} />
                                            </div>
                                            <div className="mb-3 mt-4">
                                                <i className="fa fa-map-marker icon" aria-hidden="true"></i>
                                                <input type="text" name="address" className="form-control input-field" id="exampleInputAddress" aria-describedby="addressHelp"
                                                    placeholder="Address" onChange={getData} />
                                            </div>
                                            <button className="btn btn-light mt-3" name="otp" onClick={(event) => { getOtp(event) }}>get OTP</button>
                                            <div className="mb-3 mt-4" id='otpfield'>
                                                <i className="fa fa-unlock-alt icon" aria-hidden="true"></i>
                                                <input type="address" name="address" onChange={handleOtpChange} className="form-control input-field" id="exampleInputAddress" aria-describedby="addressHelp"
                                                    placeholder="Enter Otp" />
                                            </div>
                                            <button type="submit" className="btn btn-light mt-3">Sign up</button>
                                            <p className='fs-5 mt-2' >Already have an account ? <a className='webcolor' onClick={() => { setRegistrationmodal(false) ; setLoginmodal(true) }}>SignIn</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>);
}

export default Navbar;
