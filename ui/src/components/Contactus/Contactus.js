// import img from '../images/6.jpg';
import './contactuscss.css'
function Contact() {
   return (<>
      <div className="container-fluid" >
         <div className='' id="curvediv">
            <h1 className="contact text-center">Contact <span style={{ color: "white" }}>Us</span></h1>
            <p className="text-center text-white mt-3">Pellentesque lorem quis in auctor bibendum ullamcorper non purus dui,<br /> ultricies sit eu sit pellentesque duis vitae non est eu, quis metus aliquet laoreet.</p>
            <div className="container bg-danger mt-5">
               <div className="row h-100">
                  {/* <div className="col-lg-6 bg-dark"> */}
                  <div className="col-sm-6 col-md-6 form-section " style={{ backgroundColor: "#1B1B1B" }}>
                     <div className="login-wrapper">
                        {/* <h2 class="login-title">Sign in</h2> */}
                        <form action="#!">
                           <div className="form-group">
                              <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" />
                           </div>
                           <div className="form-group">
                              <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email" />
                           </div>
                           <div className="form-group">
                              <input type="text" name="subject" id="subject" className="form-control" placeholder="Enter Subject" />
                           </div>
                           <div className="mb-3">
                              <label className="p-2" style={{ color: "#ACACAC", fontWeight: "bold", fontSize: "14px" }}>Enter a Message </label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                           </div>
                           <button className="btn" type="submit">Send Message</button>
                        </form>
                     </div>
                  </div>
                  <div className="col-lg-6 " style={{ backgroundColor: "#000000" }}>
                     <div>
                        <h2 className="getintouch"><span style={{ color: "white" }}>Get In</span> Touch</h2>
                        <p id="get" className="mx-3">Pellentesque lorem quis in auctor bibendum ullamcorper non purus dui</p>
                     </div>
                     <br/>
                     <hr className="ms-4" style={{ width: "90%", color: "white" }} />
                     <div>
                        <h2 className="getintouch"><span style={{ color: "white" }}>Our</span> Location</h2>
                        <p id="get1">198 West 21th Street,  Suite 721 New York   NY 10016</p>
                     </div>
                     <br/>
                     <hr className="ms-4" style={{ width: "90%", color: "white" }} />
                     <div>
                        <h2 className="getintouch"><span style={{ color: "white" }}>Call</span> Us</h2>
                        <p id="get2">91+7895623895</p>
                     </div>
                     <br/>
                     <hr className="ms-4" style={{ width: "90%", color: "white" }} />
                     <div>
                        <h2 className="getintouch"><span style={{ color: "white" }}>Email</span> US</h2>
                        <p id="get3">admin@gmail.com</p>
                     </div>
                     <br/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>)
}
export default Contact