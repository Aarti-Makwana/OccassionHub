import { useState } from 'react';
import caterer from '../../images/Caterer.jpg'
import './venueRegistrationcss.css';
import Modal from 'react-bootstrap/Modal';

function Venue() {
  const [isVenueManagerRegistrationModal, setVenueRegistrationModal] = useState(false);
  const handleVenueManagerModalClose = () => {
    setVenueRegistrationModal(false);
  }
  return (<>
    <h6 onClick={() => { setVenueRegistrationModal(true) }}>Venue Manager</h6>
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
                      <input type="text" id="name1" className="form-control input-field" placeholder="Enter your Venue name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" id="name2" className="form-control input-field" placeholder="Enter your venue location" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" id="name2" className="form-control input-field" placeholder="Enter your Venue Price/per Day" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-4">
                      <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                      <input className="form-control" type="file" id="formFile" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <select class="w-100 mt-4" id="select1" aria-label="Default select example">
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
  </>)
}
export default Venue