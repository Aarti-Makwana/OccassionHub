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

import { useState } from 'react';
import caterer from '../../images/Caterer.jpg'
import './djRegistrationcss.css';
import Modal from 'react-bootstrap/Modal';
import jscookie from 'js-cookie';
import { RegisterDjData } from '../../store/DjSlice.js'
import { useNavigate } from 'react-router-dom';
function DJ() {
  const navigate = useNavigate();
  const [isDjManagerRegistrationModal, setDjRegistrationModal] = useState(false)
  const [dj, setDjdata] = useState({});
  const getData = (event) => {

    let { name, value } = event.target;
    if (event.target.type == 'file') {
      value = event.target.files[0];
      setDjdata({
        ...dj,
        [name]: value
      });
    } else {
      setDjdata({
        ...dj,
        [name]: value
      });
    }
  };
  const handleSubmitDj = (event) => {
    alert("hello");
    event.preventDefault();
    console.log('Dj ', dj);
    const userCookieEmail = jscookie.get("user");
    dj["userEmail"] = userCookieEmail;
    const formData = new FormData();
    for (var index in dj) {
      console.log("caterer[index] : ", dj[index])
      if (dj[index]) {
        formData.append(index, dj[index])
      }
    }
    var result = RegisterDjData(formData);
    console.log("result in dj controller : ", result);
    result.then((result) => {
      if (result.status == 201) {
        alert("registration successfully...!")
        setDjRegistrationModal(false);
        navigate('/dj')
      }
    }).catch((err) => {
      alert("error in registration......!!");
      console.log("error in catch.....!!" + err);
    });
  };
  const handleDjManagerModalClose = () => {
    setDjRegistrationModal(false);
  }
  return (<>
    <h6 onClick={() => { setDjRegistrationModal(true) }}>Dj Manager</h6>
    <form onSubmit={handleSubmitDj} className="form-group" encType="multipart/form-data">
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
                        <input type="text" id="name1" name="Businessname" className="form-control input-field" onChange={getData} value={dj.Businessname} placeholder="Enter your Business name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                        <input className="form-control" onChange={getData} name='docs' type="file" id="docs" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <select class="w-100 mt-4" onChange={getData} value={dj.EquipmentType} name='EquipmentType' id="select1" aria-label="Default select example">
                        <option selected>Select Equipments</option>
                        <option value="2dj">Base Charge with 2Dj</option>
                        <option value="3dj">3Dj</option>
                        <option value="4dj">4Dj</option>
                        <option value="5dj">5Dj</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <input type="text" id="name2" name="Djprice" onChange={getData} value={dj.Djprice} className="form-control input-field" placeholder="Enter your Dj Price as per Type" />
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
  </>)
}
export default DJ
