import Navbar from './components/Navbar.js';
import Home from './components/Homepage/Home.js';
import About from './components/Aboutpage/About.js';
import Footer from './components/Footer/Footer.js';
import UpComingEvents from './components/Upcomingeventspage/UpComingEvents.js';
import EventsDetails from './components/Eventdetailpage/EventsDetails.js';
import Servicepage from './components/Servicepage/Servicepage.js';
import Profile from './components/Profilepage/Profile.js';
import RequirmentForm from './components/Requirmentform/RequirmentForm.js';
import AdmindashBoard from './components/Admin/AdminDashboard.js';
import AllServices from './components/Allservices/AllServices.js';
import ContactUs from './components/ContactusPage/Contact.js';
import CaterersDashboard from './components/ServiceProviderDashboard/CaterersDashboard.js';
import Passes from './components/passesPage/pass.js';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Home /></>}></Route>
        <Route path='/upcomingevent' element={<><UpComingEvents /></>}></Route>
        <Route path='/bookticket' element={<><EventsDetails /></>}></Route>
        <Route path='/servicepage' element={<><Servicepage /></>}></Route>
        <Route path='/aboutpage' element={<><About /></>}></Route>
        <Route path='/profile' element={<><Profile /></>} ></Route>
        <Route path='/eventRequest' element={<><RequirmentForm /></>}></Route>
        <Route path='/searchServices' element={<><AllServices /></>}></Route>
        <Route path='/contactus' element={<><ContactUs /></>}></Route>
        <Route path='/admin' element={<><AdmindashBoard /></>}></Route>
        <Route path='/catererprofile' element={<><CaterersDashboard /></>}></Route>
        <Route path='/passes' element={<><Passes/></>}></Route>

      </Routes >
      <Footer />
    </>
  );
}

export default App;
