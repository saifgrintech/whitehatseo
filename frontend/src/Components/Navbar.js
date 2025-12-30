import { Link, NavLink } from 'react-router-dom'
// import { useAuth } from '../store/auth';



const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Navbar = () => {

  // const { logout, isAuthenticated } = useAuth();

  return (
    <section id='wrapper'>
    <nav id="website-navbar1" className="navbar navbar-expand-lg fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={`${WEBSITE_URL}/images/white_logo.png`} style={{width:"130px"}} alt='logo'></img></a>

         <div className='other-option2 d-block d-lg-none ms-auto '>
            <Link to='/contact'>
            <button className="btn-purple1 btn-hover" type="">Free consultation</button>
            </Link>
          
          </div>
          
      
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>


        <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/case-studies"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Case Studies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/plans"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Plans
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
          <div className='other-option d-none d-lg-block'>


              <Link to='/contact'>
              <button className="btn-purple1 btn-hover" type="">Free Consultation</button>
              </Link>

        
          
          </div>
          
        
         



      </div>
    </nav>
    </section>

  )
}

export default Navbar

