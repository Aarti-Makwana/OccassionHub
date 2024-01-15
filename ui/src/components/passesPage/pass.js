import { useState } from 'react';
import jscookie from 'js-cookie';
import { passesDataDetails } from '../../store/passesSlice.js';
import './passes.css';

function Passes() {
    const [passes, setpassesDetails] = useState({});
    function getData(event) {
        let { name, value } = event.target;
        setpassesDetails({
            ...passes,
            [name]: value
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert("handle submit goo.....")
        const userCookieEmail = jscookie.get("user");
        passes["userEmail"] = userCookieEmail;
        var data = passesDataDetails(passes);
        data.then((data) => {
          if(data.status==201){
            alert("passes data insert sucefully")
          }
        }).catch((error) => {
            alert("not sucefully insert data.....!!")
        });
    }
    return (<>
        <div>
            <div className="container bg-black w-75 ml-3">
                <div className="row" id="outdiv">
                    <div className="col-lg-6 ml-3 mt-1" style={{ marginRight: "6rem" }}>
                        <section className="h-50 h-custom gradient-custom-2">
                            <h1 style={{ color: "#FF0057" }} className="text-center">Passes<span style={{ color: "white" }}> Details</span></h1>
                            <form className="px-md-2 form-group" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mt-4">
                                            <input type="text" onChange={getData} name="passname" style={{ background: 'black' }} className="form-control input-field" placeholder="Enter Pass name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-4">
                                            <input type="text" onChange={getData} name="passesPrice" value={passes.passesPrice} style={{ background: 'black' }} id="name2" className="form-control input-field" placeholder="Enter Passes Price" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-4">
                                            <input type="number" onChange={getData} min="0" value={passes.Quantity} name="Quantity" style={{ background: 'black' }} id="name2" className="form-control input-field" placeholder="Enter Passes Quantity" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-4">
                                            <input type="date" onChange={getData} id="name2" value={passes.Start_Date} style={{ background: 'black' }} className="form-control input-field" name="Start_Date" placeholder="Enter your Event Start Date" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-4">
                                            <input type="date" onChange={getData} id="name2" value={passes.last_Date} style={{ background: 'black' }} className="form-control input-field" name="last_Date" placeholder="Enter your Event Last Date" />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="submit" className="ourbtn w-50">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            {/* <div id='outersection'>
                <div id='innersection'>
                   
                </div>
            </div> */}
        </div>



    </>
    );
}

export default Passes;
