import { Link } from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import headshotIcon from '../../public/headshot-ico-small.jpg'
import ContentContainer from "./ContentContainer"
function Sidebar() {

  return (

    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to={"/"} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-3 d-none d-sm-inline">Menu</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <i className="fs-4 bi-house"></i>
                <span className="ms-1 d-none d-sm-inline">
                  <Link to={"/"} className='text-decoration-none fs-3'>Home</Link>
                </span>
              </li>
              <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle  fs-3">
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Portfolio</span> </a>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#dumm" className="nav-link px-0"> <span className="d-none d-sm-inline">Project</span> 1 </a>
                  </li>
                  <li>
                    <a href="#dumm2" className="nav-link px-0"> <span className="d-none d-sm-inline">Project</span> 2 </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                {/* <a href="#" className="nav-link align-middle px-0"> */}
                <i className="fs-4 bi-house"></i>
                <span className="ms-1 d-none d-sm-inline">
                  <Link to={"/contact"} className='text-decoration-none fs-3'>Contact</Link>
                </span>

                {/* </a> */}

              </li>
            </ul>
            <hr></hr>
            <div className="pb-4">
              <Link to={"/contact"} className="d-flex align-items-center text-white text-decoration-none" aria-expanded="false" id="User1" >
                <img src="https://portfolio-public-resources.s3.amazonaws.com/square-profile.JPG" alt="profile" width="40" height="40" className="rounded-circle" />
                <span className="d-none d-sm-inline mx-1">Ryan Horowitz</span>
              </Link>
            </div>
          </div>
        </div>

        <ContentContainer />

      </div>
    </div>
  )
}

export default Sidebar