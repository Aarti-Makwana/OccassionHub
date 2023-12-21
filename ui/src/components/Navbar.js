import { Link } from 'react-router-dom';
import video from '../images/main_video.mp4'
import logo from '../images/occassionHub-logo.webp'
import bday from '../images/bday.avif';
import { useState } from 'react';
import { adduser, RegisterUserData, userLogin } from '../store/userSlice';
import '../App.css';

import { useNavigate } from 'react-router-dom';
var result = "";
function Navbar() {
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

            console.log("massage in login ", message);
        });
    }

    const handleForms = (buttonValue)=>{

        var loginForm = document.getElementById('loginForm');
        if(buttonValue == 'registration'){
            var registrationForm = document.getElementById('registrationForm');
            registrationForm.style.display = "block";
            loginForm.style.display = "none";

            var registrationbutton = document.getElementById('registrationbutton');
            registrationbutton.style.color = 'white'
            registrationbutton.style.backgroundColor = '#FF0057'

            var loginbutton = document.getElementById('loginbutton');
            loginbutton.style.color = ''
            loginbutton.style.backgroundColor = ''
        }
        else{
            var loginForm = document.getElementById('loginForm');
            var registrationForm = document.getElementById('registrationForm');
            loginForm.style.display = "block";

            registrationForm.style.display = "none";
            var loginbutton = document.getElementById('loginbutton');
            loginbutton.style.color = 'white'
            loginbutton.style.backgroundColor = '#FF0057'

            var registrationbutton = document.getElementById('registrationbutton');
            registrationbutton.style.color = ''
            registrationbutton.style.backgroundColor = ''
        }
    }


    return (<>
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
                            <span role='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                <i className="bi bi-box-arrow-in-right" style={{ color: 'white', fontSize: '1.4rem' }} > </i><span className="fs-5">Login</span>
                            </span>
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
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="login py-5 bg-dark">
                            <div className="container">
                                <div className="row g-0">
                                    <div className="col-lg-6" style={{ height: '14rem' }}>
                                        <img src={bday} style={{ marginTop: '-2rem', height: '30rem' }} className="img-fluid" alt="" />
                                    </div>
                                    <div className="myform bg-dark col-lg-6">
                                        <div className='buttonsdiv'>
                                            <button id='loginbutton' value='login' onClick={()=>{handleForms('login')}}>Login</button>
                                            <button id='registrationbutton' value='registration' onClick={()=>{handleForms('registration')}}>Registation</button>
                                        </div>
                                        <hr className='text-white' style={{height :'2px'}}/>
                                        <div className='mt-4' id='registrationForm'>
                                            <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "white", fontSize: '2rem' }}>REGISTRATION FROM</h5>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3 mt-4">
                                                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                                                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                                                        placeholder="Name" name="name" onChange={getData} />
                                                </div>
                                                <div className="mb-3 mt-4">
                                                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                        placeholder="Enter Email" onChange={getData} />
                                                </div>
                                                <div className="mb-3">
                                                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>

                                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={getData} />
                                                </div>
                                                <div className="mb-3 mt-4">
                                                    <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                                                    <input type="number" name="contect" className="form-control" id="exampleInputContact" aria-describedby="contactHelp"
                                                        placeholder="Contact Us" onChange={getData} />
                                                </div>
                                                <div className="mb-3 mt-4">
                                                    <span className="icon"><ion-icon name="location-outline"></ion-icon></span>
                                                    <input type="text" name="address" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp"
                                                        placeholder="Address" onChange={getData} />
                                                </div>
                                                <button className="btn btn-light mt-3" name="otp" onClick={(event) => { getOtp(event) }}>get OTP</button>
                                                <div className="mb-3 mt-4" id='otpfield'>
                                                    <span className="icon"><ion-icon name="location-outline"></ion-icon></span>
                                                    <input type="address" name="address" onChange={handleOtpChange} className="form-control" id="exampleInputAddress" aria-describedby="addressHelp"
                                                        placeholder="Enter Otp" />
                                                </div>
                                                <button type="submit" className="btn btn-light mt-3">Sign up</button>
                                                <p>Have an account? <a>SignIn</a></p>
                                            </form>
                                        </div>
                                        <div id='loginForm'>
                                            <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "white" , fontSize: '2rem' }}>LOGIN FROM</h5>
                                            <form onSubmit={loginHandleSubmit}>
                                                {(message) ? message : ""}
                                                <div className="mb-3 mt-4">
                                                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                        placeholder="Enter Email" onChange={loginGetData} />
                                                </div>
                                                <div className="mb-3">
                                                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={loginGetData} />
                                                </div>
                                                <button type="submit" className="btn btn-light mt-3">Sign up</button>
                                                <p>Have an account? <a>SignIn</a></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="modal-header bg-dark">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="login py-5 bg-dark">
                    <div className="container">
                    <div className="row g-0">
                    <div className="col-lg-6" style={{ height: '14rem' }}>
                    <img src={bday} style={{ marginTop: '-2rem', height: '30rem' }} className="img-fluid" alt="" />
                    </div>
                    <div className="myform bg-dark col-lg-6">
                    <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "white", marginLeft: '23rem', fontSize: '2rem' }}>LOGIN FROM</h5>
                                    <form onSubmit={loginHandleSubmit}>
                                        {(message) ? message : ""}
                                        <div className="mb-3 mt-4">
                                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                placeholder="Enter Email" onChange={loginGetData} />
                                        </div>
                                        <div className="mb-3">
                                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={loginGetData} />
                                        </div>
                                        <button type="submit" className="btn btn-light mt-3">Sign up</button>
                                        <p>Have an account? <a>SignIn</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Understood</button>
                </div> */}
            </div>
        </div >
    </>);
}


export default Navbar;