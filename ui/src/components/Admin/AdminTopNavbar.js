import './AdminTopNavbar.css';
import userImage from '../../images/user.jpg'
var show = false
function AdminTopNavbar() {
    function silderBarToggle() {
        var sliderBar = document.getElementById("siderBar");
        var content = document.getElementById("content")
        if (show) {
            sliderBar.classList.remove("open")
            content.classList.remove("open")
            show = false;
        }
        else {
            sliderBar.classList.add("open")
            content.classList.add("open")
            show = true;
        }
    }

    return (<>
        <nav className="navbar navbar-expand-lg bg-black  px-4 py-0">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={silderBarToggle}>
                    <i className="fa fa-solid fa-bars fs-3 text-white"></i>
                </button>
                <a className="navbar-brand mx-2 mx-lg-5 text-light" href="#">ADMIN</a>
                <div className="contentlinks">
                    <ul className="navbar-nav align-items-center ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link" >
                                <i className="fa fa-envelope me-lg-2 text-white"></i>
                                <span className="text-light">Message</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="fa fa-bell me-lg-2 text-white"></i>
                                <span className="text-light">Notification</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" >
                                <img className="rounded-circle me-lg-2" src={userImage} alt=""
                                    style={{ width: " 40px", height: "40px" }} />
                                <span className="text-light">John Doe</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default AdminTopNavbar;