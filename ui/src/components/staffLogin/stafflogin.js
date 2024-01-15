import bday from '../../images/bday.avif';
import '../Navbar.css'
import { staffLoginSlice } from '../../store/userSlice.js';
import { useState } from "react";
function StaffLogin() {
    const [stafflogindata, staffData] = useState({});
    function loginGetData(event) {
        let { name, value } = event.target;
        staffData({
            ...stafflogindata,
            [name]: value
        });
    }

    function loginHandleSubmit(event) {
        event.preventDefault();
        console.log("stafflogindata :-------------> ", stafflogindata);
        var result = staffLoginSlice(stafflogindata);
        console.log("result : ", result);
        result.then((data) => {
            if (data.status == 201) {
                alert("login sucefullyy staff");
                //   setDjRegistrationModal(false);
            }
        }).catch((err) => {
            alert("error in staff login......!!");
            console.log("error in catch.....!!" + err);
        });
    }
    return (<>
        {/* <div className="login bg-black">
            <div className="container p-0">
                <div className="row g-0 p-2">
                    <div className="col-lg-5 bg-success p-0">
                        <img src={bday} className="w-100" height='100%' alt="" />
                    </div>
                    <div className="myform col-lg-7 p-3 " >
                        {/* <div className='d-flex justify-content-end'>
                            <button className='btn-close' aria-label="Close" onClick={() => { setLoginmodal(false) }}></button>
                        </div> */}
        {/* <div id='loginForm'>
                            <h2 className="modal-title text-white" id="staticBackdropLabel" > <span className='webcolor'>STAFF LOGIN </span> FORM</h2>
                            <form onSubmit={loginHandleSubmit}>
                                <div className="mb-3 mt-4 d-flex flex-row align-items-center">
                                    <input type="email" name="email" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Enter Email" value={stafflogindata.email} onChange={loginGetData} />
                                    <i className="fa fa-envelope icon" aria-hidden="true"></i>
                                </div>
                                <div className="mb-3 mt-4 d-flex flex-row align-items-center">
                                    <input type="password" value={stafflogindata.password} name="password" className="form-control input-field" id="exampleInputPassword1" placeholder="Password" onChange={loginGetData} />
                                    <i className="fa fa-unlock-alt icon" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-12">
                                    <select className="w-100 mt-4" id="select1" name="serviesType" onChange={loginGetData} value={stafflogindata.serviesType} aria-label="Default select example">
                                        <option selected>Select Servies Type</option>
                                        <option value="caterer">caterer</option>
                                        <option value="Decoration">Decoration</option>
                                        <option value="Dj">Dj</option>
                                        <option value="venue">venue</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-light mt-3 fs-6">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
        {/* </div>  */}
        <div className="container bg-black w-75 ml-3">
            <div className="row" id="outdiv">
                <div className="col-lg-6 ml-3 mt-1" style={{ marginRight: "6rem" }}>
                    <section className="h-50 h-custom gradient-custom-2">
                        <h1 style={{ color: "#FF0057" }} className="text-center">STAFF LOGIN<span style={{ color: "white" }}> FORM</span></h1>
                        <form className="px-md-2 form-group" onSubmit={loginHandleSubmit}>
                            <div className="row ">
                                {/* <div className="col-lg-6 ml-5">
                                    <img src={bday} className="w-100" height='100%' alt="" />


                                </div> */}
                                 <div className="col-lg-6 ml-3 mt-1" style={{ marginRight: "6rem" }}></div>
                                <div className="col-md-12">
                                    <div className="mt-4">
                                        <input type="email" onChange={loginGetData} name="email" value={stafflogindata.email} style={{ background: 'black' }} id="name2" className="form-control input-field" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mt-4">
                                        <input type="text" onChange={loginGetData} name="password" value={stafflogindata.password} style={{ background: 'black' }} id="name2" className="form-control input-field" placeholder="Enter Password" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <select className="w-100 mt-4" id="select1" name="serviesType" onChange={loginGetData} value={stafflogindata.serviesType} aria-label="Default select example">
                                        <option disabled>Select Servies Type</option>
                                        <option value="caterer">caterer</option>
                                        <option value="Decoration">Decoration</option>
                                        <option value="Dj">Dj</option>
                                        <option value="venue">venue</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 ml-5"  style={{marginLeft:"40rem",height:"20rem",width:"29rem",marginTop:"-17rem"}}>
                                    <img src={bday} className="w-100" height='100%' alt="" />
                                </div>
                                <div className="d-flex justify-content-center mt-3 form-control" style={{background:"#FF0057"}}>
                                    <button type="submit" className="ourbtn w-50 h-100">Submit</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div >
    </>)
}
export default StaffLogin;