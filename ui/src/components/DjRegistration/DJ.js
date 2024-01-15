// import { useEffect, useState } from 'react';
// import caterer from '../../images/Caterer.jpg'
// import './djRegistrationcss.css';
// import Modal from 'react-bootstrap/Modal';

// function DJ() {
//   const [isDjManagerRegistrationModal, setDjRegistrationModal] = useState(false)

//   const handleDjManagerModalClose = () => {
//     setDjRegistrationModal(false);
//   }
//   return (<>
//     <h6 onClick={() => { setDjRegistrationModal(true) }}>Dj Manager</h6>

//     <Modal size="lg" show={isDjManagerRegistrationModal} onHide={handleDjManagerModalClose} centered  >
//       <Modal.Body className='p-0'>
//         <div className="container bg-black">
//           <div className="row d-flex justify-content-center align-items-center " >
//             <div className='col-lg-6'>
//               <img src={caterer} width={'100%'} alt="Sample photo" />
//             </div>
//             <div className="col-lg-6 py-4">
//               <h2 className="text-center text-white">Dj Manager Form</h2>
//               <form className="px-md-2">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="mt-4">
//                       <input type="text" id="name1" className="form-control input-field" placeholder="Enter your Business name" />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="mt-4">
//                       <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
//                       <input className="form-control" type="file" id="formFile" />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <select class="w-100 mt-4" id="select1" aria-label="Default select example">
//                       <option selected>Select Equipments</option>
//                       <option value="2dj">Base Charge with 2Dj</option>
//                       <option value="3dj">3Dj</option>
//                       <option value="4dj">4Dj</option>
//                       <option value="5dj">5Dj</option>
//                     </select>
//                   </div>
//                   <div className="col-md-12">
//                     <select class="w-100 mt-4" id="select1" aria-label="Default select example">
//                       <option selected>Select price as per Equipments</option>
//                       <option value="2dj">2000</option>
//                       <option value="3dj">3000</option>
//                       <option value="4dj">4000</option>
//                       <option value="5dj">5000</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-center mt-3">
//                   <button type="submit" className="ourbtn w-50">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   </>)
// }
// export default DJ






















// components/DJ.js
import { useState } from 'react';
import caterer from '../../images/Caterer.jpg';
import './djRegistrationcss.css';
import Modal from 'react-bootstrap/Modal';
import jscookie from 'js-cookie';
import {addDj,submitDjForm} from '../../store/djSlice.js';

// import axios from 'axios';

function DJ() {
  const [isDjManagerRegistrationModal, setDjRegistrationModal] = useState(false);
  const [Djdata, setFormData] = useState({
    businessName: '',
    gallery: '',
    equipment: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setFormData({
    //   ...Djdata,
    //   [name]: value,
    // });





    if (e.target.type == 'file') {
     const file = e.target.files[0];
      setFormData({
        ...Djdata,
        [name]: file
      });
    } else {
      setFormData({
        ...Djdata,
        [name]: value
      });
    }
    console.log("datadatadata : ",Djdata)
  };

  const handleDjManagerModalClose = () => {
    setDjRegistrationModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


      console.log("in handleSumbit : == ", Djdata);
      // Send data to the backend
      const userCookieEmail = jscookie.get("user");
    Djdata["userEmail"] = userCookieEmail;
      const formData = new FormData();
    for (var index in Djdata) {
      console.log("Djdata[index] : ", Djdata[index])
      if (Djdata[index]) {
        formData.append(index, Djdata[index])
      }
    }
      // const response = await axios.post('http://localhost:4000/DJ/djManagerRegistration', formData);

      // Handle the response from the backend (if needed)
      // console.log("res : =========== = === ==",response.status==201);

      // Optionally, you can handle the UI state or show a success message
      var result = submitDjForm(formData);
    console.log("rsult in dj controller : ", result);
    result.then((result) => {
      if (result.status == 201) {
        alert("registration sucefully...!")
        setDjRegistrationModal(false);
      }
      
    }). catch( (error)=> {
      console.error('Error submitting DJ Manager registration:', error);
      // Handle error (show error message, etc.)
    });
  };

  return (
    <>
      <h6 onClick={() => setDjRegistrationModal(true)}>Dj Manager</h6>

      <Modal size="lg" show={isDjManagerRegistrationModal} onHide={handleDjManagerModalClose} centered>
        <Modal.Body className="p-0">
          <div className="container bg-black">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-lg-6">
                <img src={caterer} width={'100%'} alt="Sample photo" />
              </div>
              <div className="col-lg-6 py-4">
                <h2 className="text-center text-white">Dj Manager Form</h2>
                <form className="px-md-2" onSubmit={handleSubmit}  encType="multipart/form-data">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mt-4">
                        <input
                          type="text"
                          name="businessName"
                          
                          onChange={handleInputChange}
                          className="form-control input-field"
                          placeholder="Enter your Business name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <label htmlFor="formFile" id="addgallery" className="form-label">
                          Add Your Gallery
                        </label>
                        <input
                          type="file"
                          name="DjImage"
                          onChange={handleInputChange}
                          className="form-control"
                          id="formFile"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <select
                        className="w-100 mt-4"
                        name="equipment"
                        
                        onChange={handleInputChange}
                        aria-label="Default select example"
                      >
                        <option value="" disabled selected>
                          Select Equipments
                        </option>
                        <option value="2dj">Base Charge with 2Dj</option>
                        <option value="3dj">3Dj</option>
                        <option value="4dj">4Dj</option>
                        <option value="5dj">5Dj</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <select
                        className="w-100 mt-4"
                        name="price"
                        
                        onChange={handleInputChange}
                        aria-label="Default select example"
                      >
                        <option value="" disabled selected>
                          Select price as per Equipments
                        </option>
                        <option value="2000">2000</option>
                        <option value="3000">3000</option>
                        <option value="4000">4000</option>
                        <option value="5000">5000</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="ourbtn w-50">
                      Submit
                    </button>
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

export default DJ;
