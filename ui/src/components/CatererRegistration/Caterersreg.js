import caterer1 from '../../images/Caterer.jpg'
import { useState } from 'react';
import { addCaterer, RegisterCatererData } from '../../store/CatererSlice.js';
import Modal from 'react-bootstrap/Modal';
import jscookie from 'js-cookie';

function Caterersreg() {
  const [isCatererManagerRegistrationModal, setCatererRegistrationModal] = useState(false)
  const [caterer, setCatererdata] = useState({});
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
      if (result.status == 201) {
        alert("registration sucefully...!")
        setCatererRegistrationModal(false);
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
















// import React, { useState } from 'react';
// import caterer1 from '../../images/Caterer.jpg';
// import { RegisterCatererData } from '../../store/CatererSlice.js';
// import Modal from 'react-bootstrap/Modal';
// import jscookie from 'js-cookie';

// function Caterersreg() {
//   const [isCatererManagerRegistrationModal, setCatererRegistrationModal] = useState(false);
//   const [caterer, setCatererdata] = useState({});
//   const [errors, setErrors] = useState({});

//   const getData = (event) => {
//     const { name, value, type, files } = event.target;
//     let error = '';

//     if (type === 'file') {
//       if (!files || files.length === 0) {
//         error = 'Please select a file';
//       }
//     } else {
//       if (!value.trim()) {
//         error = 'This field is required';
//       }
//     }

//     setErrors({
//       ...errors,
//       [name]: error,
//     });

//     setCatererdata({
//       ...caterer,
//       [name]: type === 'file' ? files[0] : value,
//     });
//   };

//   const handleSubmitCaterer = (event) => {
//     event.preventDefault();

//     // Check for validation errors
//     for (const key in caterer) {
//       if (!caterer[key] && key !== 'docs') {
//         setErrors({
//           ...errors,
//           [key]: 'This field is required',
//         });
//         return;
//       }
//     }

//     // Perform AJAX validation
//     const userCookieEmail = jscookie.get('user');
//     caterer['userEmail'] = userCookieEmail;

//     const formData = new FormData();
//     for (const index in caterer) {
//       if (caterer[index]) {
//         formData.append(index, caterer[index]);
//       }
//     }

//     fetch('/caterre_requestUrl/validateCaterer', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((validationResult) => {
//         if (validationResult.valid) {
//           // Continue with form submission logic
//           const result = RegisterCatererData(formData);
//           console.log('result in caterer controller: ', result);
//           result
//             .then((result) => {
//               if (result.status === 201) {
//                 alert('Registration successful...!');
//                 setCatererRegistrationModal(false);
//               }
//             })
//             .catch((err) => {
//               alert('Error in registration...!');
//               console.log('Error in catch...!' + err);
//             });
//         } else {
//           // Handle validation errors
//           setErrors(validationResult.errors);
//         }
//       })
//       .catch((error) => {
//         console.error('Error during validation:', error);
//       });
//   };

//   const handleCatererManagerModalClose = () => {
//     setCatererRegistrationModal(false);
//   };

//   return (
//     <>
//       <h6 onClick={() => setCatererRegistrationModal(true)}>Caterer Manager</h6>
//       <form onSubmit={handleSubmitCaterer} className="form-group" encType="multipart/form-data">
//         <Modal size="lg" show={isCatererManagerRegistrationModal} onHide={handleCatererManagerModalClose} centered>
//           <Modal.Body className="p-0">
//             <div className="container bg-black">
//               <div className="row d-flex justify-content-center align-items-center h-50">
//                 <div className="col-lg-6">
//                   <img src={caterer1} width={'100%'} alt="Sample photo" />
//                 </div>
//                 <div className="col-lg-6 py-4">
//                   <h2 className="text-center text-white">Caterer Manager Form</h2>
//                   <form className="px-md-2">
//                     <div className="row">
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="Businessname" className="form-label">
//                             Business Name
//                           </label>
//                           <input
//                             type="text"
//                             name="Businessname"
//                             onChange={getData}
//                             value={caterer.Businessname}
//                             className={`form-control input-field ${errors.Businessname ? 'is-invalid' : ''}`}
//                             placeholder="Enter your Business name"
//                           />
//                           {errors.Businessname && <div className="invalid-feedback">{errors.Businessname}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="Specialization" className="form-label">
//                             Specialization
//                           </label>
//                           <input
//                             type="text"
//                             name="Specialization"
//                             onChange={getData}
//                             value={caterer.Specialization}
//                             id="name2"
//                             className={`form-control input-field ${errors.Specialization ? 'is-invalid' : ''}`}
//                             placeholder="Enter your Specialization"
//                           />
//                           {errors.Specialization && <div className="invalid-feedback">{errors.Specialization}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <label htmlFor="FoodType" className="form-label">
//                           Food Type
//                         </label>
//                         <select
//                           className={`w-100 mt-4 form-select ${errors.FoodType ? 'is-invalid' : ''}`}
//                           name="FoodType"
//                           onChange={getData}
//                           value={caterer.FoodType}
//                           aria-label="Default select example"
//                         >
//                           <option selected>Select Food Type</option>
//                           <option value="Vegetarian">Vegetarian</option>
//                           <option value="Non-Vegetarian">Non-Vegetarian</option>
//                         </select>
//                         {errors.FoodType && <div className="invalid-feedback">{errors.FoodType}</div>}
//                       </div>
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="ServiceCharges" className="form-label">
//                             Service Charges
//                           </label>
//                           <input
//                             type="text"
//                             onChange={getData}
//                             value={caterer.ServiceCharges}
//                             id="name2"
//                             className={`form-control input-field ${errors.ServiceCharges ? 'is-invalid' : ''}`}
//                             name="ServiceCharges"
//                             placeholder="Enter your Service Charges"
//                           />
//                           {errors.ServiceCharges && <div className="invalid-feedback">{errors.ServiceCharges}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="docs" id="addgallery" className="form-label">
//                             Add Your Gallery
//                           </label>
//                           <input
//                             onChange={getData}
//                             type="file"
//                             id="docs"
//                             name="docs"
//                             className={`form-control ${errors.docs ? 'is-invalid' : ''}`}
//                           />
//                           {errors.docs && <div className="invalid-feedback">{errors.docs}</div>}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-center mt-3">
//                       <button type="submit" className="ourbtn w-50">
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </Modal.Body>
//         </Modal>
//       </form>
//     </>
//   );
// }

// export default Caterersreg;
