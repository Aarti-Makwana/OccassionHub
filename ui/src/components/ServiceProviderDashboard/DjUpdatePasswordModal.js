// DjUpdatePasswordModal.js -// export default EditProfileModal;
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { dj_requestUrl } from "../../urls";
// import Swal from 'sweetalert2';

function DjUpdatePasswordModal(props) {
    const [isEditprofilemodal, setEditprofilemodal] = useState(false);
    const [updatedPassData, setUpdatedPassData] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false); // Add state variable

    const getData = (event) => {
        const { name, value } = event.target;
        setUpdatedPassData({
            ...updatedPassData,
            [name]: value
        });
    }

    const handleSubmitProfileUpdateData = async (event) => {
        event.preventDefault();
        try {
            updatedPassData.Id = props.djData._id;
            console.log("=======>", props.djData._id);
            console.log("=============>", updatedPassData);
            var result = await axios.post(dj_requestUrl + "/updateDjPassword", updatedPassData);
            if (result.status === 201) {
                alert("Password updated successfully");
                setFormSubmitted(true); // Update state to hide the form
            }
        } catch (err) {
            console.log("Error while updating dj profile");
        }
    }

    if (formSubmitted) { // Conditionally render based on formSubmitted state
        return (
            <h2 className="modal-title text-white text-center">Password Updated Successfully</h2>
        );
    }

    return (<>

        <h2 className="modal-title text-white text-center" >Update Password</h2>
        <form onSubmit={handleSubmitProfileUpdateData} method="post">
            <div className="mb-3 mt-4">
                <input type="password" className="form-control input-field" id="exampleInputName" aria-describedby="nameHelp"
                    placeholder="Enter Your Old Password" name="oldPassword" onChange={getData} />
            </div>
            <div className="mb-3 mt-4">
                <input type="password" name="newPasword" className="form-control input-field" id="exampleInputContact" aria-describedby="contactHelp"
                    placeholder="Enter Your New Password" onChange={getData} />
            </div>
            <div className="mb-3 mt-4">
                <input type="password" name="confirmPassword" className="form-control input-field" id="exampleInputAddress" aria-describedby="addressHelp"
                    placeholder="Confirm Password" onChange={getData} />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="ourbtn w-50 mt-3 mb-3">Update Profile</button>
            </div>
        </form>

    </>)
}

export default DjUpdatePasswordModal;
