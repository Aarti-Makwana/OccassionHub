import { useState } from 'react';
import caterer from '../../images/Caterer.jpg'
import './decorationRegistrationcss.css';
import Modal from 'react-bootstrap/Modal';

function Decorationform() {
  const [isDecorationManagerRegistrationModal, setDecorationRegistrationModal] = useState(false);
  const handleDecorationManagerModalClose = () => {
    setDecorationRegistrationModal(false);
  }
  return (<>
    {/* <div className="container py-5 h-50">
      <div className="row d-flex justify-content-center align-items-center h-50" >
        <img src={caterer} style={{ height: "350px" }} alt="Sample photo" />
        <div className="card-body p-4 p-md-5">
          <h2 className="reg mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Decoration Form</h2>
          <form className="px-md-2">
            <div className="row">
              <div className="col-md-6">
                <div className="form-outline mb-4">
                  <input type="text" id="name1" className="form-control" placeholder="Enter your Business name" />
                  <label className="form-label" for="form3Example1q">Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-outline mb-4">
                  <select class="form-select" id="select1" aria-label="Default select example">
                    <option selected>Decoration type</option>
                    <option value="ballon">Ballon</option>
                    <option value="flower">Flower</option>
                    <option value="ballonflower">Ballon+Flower</option>
                    <option value="pyro">Pyro</option>
                    <option value="entry">Entry</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="form-outline mb-4">
                  <input type="text" id="name2" className="form-control" placeholder="Enter your Decoration Price as per Type" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-4">
                  <button type="submit" className="ourbtn w-50">Submit</button>
                </div>
              </div>
              <div className="col-md-4">
              </div>
            </div>
          </form>

        </div>
      </div>
    </div> */}
    <h6 onClick={() => { setDecorationRegistrationModal(true) }}>Decoration Manager</h6>

    <Modal size="lg" show={isDecorationManagerRegistrationModal} onHide={handleDecorationManagerModalClose} centered  >
      <Modal.Body className='p-0'>
        <div className="container bg-black">
          <div className="row d-flex justify-content-center align-items-center h-50" >
            <div className='col-lg-6'>
              <img src={caterer} width={'100%'} alt="Sample photo" />
            </div>
            <div className="col-lg-6 py-4">
              <h2 className="text-center text-white">Decoration Manager Form</h2>
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
                      <option selected>Decoration type</option>
                      <option value="ballon">Ballon</option>
                      <option value="flower">Flower</option>
                      <option value="ballonflower">Ballon+Flower</option>
                      <option value="pyro">Pyro</option>
                      <option value="entry">Entry</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <div className="mt-4">
                      <input type="text" id="name2" className="form-control input-field" placeholder="Enter your Decoration Price as per Type" />
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
  </>)

}
export default Decorationform