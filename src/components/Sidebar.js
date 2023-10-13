import ContentContainer from "./ContentContainer"
function Sidebar() {

  return (

    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li class="nav-item">
                <a href="#" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li class="w-100">
                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Contact</span> </a>
              </li>
            </ul>
            <hr></hr>
            <div class="pb-4">
              <a href="#" class="d-flex align-items-center text-white text-decoration-none" id="User1" aria-expanded="false">
                <img src="https://media.licdn.com/dms/image/C4E35AQFcE_PnCoPaUQ/profile-framedphoto-shrink_100_100/0/1601911718102?e=1697828400&v=beta&t=PgJQ_4ME4Ep_oENbNhG-NWec6GC4HEo3mWPER2wjjVQ" alt="" width="40" height="40" class="rounded-circle" />
                <span class="d-none d-sm-inline mx-1">Ryan Horowitz</span>
              </a>
            </div>
          </div>
        </div>
        <ContentContainer />
      </div>
    </div>
  )
}

export default Sidebar