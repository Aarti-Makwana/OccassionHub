import caterer from '../../images/Caterer.jpg'
import './djRegistrationcss.css';
function DJ(){
   return(<>
  <section className="h-50" style={{backgroundColor:"black"}}>
  <div className="container py-5 h-50">
    <div className="row d-flex justify-content-center align-items-center h-50" >
          <img src={caterer} style={{height:"350px"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h2 className="reg mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Dj Form</h2>
          <form className="px-md-2">
            <div className="row">
             <div className="col-md-6">
              <div className="form-outline mt-4"> 
                <input type="text" id="name1" className="form-control" placeholder="Enter your Business name"/>
               </div>
              </div> 
              <div className="col-md-6">
              <div className="mb-4">
               <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                  <input className="form-control" type="file" id="formFile"/>
               </div>
              </div> 
            </div>
              <div className="row">
                <div className="col-md-6">
                <select class="form-select" id="select1" aria-label="Default select example">
                  <option selected>Select Equipments</option>
                  <option value="2dj">Base Charge with 2Dj</option>
                  <option value="3dj">3Dj</option>
                  <option value="4dj">4Dj</option>
                  <option value="5dj">5Dj</option>
                </select>
                </div>
                <div className="col-md-6">
                <select class="form-select" id="select1" aria-label="Default select example">
                  <option selected>Select price as per Equipments</option>
                  <option value="2dj">2000</option>
                  <option value="3dj">3000</option>
                  <option value="4dj">4000</option>
                  <option value="5dj">5000</option>
                </select>
               </div>
                </div>
              <div className="row">
               <div className="col-md-4">
               </div>
               <div className="col-md-4">
               <div className="mb-4">
               <button type="submit" className="btn btn-sm ">Submit</button>
               </div>
               </div>
               <div className="col-md-4">
               </div>
              </div>
            </form>
            </div>
             </div>
          </div>
</section>
   </>)
}
export default DJ