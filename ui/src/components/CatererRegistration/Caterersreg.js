import caterer from '../../images/Caterer.jpg'
import './catererRegistrationcss.css';
function Caterersreg(){
   return(<>
  <section className="h-50" style={{backgroundColor:"black"}}>
  <div className="container py-5 h-50">
    <div className="row d-flex justify-content-center align-items-center h-50" >
      {/* <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3"> */}
          <img src={caterer} style={{height:"350px"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h2 className="reg mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Caterers Form</h2>
          <form className="px-md-2">
            <div className="row">
             <div className="col-md-6">
              <div className="form-outline mb-4"> 
                <input type="text" id="name1" className="form-control" placeholder="Enter your Business name"/>
                {/* <label className="form-label" for="form3Example1q">Name</label> */}
               </div>
              </div> 
              <div className="col-md-6">
              <div className="form-outline mb-4"> 
                <input type="text" id="name2" className="form-control" placeholder="Enter your Specialization"/>
                {/* <label className="form-label" for="form3Example1q">Name</label> */}
               </div>
              </div> 
            </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" id="flex1" for="flexRadioDefault1">
                     Vegetarian
                  </label>
                  </div>
                  <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" id="flex2" for="flexRadioDefault2">
                     Non-Vegetarian
                  </label>
                 </div>

                </div>
                <div className="col-md-6 mb-4">
                <div className="form-outline mb-4"> 
                <input type="text" id="name2" className="form-control" placeholder="Enter your Service Charges"/>
               </div>
                </div>
              </div>
              <div className="row">
               <div className="col-md-6">
               <div className="mb-4">
               <label for="formFile" id="addgallery" className="form-label">Add Your Gallery</label>
                  <input className="form-control" type="file" id="formFile"/>
               </div>
               </div>
               <div className="col-md-6">
               <div className="mb-4">
               <button type="submit" className="btn btn-sm ">Submit</button>
               </div>
               </div>
              </div>
            </form>

          </div>
          </div>
        </div>
             

    {/* </div>
  </div> */}
</section>
   </>)

}
export default Caterersreg