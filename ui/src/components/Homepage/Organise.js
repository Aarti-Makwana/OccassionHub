import img from '../../images/6.jpg';
import { Link } from 'react-router-dom';
import jscookie from 'js-cookie';
import concrt from '../../images/concrt.jpg';

// import RequirmentForm from './RequirmentForm';

function Organise() {
    const isLoggedIn = jscookie.get("user") != undefined;
    return (<>
        <div className="pt-5 pb-5" style={{ background: `url(${concrt})`, backgroundPosition: "center", backgroundAttachment: 'fixed', marginTop: '-5%' }}>
            <div className="container text-white text-center">
                <h3><span className="webcolor">Let's Make </span> Your Event<br /> Memorable</h3>
                <h5 className="mt-4">Elevate Your Experience with Our Spectacular <br /> Events!"</h5>
                {/* <button className="ourbtn mt-2"><Link to='/eventRequest' className='text-white fw-bold text-decoration-none'><span>Organise Your Event</span></Link></button> */}
                <button className="ourbtn mt-2">{isLoggedIn ? (
                    <Link to='/eventRequest' className='text-white fw-bold text-decoration-none'>
                        <span>Organise Your Event</span>
                    </Link>
                ) : (
                    <span onClick={() => alert("Please login first.")}>Organise Your Event</span>
                )}</button>
            </div>
        </div>
    </>);
}

export default Organise;