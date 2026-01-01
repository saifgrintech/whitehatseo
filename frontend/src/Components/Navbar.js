import { Link, NavLink } from "react-router-dom";
// import { useAuth } from '../store/auth';

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Navbar = () => {
  // const { logout, isAuthenticated } = useAuth();

  return (
    <section id="wrapper">
      <nav id="website-navbar1" className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={`${WEBSITE_URL}/images/white_logo.png`}
              style={{ width: "130px" }}
              alt="logo"
            ></img>
          </a>

          <div className="other-option2 d-block d-lg-none ms-auto me-3">
            <Link to="/contact">
              <button className="btn-purple1 btn-hover" type="">
                Free consultation
              </button>
            </Link>
          </div>

          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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

              {/* <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li> */}

              <li className="nav-item dropdown mega-dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </span>

                <div className="dropdown-menu mega-menu p-4">
                  <div className="row">
                    {/* COLUMN 1 */}
                    <div className="col-12 mb-4 mb-md-0 col-md-4">
                      <h6 className="mega-title">SEO Services</h6>
                      <NavLink
                        className="dropdown-item"
                        to="/services/search-engine-optimization"
                      >
                        SEO
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/local-seo"
                      >
                        Local SEO
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/off-page-seo"
                      >
                        Off Page SEO
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/technical-seo"
                      >
                        Technical SEO
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/seo-audit"
                      >
                        SEO Audit
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/keyword-research"
                      >
                        Keyword Research
                      </NavLink>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="col-12 mb-4 mb-md-0 col-md-4">
                      <h6 className="mega-title">Marketing & Ads</h6>
                      <NavLink
                        className="dropdown-item"
                        to="/services/pay-per-click-ppc"
                      >
                        PPC Advertising
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/digital-marketing"
                      >
                        Digital Marketing
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/social-media-marketing"
                      >
                        SMM
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/social-media-optimization"
                      >
                        SMO
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/email-marketing"
                      >
                        Email Marketing
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/content-marketing"
                      >
                        Content Marketing
                      </NavLink>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="col-12  mb-md-0 col-md-4">
                      <h6 className="mega-title">Analytics & Branding</h6>
                      <NavLink
                        className="dropdown-item"
                        to="/services/google-tag-manager-gtm"
                      >
                        Google Tag Manager
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/google-analytics-4-ga4"
                      >
                        GA4 Setup
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/google-my-business-gmb"
                      >
                        Google My Business
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/branding"
                      >
                        Branding
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/marketing-research"
                      >
                        Marketing Research
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/services/link-building"
                      >
                        Link Building
                      </NavLink>
                    </div>
                    <div className="col-12 mt-3 text-md-center">
                      <NavLink
                        className="dropdown-item m-0 "
                        style={{textDecoration:"underline", color:"#0d96de"}}
                        to="/services"
                        end
                      >
                        View all services
                      </NavLink>
                    </div>
              
                  </div>
                </div>
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
                  to="/packages"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Packages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Blogs
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
          <div className="other-option d-none d-lg-block">
            <Link to="/contact">
              <button className="btn-purple1 btn-hover" type="">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
