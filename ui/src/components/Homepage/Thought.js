import img from '../../images/6.jpg';
import './thought.css';
function Thought() {
    return (<>
        <div className='text-white text-center thoughtmaindiv' style={{background : `url(${img})`,backgroundPosition :"center", backgroundAttachment :'fixed'}}>
            <div className='container thoughtheading p-2'>
                <span>" CREATING MEMORABLE EVENTS TAILORED TO THE CLIENT "</span>
            </div>
            <div className="container thoughtdiv text-center p-5 mt-4">
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum dolores harum porro distinctio doloribus
                    consequuntur eligendi voluptatum! Voluptatum in incidunt eum vitae. Sunt qui tempora rerum. Distinctio et sunt
                    doloribus magnam illo ipsum.
                </span>
            </div>
        </div>
    </>);
}

export default Thought;