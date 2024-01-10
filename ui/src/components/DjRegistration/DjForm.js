import { useEffect, useState } from 'react';
import caterer from '../../images/Caterer.jpg'
import './djRegistrationcss.css';
import Modal from 'react-bootstrap/Modal';

function DJ() {
  const [isDjManagerRegistrationModal, setDjRegistrationModal] = useState(false)

  const handleDjManagerModalClose = () => {
    setDjRegistrationModal(false);
  }
  return (<>
    <h6 onClick={() => { setDjRegistrationModal(true) }}>Dj Manager</h6>

    <Modal size="lg" show={isDjManagerRegistrationModal} onHide={handleDjManagerModalClose} centered  >
      <Modal.Body className='p-0'>
        <div className="container bg-black">
          <div className="row d-flex justify-content-center align-items-center " >
            <div className='col-lg-6'>
              <img src={caterer} width={'100%'} alt="Sample photo" />
            </div>
            <div className="col-lg-6 py-4">
              <h2 className="text-center text-white">Dj Manager Form</h2>
              <form className="px-md-2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" id="name1" className="form-control input-field" placeholder="Enter your Business name" />
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
                      <option selected>Select Equipments</option>
                      <option value="2dj">Base Charge with 2Dj</option>
                      <option value="3dj">3Dj</option>
                      <option value="4dj">4Dj</option>
                      <option value="5dj">5Dj</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <select class="w-100 mt-4" id="select1" aria-label="Default select example">
                      <option selected>Select price as per Equipments</option>
                      <option value="2dj">2000</option>
                      <option value="3dj">3000</option>
                      <option value="4dj">4000</option>
                      <option value="5dj">5000</option>
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
export default DJ