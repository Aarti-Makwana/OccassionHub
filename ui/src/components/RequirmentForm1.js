import './requirmentform.css';


function RequirmentForm() {

    function customise() {
        const mealsection = document.getElementById('mealsection');
        const cateringCheckbox = document.getElementById('cateringCheckbox');

        const venusection = document.getElementById('venusection');
        const venuCheckbox = document.getElementById('venuCheckbox');

        const decorationsection = document.getElementById('decorationsection');
        const decorationCheckboxnuCheckbox = document.getElementById('decorationCheckbox');

        const djsection = document.getElementById('djsection');
        const djCheckbox = document.getElementById('djCheckbox');

        if (cateringCheckbox.checked) {
            mealsection.style.display = 'block';
        } else {
            mealsection.style.display = 'none';
        }


        if (venuCheckbox.checked) {
            venusection.style.display = 'block';
        } else {
            venusection.style.display = 'none';
        }


        if (decorationCheckboxnuCheckbox.checked) {
            decorationsection.style.display = 'block';
        } else {
            decorationsection.style.display = 'none';
        }

        if (djCheckbox.checked) {
            djsection.style.display = 'block';
        } else {
            djsection.style.display = 'none';
        }
    }

    return (<>
        <div className="container">
            <form>
                <div className="container my-5" id="requirmentMainContainer">
                    <i className="fa fa-envelope d-flex justify-content-center mt-5" style={{ fontSize: "55px", color: "red" }}></i>
                    <h1 className="d-flex justify-content-center my-3 text-responsive" id="topheading">LET’S GET THIS PARTY STARTED.</h1>
                    <div className='d-flex flex-row justify-content-center'>
                        <span className='span1 mx-1'></span>
                        <span className='span1 mx-1'></span>
                        <span className='span1 mx-1'></span>
                        <span className='span1 mx-1'></span>
                    </div>

                    <p className='d-flex justify-content-center grayHeading my-3'>For general business, press, and career </p>
                    <p className='d-flex justify-content-center toppara'>inquirieshello@chappelowevents.comPH:</p>
                    <p className='d-flex justify-content-center toppara'>816-728-3066</p>

                    <p className='d-flex justify-content-center whiteText'>For event inquiries, please fill out the form below and one of our team members will get back to you within 48 hours.</p>
                </div>

                <div className="container  requirmentMainContainer1">
                    <div className="row ">
                        <div className="col col-lg-6 col-md-6 col-12  d-flex justify-content-center">
                        {/* <label for="exampleInputEmail1" className="form-label whiteText">Enter Email</label>
                            <input type="text" className="form-control mx-2  w-75  inputFields" placeholder="Enter Name" /> */}
                            <div className="w-75">
                                <label for="exampleInputEmail1" className="form-label whiteText">Enter Name</label>
                                <input type="text" className="form-control w-100  borderPinkInput" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12 d-flex justify-content-center ">
                            {/* <input type="text" className="form-control mx-2  w-75 inputFields" placeholder="Enter Email" /> */}
                            <div className="w-75">
                                <label for="exampleInputEmail1" className="form-label whiteText">Enter Name</label>
                                <input type="text" className="form-control w-100  borderPinkInput" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>


                    <h4 className="d-flex justify-content-center my-3 grayHeading">Event Type</h4>
                    <div className="row my-1 whiteText ">
                        <div className="col col-lg-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Celebration Event</label>
                            </div>
                        </div>
                        <div className="col col-lg-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Celebrities Events</label>
                            </div>
                        </div>
                        <div className="col col-lg-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Corporate Events</label>
                            </div>
                        </div>
                        <div className="col col-lg-6 d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label ps-5" for="exampleCheck1">DJ Events</label>
                            </div>
                        </div>
                    </div>

                    {/* ..........................Yaha start............... */}

                    
                    {/* ..........................Yaha end............... */}
                    <h4 className="d-flex justify-content-center my-2 grayHeading">Services</h4>
                    <p className="d-flex justify-content-center my-2 whiteText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dolores necessitatibus dignissimos pariatur libero blanditiis.</p>
                    <div className="row my-2 whiteText ">
                        <div className="col col-lg-6 col-md-6 col-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="decorationCheckbox" onClick={customise} />
                                <label className="form-check-label" for="exampleCheck1">Decoration</label>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="venuCheckbox" onClick={customise} />
                                <label className="form-check-label" for="exampleCheck1">Venu</label>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="cateringCheckbox" onClick={customise} />
                                <label className="form-check-label ps-4" for="exampleCheck1">Catring</label>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-6  d-flex justify-content-center">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="djCheckbox" onClick={customise} />
                                <label className="form-check-label ps-4" for="exampleCheck1">DJ</label>
                            </div>
                        </div>
                    </div>


                    <div className="container" id="mealsection">

                        <h4 className="d-flex justify-content-center mt-3" >
                            <span style={{ color: "red" }}>Customise&nbsp;</span><span style={{ color: "white" }}> your Meal</span>
                        </h4>


                        <div className="row">
                            <div className="col col-lg-6 col-md-6 col-12 my-2 ">
                                <div className="input-group-append  d-flex flex-row  d-flex justify-content-center">
                                    <span className="input-group-text searchInput searchInput1">
                                        <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                    </span>
                                    <select className="form-control searchInput w-50  d-flex justify-content-center searchInput2">
                                        <option value="" selected disabled>Select an Starter</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12 my-2">
                                <div className="input-group-append  d-flex flex-row  d-flex justify-content-center">
                                    <span className="input-group-text searchInput searchInput1">
                                        <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                    </span>
                                    <select className="form-control  w-50  d-flex justify-content-center searchInput searchInput2">
                                        <option value="" selected disabled>Select an Drinks</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12 my-2">
                                <div className="input-group-append  d-flex flex-row  d-flex justify-content-center">
                                    <span className="input-group-text searchInput searchInput1">
                                        <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                    </span>
                                    <select className="form-control d-flex justify-content-center w-50 searchInput searchInput2">
                                        <option value="" selected disabled>Select an option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12 my-2">
                                <div className="input-group-append  d-flex flex-row d-flex justify-content-center">
                                    <span className="input-group-text searchInput searchInput1">
                                        <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                    </span>
                                    <select className="form-control w-50 d-flex justify-content-center searchInput searchInput2">
                                        <option value="" selected disabled>Select an option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        {/* </form> */}
                    </div>

                    <div className="container" id="venusection">
                        <h4 className="d-flex justify-content-center mt-3" >
                            <span style={{ color: "red" }}>Select&nbsp;</span><span style={{ color: "white" }}> your Venu</span>
                        </h4>

                        <form>
                            <div className="row">
                                <div className="input-group-append  d-flex flex-row d-flex justify-content-center">
                                    <span className="input-group-text searchInput">
                                        <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                    </span>
                                    <select className="form-control d-flex justify-content-center w-75 searchInput">
                                        <option value="" selected disabled>Select an option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="container" id="decorationsection">
                        <h4 className="d-flex justify-content-center mt-3" >
                            <span style={{ color: "red" }}>Select&nbsp;</span><span style={{ color: "white" }}>Decoration Type</span>
                        </h4>

                        <form>
                            <div className="row">
                                <div className="input-group-append  d-flex flex-row d-flex justify-content-center">
                                    <span className="input-group-text searchInput">
                                        <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                    </span>
                                    <select className="form-control d-flex justify-content-center w-75 searchInput">
                                        <option value="" selected disabled>Select an option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="container" id="djsection">
                        <h4 className="d-flex justify-content-center mt-3" >
                            <span style={{ color: "red" }}>Select&nbsp;</span><span style={{ color: "white" }}>Dj Type</span>
                        </h4>


                        <div className="row">
                            <div className="input-group-append  d-flex flex-row d-flex justify-content-center">
                                <span className="input-group-text searchInput">
                                    <i className="fa fa-search" style={{ fontSize: "30px", color: "red" }}></i>
                                </span>
                                <select className="form-control d-flex justify-content-center w-75 searchInput">
                                    <option value="" selected disabled>Select an option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                </select>
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>

                {/* <form> */}
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12  mt-4 d-flex justify-content-center">
                            <div className="w-75 whiteText">
                                <label for="exampleInputEmail1" className="form-label">Event Name</label>
                                <input type="text" className="form-control w-100 borderPinkInput" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12 mt-4 d-flex justify-content-center">

                            <div className="w-75 whiteText ">
                                <label for="exampleInputEmail1" className="form-label">Total Guest</label>
                                <input type="number" className="form-control w-100 borderPinkInput" min="1" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className="col col-lg-6 col-md-6 col-12  d-flex justify-content-center">
                            <div className="w-75 whiteText mt-3">
                                <label for="exampleInputEmail1" className="form-label">Budget</label>
                                <input type="number" className="form-control w-100 borderPinkInput" min="1000" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className="col col-lg-6 col-md-6 col-12 d-flex justify-content-center">
                            <div className="w-75 whiteText mt-3">
                                <label for="exampleInputEmail1" className="form-label">Location</label>
                                <input type="text" className="form-control w-100 borderPinkInput" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className="col col-lg-6 col-md-6 col-12 d-flex justify-content-center">
                            <div className="w-75 whiteText mt-3">
                                <label for="exampleInputEmail1" className="form-label">Event Date</label>
                                <input type="date" className="form-control w-100 borderPinkInput ps-5" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className="col col-lg-6 col-md-6 col-12  d-flex justify-content-center">
                            <div className="w-75 whiteText mt-5">
                                <label for="exampleInputEmail1" className="form-label">Vegitarian</label>&nbsp;
                                <input type="radio" id="exampleInputEmail1" name="meal" aria-describedby="emailHelp" />&nbsp;&nbsp;&nbsp;
                                <label for="exampleInputEmail1" className="form-label">Non-Vegitarian</label>&nbsp;
                                <input type="radio" id="exampleInputEmail1" name="meal" aria-describedby="emailHelp" />
                            </div>

                        </div>
                    </div>
                    <div className="whiteText mt-4 pe-5 me-5">
                        <label for="exampleInputEmail1" className="form-label lastLable">Additional Information</label>
                        <p className='grayHeading lastLable'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus est, hic ex quas cupiditate ab! Distinctio beatae deleniti dolorum. Cupiditate!</p>
                        <input type="text" className="form-control d-flex w-100 borderPinkInput lastInput" aria-describedby="emailHelp" />
                    </div>

                    <div className="w-75 form-check whiteText d-flex justify-content-center my-3 mt-3">
                        <input type="checkbox" className="form-check-input mx-3" id="djCheckbox" onClick={customise} />
                        <label className="form-check-label" for="exampleCheck1">Do you want to book a Dj also? If yes then there will be pay extra charges for it. </label>
                    </div>
                    <div className="w-75 form-check whiteText d-flex justify-content-center my-3 mt-3">
                        <input type="checkbox" className="form-check-input mx-3" id="djCheckbox" onClick={customise} />
                        <label className="form-check-label" for="exampleCheck1">If the location is out of city then extra charges will be levied.</label>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <button className="btn btn-danger">Get Queto</button>
                    </div>
                </div>
            </form>
        </div>
    </>);
}

export default RequirmentForm;