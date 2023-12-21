import './App.css';
import Navbar from './components/Navbar.js';
import Oranise from './components/Organise.js';
import Services from './components/Services.js';
import Whyus from './components/Whyus.js';
import Footer from './components/Footer.js';
import Upcomingevent from './components/Upcomingevent.js';
import UpComingEvents from './components/UpComingEvents.js';
import Thought from './components/Thought.js';
import EventsDetails from './components/EventsDetails.js';
import Servicepage from './components/Servicepage.js';
import VisionGoal from './components/VisionGoal.js';
import Team from './components/Team.js';
import Faq from './components/Faq.js';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <Oranise />
          <Services />
          <Whyus />
          <Upcomingevent />
          <Thought />
        </>
        }>
        </Route>
        <Route path='/upcomingevent' element={<>
          <Navbar />
          <UpComingEvents /></>}></Route>
        <Route path='/bookticket' element={<>
          <Navbar />
          <EventsDetails /></>}>
        </Route>
        <Route path='/servicepage' element={<>
          <Navbar />
          <Servicepage />
        </>}>
        </Route>
        <Route path='/aboutpage' element={<>
          <Navbar />
          <VisionGoal/>
          <Team/>
          <Faq/>
        </>
        }>
        </Route>
      </Routes >
      <Footer />

    </>
  );
}

export default App;
