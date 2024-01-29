import caterer1 from '../../images/Caterer.jpg'
import { useState } from 'react';
import { addCaterer, RegisterCatererData } from '../../store/CatererSlice.js';
import Modal from 'react-bootstrap/Modal';
import jscookie from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Caterersreg() {
  const [isCatererManagerRegistrationModal, setCatererRegistrationModal] = useState(false);
  const [caterer, setCatererdata] = useState({});
  var navigate = useNavigate();
  const getData = (event) => {
    let { name, value } = event.target;
    if (event.target.type == 'file') {
      value = event.target.files[0];
      setCatererdata({
        ...caterer,
        [name]: value
      });
    } else {
      setCatererdata({
        ...caterer,
        [name]: value
      });
    }
  };
  const handleSubmitCaterer = (event) => {
    event.preventDefault();
    console.log('caterer ', caterer);
    const userCookieEmail = jscookie.get("user");
    caterer["userEmail"] = userCookieEmail;
    const formData = new FormData();
    for (var index in caterer) {
      console.log("caterer[index] : ", caterer[index])
      if (caterer[index]) {
        formData.append(index, caterer[index])
      }
    }
    var result = RegisterCatererData(formData);
    console.log("rsult in catrere controller : ", result);
    result.then((result) => {

      if(result.status == 201) {
        alert("registration sucefully...!")
        setCatererRegistrationModal(false);
        navigate('/catererprofile')
      }

    }).catch((err) => {
      alert("error in registration......!!");
      console.log("error in catch.....!!" + err);
    });
  };

  const handleCatererManagerModalClose = () => {
    setCatererRegistrationModal(false);
  }

  return (<>
    <h6 onClick={() => { setCatererRegistrationModal(true) }}>Caterer Manager</h6>
    <form onSubmit={handleSubmitCaterer} className="form-group" enctype="multipart/form-data">

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
                      <select className="w-100 mt-4" id="select1" name="FoodType" onChange={getData} value={caterer.FoodType} aria-label="Default select example">
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
                    <div className="col-md-12">
                      <div className="mt-4">
                        <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                        <input onChange={getData} type="file" id="docs" name="docs" />
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
    </form>
  </>
  );
}

export default Caterersreg;