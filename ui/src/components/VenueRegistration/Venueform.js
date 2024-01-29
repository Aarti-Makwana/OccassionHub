import { useState } from 'react';
import caterer from '../../images/Caterer.jpg'
import './venueRegistrationcss.css';
import jscookie from 'js-cookie';
import Modal from 'react-bootstrap/Modal';
import { RegistervenueData } from '../../store/venueSlice.js';
function Venue() {
  const [isVenueManagerRegistrationModal, setVenueRegistrationModal] = useState(false);
  const [venueData, setVenuedata] = useState({});
  const getData = (event) => {
    let { name, value } = event.target;
    if (event.target.type == 'file') {
      value = event.target.files[0];
      setVenuedata({
        ...venueData,
        [name]: value
      });
    } else {
      setVenuedata({
        ...venueData,
        [name]: value
      });
    }
  };

  const handleSubmitVenue = (event) => {
    event.preventDefault();
    const userCookieEmail = jscookie.get("user");
    venueData["venueEmail"] = userCookieEmail;
    const formData = new FormData();
    for (var index in venueData) {
      if (venueData[index]) {
        formData.append(index, venueData[index])
      }
    }
    var result = RegistervenueData(formData);
    result.then((result) => {
      if (result.status == 201) {
        alert("registration sucefully...!!");
        setVenueRegistrationModal(false);
      }
    }).catch((err) => {
      alert("error in registration......!!");
      console.log("error in catch.....!!" + err);
    });
  };


  const handleVenueManagerModalClose = () => {
    setVenueRegistrationModal(false);
  }
  return (<>
    <h6 onClick={() => { setVenueRegistrationModal(true) }}>Venue Manager</h6>
    <form onSubmit={handleSubmitVenue} className="form-group" enctype="multipart/form-data">

      <Modal size="lg" show={isVenueManagerRegistrationModal} onHide={handleVenueManagerModalClose} centered  >
        <Modal.Body className='p-0'>
          <div className="container bg-black">
            <div className="row d-flex justify-content-center align-items-center h-50" >
              <div className='col-lg-6'>
                <img src={caterer} width={'100%'} alt="Sample photo" />
              </div>
              <div className="col-lg-6 py-4">
                <h2 className="text-center text-white">Venue Manager Form</h2>
                <form className="px-md-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mt-4">
                        <input type="text" id="name1" className="form-control input-field" placeholder="Enter your Venue name" onChange={getData} name='VenueName' />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <input type="text" id="name2" className="form-control input-field" placeholder="Enter your venue location" onChange={getData} name='venueLocation' />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <input type="text" id="name2" className="form-control input-field" placeholder="Enter your Venue Price/per Day" onChange={getData} name='venuePrice' />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                        <input onChange={getData} className="form-control" type="file" id="docs" name='docs' />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <select onChange={getData} name='VenueType' class="w-100 mt-4" id="select1" aria-label="Default select example">
                        <option selected>Select Venue type</option>
                        <option value="garden">All</option>
                        <option value="2">Garden+Hall</option>
                        <option value="3">Garden+Room+Hall</option>
                      </select>
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
  </>)
}
export default Venue