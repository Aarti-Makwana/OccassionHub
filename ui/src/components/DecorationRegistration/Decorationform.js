// import { useState } from 'react';
// import caterer from '../../images/Caterer.jpg'
// import './decorationRegistrationcss.css';
// import Modal from 'react-bootstrap/Modal';

// function Decorationform() {
//   const [isDecorationManagerRegistrationModal, setDecorationRegistrationModal] = useState(false);
//   const handleDecorationManagerModalClose = () => {
//     setDecorationRegistrationModal(false);
//   }
//   return (<>
//     <h6 onClick={() => { setDecorationRegistrationModal(true) }}>Decoration Manager</h6>

//     <Modal size="lg" show={isDecorationManagerRegistrationModal} onHide={handleDecorationManagerModalClose} centered  >
//       <Modal.Body className='p-0'>
//         <div className="container bg-black">
//           <div className="row d-flex justify-content-center align-items-center h-50" >
//             <div className='col-lg-6'>
//               <img src={caterer} width={'100%'} alt="Sample photo" />
//             </div>
//             <div className="col-lg-6 py-4">
//               <h2 className="text-center text-white">Decoration Manager Form</h2>
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
//                       <option selected>Decoration type</option>
//                       <option value="ballon">Ballon</option>
//                       <option value="flower">Flower</option>
//                       <option value="ballonflower">Ballon+Flower</option>
//                       <option value="pyro">Pyro</option>
//                       <option value="entry">Entry</option>
//                     </select>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="mt-4">
//                       <input type="text" id="name2" className="form-control input-field" placeholder="Enter your Decoration Price as per Type" />
//                     </div>
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
// export default Decorationform

import { useState } from 'react';
import caterer from '../../images/Caterer.jpg'
import './decorationRegistrationcss.css';
import Modal from 'react-bootstrap/Modal';
import jscookie from 'js-cookie';
import { RegisterDecorationData } from '../../store/DecorationSlice.js';

function Decorationform() {
  const [isDecorationManagerRegistrationModal, setDecorationRegistrationModal] = useState(false);
  const [decoration, setDecorationdata] = useState({});
  const getData = (event) => {

    let { name, value } = event.target;
    if (event.target.type == 'file') {
      value = event.target.files[0];
      setDecorationdata({
        ...decoration,
        [name]: value
      });
    } else {
      setDecorationdata({
        ...decoration,
        [name]: value
      });
    }
  };
  const handleSubmitDecoartionRegistartion = (event) => {
    event.preventDefault();
    console.log('Decoration ', decoration);
    const userCookieEmail = jscookie.get("user");
    decoration["userEmail"] = userCookieEmail;
    const formData = new FormData();
    for (var index in decoration) {
      console.log("caterer[index] : ", decoration[index])
      if (decoration[index]) {
        formData.append(index, decoration[index])
      }
    }
    console.log("FORM DATA IN COMPONENT IN REGISTRATION : ", formData);
    var result = RegisterDecorationData(formData);
    console.log("result in decoration controller : ", result);
    result.then((result) => {
      if (result.status == 201) {
        alert("registration successfully...!")
        setDecorationRegistrationModal(false);
      }
    }).catch((err) => {
      alert("error in registration......!!");
      console.log("error in catch.....!!" + err);
    });
  };
  const handleDecorationManagerModalClose = () => {
    setDecorationRegistrationModal(false);
  }
  return (<>
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
                <form className="px-md-2 form-group" onSubmit={handleSubmitDecoartionRegistartion} encType="multipart/form-data">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mt-4">
                        <input type="text" id="name1" name="Businessname" onChange={getData} value={decoration.Businessname} className="form-control input-field" placeholder="Enter your Business name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-4">
                        <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                        <input className="form-control" onChange={getData} type="file" id="formFile" name="docs" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <select className="w-100 mt-4" id="select1" name="Decorationtype" onChange={getData} value={decoration.DecorationType} aria-label="Default select example">
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
                        <input type="text" id="name2" name="Decorationprice" onChange={getData} value={decoration.Decorationprice} className="form-control input-field" placeholder="Enter your Decoration Price as per Type" />
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