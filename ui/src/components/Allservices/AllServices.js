import './allservices.css';
import { useState, useEffect } from 'react';
import img from "../../images/Caterer.jpg"

function AllServices() {
    const [activeTab, setActiveTab] = useState('active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    var catererList = () => {
        return (<>
            <div className="row">
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-12 my-3">
                    <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                        <div className='carddiv1'>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className='carinnerdiv text-center'>26 <br /> June</div>
                        </div>
                        <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                        <div className="card-body">
                            <span className="card-text">Ticket Price $ 99.00</span><br />
                            <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                            <span className="card-text">Mosaic , Spain</span><br />
                        </div>
                        {/* <div className=''> */}
                        <button className='ourbtn mt-1'>Book Ticket</button>
                        <button className='ourbtn1 mt-1'>Event Detail</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>);
    }
    const renderContent = () => {
        switch (activeTab) {
            case 'catering':
                return (<>
                    {catererList()}
                </>);
            case 'decoration':
                return (<>
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Decoration</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start Time 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Decoration</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start Time 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Decoration</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start Time 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start Time 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start Time 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start Time 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                </>);
            case 'dj':
                return (<>
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>DJ</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>DJ</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>DJ</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                </>);
            case 'venue':
                return (<>
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Venu</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 my-3">
                            <div className="card p-2 bg-dark text-white col-lg-3 m-auto" style={{ width: "18rem" }}>
                                <div className='carddiv1'>
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className='carinnerdiv text-center'>26 <br /> June</div>
                                </div>
                                <h4 className="card-title fw-bold p-1 mt-2"><span className='webcolor'>Mosaic</span>  RJ Mahvesh Event</h4>
                                <div className="card-body">
                                    <span className="card-text">Ticket Price $ 99.00</span><br />
                                    <span className="card-text">Start TIme 20:00 - 22:00</span><br />
                                    <span className="card-text">Mosaic , Spain</span><br />
                                </div>
                                {/* <div className=''> */}
                                <button className='ourbtn mt-1'>Book Ticket</button>
                                <button className='ourbtn1 mt-1'>Event Detail</button>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                </>);
            default:
                return (
                    <>
                        {catererList()}
                    </>
                );
        }
    };

    return (<>
        <div className="container">
            <h2 className="text-center my-2 heading1"><span>OUR LATEST </span><span className='secondSpan'> SERVICES</span></h2>
            <div className="container my-4">
                <div className="row">
                    <div className="col col-lg-6 col-md-12 col-12 leftSection"></div>
                    <div className="col col-lg-6 col-md-12 col-12 rightSection">
                        <p className="fs-5">Our catering services are crafted to surpass your expectations and leave a lasting impression on your guests. From intimate gatherings to grand celebrations, our team of skilled chefs and dedicated staff are committed to providing a seamless and delectable dining experience.Our catering services are crafted to surpass your expectations and leave a lasting impression on your guests. From intimate gatherings to grand celebrations, our team of skilled chefs and dedicated staff are committed to providing a seamless and delectable dining experience.Our catering services are crafted to surpass your expectations and leave a lasting impression on your guests. From intimate gatherings to grand celebrations, our team of skilled chefs and dedicated staff are committed to providing a seamless and delectable dining experience. </p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <hr className="line" style={{ backgroundColor: "gray", height: "10px" }} />
                <span className="text-center  fs-2 webcolor bookserviceheading py-2">Book <span className='secondSpan'>Services</span><span className="fs-1 dotSpan secondSpan">...</span></span>
            </div>


            <div className="container d-flex justify-content-center my-3">
                <ul className="nav fs-4">
                    <li className={`nav-item px-5 mx-5  webcolor bookserviceheading  py-2${activeTab === 'catering' ? 'active' : ''}`}>
                        <button className="nav-link links" onClick={() => handleTabClick('catering')}>Catering</button>
                    </li>
                    <li className={`nav-item px-5 mx-5  webcolor bookserviceheading  py-2${activeTab === 'decoration' ? 'active' : ''}`}>
                        <button className="nav-link links" onClick={() => handleTabClick('decoration')}>Decoration</button>
                    </li>
                    <li className={`nav-item px-5 mx-5  webcolor bookserviceheading  py-2${activeTab === 'dj' ? 'active' : ''}`}>
                        <button className="nav-link links" onClick={() => handleTabClick('dj')}>DJ</button>
                    </li>
                    <li className={`nav-item px-5 mx-5  webcolor bookserviceheading  py-2${activeTab === 'venue' ? 'active' : ''}`}>
                        <button className="nav-link links" onClick={() => handleTabClick('venue')}>Venue</button>
                    </li>
                </ul>
            </div>

            <div className="container my-4 linksContainer">
                {renderContent()}
            </div>
        </div>
        {/* helloo */}
    </>);
}
export default AllServices;