import caterer1 from '../../images/Caterer.jpg'
import { useState } from 'react';
import { addCaterer, RegisterCatererData } from '../../store/CatererSlice.js';
import Modal from 'react-bootstrap/Modal';

var result = "";
function Caterersreg() {
  const [isCatererManagerRegistrationModal, setCatererRegistrationModal] = useState(false)
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

  const handleCatererManagerModalClose = () => {
    setCatererRegistrationModal(false);
  }

  return (<>
    <h6 onClick={() => { setCatererRegistrationModal(true) }}>Caterer Manager</h6>

    <Modal size="lg" show={isCatererManagerRegistrationModal} onHide={handleCatererManagerModalClose} centered  >
      <Modal.Body className='p-0'>
        <div className="container bg-black">
          <div className="row d-flex justify-content-center align-items-center h-50" >
            <div className='col-lg-6'>
              <img src={caterer1} width={'100%'} alt="Sample photo" />
            </div>
            <div className="col-lg-6 py-4">
              <h2 className="text-center text-white">Caterer Manager Form</h2>
              <form className="px-md-2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" name="Businessname" onChange={getData} value={caterer.Businessname} className="form-control input-field" placeholder="Enter your Business name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" name="Specialization" onChange={getData} value={caterer.Specialization} id="name2" className="form-control input-field" placeholder="Enter your Specialization" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <select class="w-100 mt-4" id="select1" onChange={getData} value={caterer.FoodType} aria-label="Default select example">
                      <option selected>Select Food Type</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" onChange={getData} value={caterer.ServiceCharges} id="name2" className="form-control input-field" name="ServiceCharges" placeholder="Enter your Service Charges" />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="ourbtn w-50">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>

  </>
  );
}

export default Caterersreg;