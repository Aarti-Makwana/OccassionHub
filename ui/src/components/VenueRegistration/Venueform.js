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
    console.log('venueData ---> ', venueData);
    const userCookieEmail = jscookie.get("user");
    venueData["venueEmail"] = userCookieEmail;
    const formData = new FormData();
    for (var index in venueData) {
      if (venueData[index]) {
        formData.append(index, venueData[index])
      }
    }
    var result = RegistervenueData(formData);
    console.log("rsult in venueData controller : ", result);
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















// import React, { useState } from 'react';
// import caterer from '../../images/Caterer.jpg';
// import './venueRegistrationcss.css';
// import jscookie from 'js-cookie';
// import Modal from 'react-bootstrap/Modal';
// import { RegistervenueData } from '../../store/venueSlice.js';

// function Venue() {
//   const [isVenueManagerRegistrationModal, setVenueRegistrationModal] = useState(false);
//   const [venueData, setVenuedata] = useState({});
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

//     setVenuedata({
//       ...venueData,
//       [name]: type === 'file' ? files[0] : value,
//     });
//   };

//   const handleSubmitVenue = (event) => {
//     event.preventDefault();

//     // Check for validation errors
//     for (const key in venueData) {
//       if (!venueData[key] && key !== 'docs') {
//         setErrors({
//           ...errors,
//           [key]: 'This field is required',
//         });
//         return;
//       }
//     }

//     // Perform AJAX validation
//     const userCookieEmail = jscookie.get('user');
//     venueData['venueEmail'] = userCookieEmail;

//     const formData = new FormData();
//     for (const index in venueData) {
//       if (venueData[index]) {
//         formData.append(index, venueData[index]);
//       }
//     }

//     // Use a real server endpoint for validation
//     fetch('/venue_requestUrl/validateVenue', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((validationResult) => {
//         if (validationResult.valid) {
//           // Continue with form submission logic
//           const result = RegistervenueData(formData);
//           console.log('result in venueData controller : ', result);
//           result
//             .then((result) => {
//               if (result.status === 201) {
//                 alert('Registration successful...!!');
//                 setVenueRegistrationModal(false);
//               }
//             })
//             .catch((err) => {
//               alert('Error in registration...!!');
//               console.log('Error in catch...!!' + err);
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

//   const handleVenueManagerModalClose = () => {
//     setVenueRegistrationModal(false);
//   };

//   return (
//     <>
//       <h6 onClick={() => setVenueRegistrationModal(true)}>Venue Manager</h6>
//       <form onSubmit={handleSubmitVenue} className="form-group" encType="multipart/form-data">
//         <Modal size="lg" show={isVenueManagerRegistrationModal} onHide={handleVenueManagerModalClose} centered>
//           <Modal.Body className="p-0">
//             <div className="container bg-black">
//               <div className="row d-flex justify-content-center align-items-center h-50">
//                 <div className="col-lg-6">
//                   <img src={caterer} width={'100%'} alt="Sample photo" />
//                 </div>
//                 <div className="col-lg-6 py-4">
//                   <h2 className="text-center text-white">Venue Manager Form</h2>
//                   <form className="px-md-2">
//                     <div className="row">
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="VenueName" className="form-label">
//                             Venue Name
//                           </label>
//                           <input
//                             type="text"
//                             id="name1"
//                             className={`form-control input-field ${errors.VenueName ? 'is-invalid' : ''}`}
//                             placeholder="Enter your Venue name"
//                             onChange={getData}
//                             name="VenueName"
//                           />
//                           {errors.VenueName && <div className="text-danger">{errors.VenueName}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="venueLocation" className="form-label">
//                             Venue Location
//                           </label>
//                           <input
//                             type="text"
//                             id="name2"
//                             className={`form-control input-field ${errors.venueLocation ? 'is-invalid' : ''}`}
//                             placeholder="Enter your venue location"
//                             onChange={getData}
//                             name="venueLocation"
//                           />
//                           {errors.venueLocation && <div className="text-danger">{errors.venueLocation}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="venuePrice" className="form-label">
//                             Venue Price/Day
//                           </label>
//                           <input
//                             type="text"
//                             id="name2"
//                             className={`form-control input-field ${errors.venuePrice ? 'is-invalid' : ''}`}
//                             placeholder="Enter your Venue Price/per Day"
//                             onChange={getData}
//                             name="venuePrice"
//                           />
//                           {errors.venuePrice && <div className="text-danger">{errors.venuePrice}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <div className="mt-4">
//                           <label htmlFor="docs" id="addgallery" className="form-label">
//                             Add Your Gallery
//                           </label>
//                           <input onChange={getData} className={`form-control ${errors.docs ? 'is-invalid' : ''}`} type="file" id="docs" name="docs" />
//                           {errors.docs && <div className="text-danger">{errors.docs}</div>}
//                         </div>
//                       </div>
//                       <div className="col-md-12">
//                         <label htmlFor="VenueType" className="form-label">
//                           Venue Type
//                         </label>
//                         <select
//                           onChange={getData}
//                           name="VenueType"
//                           className={`w-100 mt-4 form-select ${errors.VenueType ? 'is-invalid' : ''}`}
//                           id="select1"
//                           aria-label="Default select example"
//                         >
//                           <option value="" disabled>Select Venue type</option>
//                           <option value="garden">All</option>
//                           <option value="2">Garden+Hall</option>
//                           <option value="3">Garden+Room+Hall</option>
//                         </select>
//                         {errors.VenueType && <div className="text-danger">{errors.VenueType}</div>}
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

// export default Venue;
