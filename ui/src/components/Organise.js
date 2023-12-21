import img from '../images/6.jpg';
function Organise () {
    return(<>
        <div className="bg-success pt-5 pb-5" style={{background : `url(${img})`,backgroundPosition :"center", backgroundAttachment :'fixed' , marginTop : '-5%'}}>
            <div className="container text-white p-5 text-center">
                <h3><span className="webcolor">Let's Make </span> Your Event<br/> Memorable</h3>
                <h5 className="mt-4">Elevate Your Experience with Our Spectacular <br/> Events!"</h5>
                <button className="ourbtn mt-2">Organise your Event</button>
            </div>
        </div>
    </>);
}

export default Organise;