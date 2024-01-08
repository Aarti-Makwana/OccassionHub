import caterer1 from '../../images/Caterer.jpg'
import { useState } from 'react';
import { addCaterer, RegisterCatererData } from '../../store/CatererSlice.js';
var result = "";
function Caterersreg() {
  const [caterer, setCatererdata] = useState({});
  const [otp1, setOtp] = useState('');
  const getData = (event) => {
    const { name, value } = event.target;
    setCatererdata({
      ...caterer,
      [name]: value,
    });
  };

  const getOtp = async (event) => {
    // event.preventDefault();
    console.log("hiiiiiiiiiiii");
    // document.getElementById("exampleInputAddress").style.color= "white";
    document.getElementById("otpfeildecatrerr").style.display = "block";
    console.log(document.getElementById("otpfeildecatrerr"));
    console.log("caterer in getotp ", caterer);
    result = addCaterer(caterer);
    console.log("result in registration controller ", result);

  }

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmitCaterer = (event) => {
    event.preventDefault();
    console.log('caterer ', caterer);
    result.then((result) => {
      console.log(result.data.Rotp);
      if (result.data.Rotp == otp1) {
        console.log("otp match");
        var result = RegisterCatererData(caterer);
        alert("registration sucesfully completed");
      } else {
        console.log("not match");

      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmitCaterer} className="form-group">
        <section className="h-50" style={{ backgroundColor: 'black' }}>
          <div className="container py-5 h-50">
            <div className="row d-flex justify-content-center align-items-center h-50">
              <img src={caterer1} style={{ height: '350px' }} alt="Sample photo" />
              <div className="card-body p-4 p-md-5">
                <h2 className="reg mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Caterers Form</h2>
                <div className="row">
                  <div className="col-md-6 mt-3">
                      <input type="text" name="Businessname" onChange={getData} value={caterer.Businessname} className="form-control input-field" placeholder="Enter your Business name" />
                  </div>
                  <div className="col-md-6 mt-3">
                    {/* <div className="form-outline mb-4"> */}
                      <input type="text" name="Specialization" onChange={getData} value={caterer.Specialization} id="name2" className="form-control input-field" placeholder="Enter your Specialization"
                      />
                    {/* </div> */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline mb-4 mt-3">
                      <select required onChange={getData} value={caterer.FoodType} style={{ background: 'black', color: 'white' }} className="form-control input-field" name="FoodType">
                        <option>Select food type</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 mt-3">
                    <div className="form-outline mb-4">
                      <input type="text" onChange={getData} value={caterer.ServiceCharges} id="name2" className="form-control" name="ServiceCharges" placeholder="Enter your Service Charges" />
                    </div>
                  </div>
                </div>

                <div className="mb-3 mt-4" id='otpfeildecatrerr' style={{ display: 'none' }}>
                  <div className="form-outline mb-4">
                    <input type="address" name="address" onChange={handleOtpChange} id="exampleInputAddress" aria-describedby="addressHelp"
                      placeholder="Enter Otp" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <button type="submit" onClick={(event) => { getOtp(event) }} className="ourbtn w-50">
                        Get Otp
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <button type="submit" className="ourbtn w-50">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Caterersreg;