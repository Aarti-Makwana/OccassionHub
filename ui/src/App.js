import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Homepage/Home.js';
import About from './components/Aboutpage/About.js';
import Footer from './components/Footer/Footer.js';
import UpComingEvents from './components/Upcomingeventspage/UpComingEvents.js';
import EventsDetails from './components/Eventdetailpage/EventsDetails.js';
import Servicepage from './components/Servicepage/Servicepage.js';
import Profile from './components/Profilepage/Profile.js';

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
      </Routes >
      <Footer />

    </>
  );
}

export default App;
