// import img from "../images/Caterer.jpg"
// import { Link } from "react-router-dom";
// function Upcomingevent() {
//     return (<>
//         <div className="bg-black p-2">
//             <h5 className="text-center text-light mt-3">Our Latest Event</h5>
//             <h1 className="text-center text-white mt-3"><span className="webcolor">Our Upcoming </span>Events...! </h1>
//             <div className="container p-5">
//                 <div className='row'>
//                     <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
//                         <div className='carddiv1'>
//                             <img src={img} className="card-img-top" alt="..." />
//                             <div className='carinnerdiv text-center'>26 <br /> June</div>
//                         </div>
//                         <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
//                         <div className="card-body">
//                             <p className="card-text">Ticket Price $ 99.00</p>
//                             <p className="card-text">Start TIme 20:00 - 22:00</p>
//                             <p className="card-text">Mosaic , Spain</p>
//                         </div>
//                         <div className='d-flex justify-content-around'>
//                             <button className='ourbtn'>Book Ticket</button>
//                             <button className='ourbtn1'>Event Detail</button>
//                         </div>
//                     </div>

//                     <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
//                         <div className='carddiv1'>
//                             <img src={img} className="card-img-top" alt="..." />
//                             <div className='carinnerdiv text-center'>26 <br /> June</div>
//                         </div>
//                         <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
//                         <div className="card-body">
//                             <p className="card-text">Ticket Price $ 99.00</p>
//                             <p className="card-text">Start TIme 20:00 - 22:00</p>
//                             <p className="card-text">Mosaic , Spain</p>
//                         </div>
//                         <div className='d-flex justify-content-around'>
//                             <button className='ourbtn'>Book Ticket</button>
//                             <button className='ourbtn1'>Event Detail</button>
//                         </div>
//                     </div>

//                     <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
//                         <div className='carddiv1'>
//                             <img src={img} className="card-img-top" alt="..." />
//                             <div className='carinnerdiv text-center'>26 <br /> June</div>
//                         </div>
//                         <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
//                         <div className="card-body">
//                             <p className="card-text">Ticket Price $ 99.00</p>
//                             <p className="card-text">Start TIme 20:00 - 22:00</p>
//                             <p className="card-text">Mosaic , Spain</p>
//                         </div>
//                         <div className='d-flex justify-content-around'>
//                             <button className='ourbtn'>Book Ticket</button>
//                             <button className='ourbtn1'>Event Detail</button>
//                         </div>
//                     </div>

//                     <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
//                         <div className='carddiv1'>
//                             <img src={img} className="card-img-top" alt="..." />
//                             <div className='carinnerdiv text-center'>26 <br /> June</div>
//                         </div>
//                         <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
//                         <div className="card-body">
//                             <p className="card-text">Ticket Price $ 99.00</p>
//                             <p className="card-text">Start TIme 20:00 - 22:00</p>
//                             <p className="card-text">Mosaic , Spain</p>
//                         </div>
//                         <div className='d-flex justify-content-around'>
//                             <button className='ourbtn'>Book Ticket</button>
//                             <button className='ourbtn1'>Event Detail</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='text-center mt-3'>
//                     <Link to='/upcomingevent'><button className='ourbtn'>View All Upcoming Events</button></Link>
//                 </div>
//             </div>
//         </div>
//     </>);
// }

// export default Upcomingevent;

import img from "../images/Caterer.jpg"
import img1 from '../images/concert.jpg';
import { Link } from "react-router-dom";
function Upcomingevent() {
    return (<>
        <div className="bg-black p-2">
            <h5 className="text-center text-light mt-3">Our Latest Event</h5>
            <h1 className="text-center text-white mt-3"><span className="webcolor">Our Upcoming </span>Events...! </h1>
            <div className="container p-5">
                <div className='row'>
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br/>
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br/>
                            <span className="card-text">Mosaic , Spain</span><br/>
                        </div>
                        {/* <div className=''> */}
                            <button className='ourbtn mt-1'>Book Ticket</button>
                            <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>

                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br/>
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br/>
                            <span className="card-text">Mosaic , Spain</span><br/>
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                            <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>

                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                        <span className="card-text">Ticket Price $ 99.00</span><br/>
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br/>
                            <span className="card-text">Mosaic , Spain</span><br/>
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                            <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>

                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br/>
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br/>
                            <span className="card-text">Mosaic , Spain</span><br/>
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                            <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <Link to='/upcomingevent'><button className='ourbtn'>View All Upcoming Events</button></Link>
                </div>
            </div>
        </div>
    </>);
}

export default Upcomingevent;   