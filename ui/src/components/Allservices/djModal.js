import Modal from 'react-bootstrap/Modal';
import { caterre_requestUrl } from '../../urls';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { dj_requestUrl } from '../../urls';
import jscookie from 'js-cookie';
function DjModal(props) {
    const { djEmail } = props;
    const [isResponseToUserModal, setResponseToUserModal] = useState(false);
    const [djData1, setDjData] = useState('');
    const userEmail = jscookie.get("user");
    const getData = (event) => {
        const { name, value } = event.target;
        setDjData({
            ...djData1,
            [name]: value,
        });
    }

    const handleSubmitDjData = async (event) => {
        event.preventDefault();
        alert("handleSubmitDjData : " + djEmail);
        djData1["userEmail"] = userEmail;
        djData1["djEmail"] = djEmail;
        try {
            var responseData = await axios.post(dj_requestUrl + "/djBookUser", djData1);
            console.log("responseData L ",responseData);
            console.log("request send sucefully");
            
            responseData.then((result)=>{
                if(result.status==201){
                    alert("request send sucefully");
                }
            })
        } catch (error) {

        }
    }
    return (<>
        <button className='ourbtn mt-1' onClick={() => { setResponseToUserModal(true) }}>Book Now</button>
        <Modal size="md-down" show={isResponseToUserModal} onHide={() => { setResponseToUserModal(false) }} centered  >
            <Modal.Body className='bg-black' style={{ padding: '0 10%' }}>
                <div className='mt-4' >
                    <div className='d-flex justify-content-end'>
                        <button className='btn-close' aria-label="Close" onClick={() => { setResponseToUserModal(false) }}></button>
                    </div>
                    <h2 className="modal-title text-white text-center" >Book DJ For Event</h2>
                    <form onSubmit={handleSubmitDjData} method="post">
                        <div className="mb-3">
                            <input type="date" className="form-control input-field" placeholder="Event Date" name="date" onChange={getData} />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="time" className="form-control input-field" placeholder="Event Time" name="time" onChange={getData} />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="text" className="form-control input-field" placeholder="Event location" name="location" onChange={getData} />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="number" className="form-control input-field" id="exampleInputName" placeholder="Enter hours" onChange={getData} name="djhours" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="ourbtn w-50 mt-3 mb-3" style={{ color: 'black' }}>Sbmit</button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    </>)
}
export default DjModal;