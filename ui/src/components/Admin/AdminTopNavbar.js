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
        <nav class="navbar navbar-expand-lg bg-black  px-4 py-0">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" onClick={silderBarToggle}>
                    <i class="fa fa-solid fa-bars fs-3 text-white"></i>
                </button>
                <a class="navbar-brand mx-2 mx-lg-5 text-light" href="#">ADMIN</a>
                <div class="contentlinks">
                    <ul class="navbar-nav align-items-center ms-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link" >
                                <i class="fa fa-envelope me-lg-2 text-white"></i>
                                <span class="text-light">Message</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="fa fa-bell me-lg-2 text-white"></i>
                                <span class="text-light">Notification</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" >
                                <img class="rounded-circle me-lg-2" src={userImage} alt=""
                                    style={{ width: " 40px", height: "40px" }} />
                                <span class="text-light">John Doe</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default AdminTopNavbar;