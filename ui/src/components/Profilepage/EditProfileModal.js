import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


function EditProfileModal(props) {
    const [isEditprofilemodal, setEditprofilemodal] = useState(false)
    return (<>

        <p className="btn btn-danger" onClick={() => { setEditprofilemodal(true) }}>Edit Profile</p>
        <Modal size="md-down" show={isEditprofilemodal} onHide={() => { setEditprofilemodal(false) }} centered  >
            <Modal.Body className='bg-black' style={{ padding: '0 10%' }}>
                <div className='mt-4' >
                    <div className='d-flex justify-content-end'>
                        <button className='btn-close' aria-label="Close" onClick={() => { setEditprofilemodal(false) }}></button>
                    </div>
                    <h2 className="modal-title text-white text-center" >Edit Profile FORM</h2>
                    <form>
                        <div className="mb-3 mt-4">
                            <input type="name" className="form-control input-field" defaultValue={props.userData.name} id="exampleInputName" aria-describedby="nameHelp"
                                placeholder="Name" name="name" />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="email" name="email" className="form-control input-field" defaultValue={props.userData.email} id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" className="form-control  input-field" defaultValue={props.userData.password} id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="text" name="contect" className="form-control input-field" id="exampleInputContact" defaultValue={props.userData.contect} aria-describedby="contactHelp"
                                placeholder="Contact Us" />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="text" name="address" className="form-control input-field" id="exampleInputAddress" aria-describedby="addressHelp" defaultValue={props.userData.address}
                                placeholder="Address" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="ourbtn w-50 mt-3 mb-3">Update</button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    </>)
}

export default EditProfileModal;