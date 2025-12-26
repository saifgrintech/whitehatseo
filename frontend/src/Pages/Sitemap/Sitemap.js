import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import './sitemap.css'

const Sitemap = () => {
  return (
    <>
      <Navbar />

      <div className="container3">
          <div className="header">
            <div className="box">
              <h1>Sitemap</h1>
              <div className="all-animation">

                <div className="all-animation1">
                  <img src='all-animations/all-animation1.png' className='circle-img' alt='moon' />

                </div>

                <div className="all-animation2">
                  <img src='all-animations/all-animation2.svg' className='cross-img' alt='cross' />

                </div>

                <div className="all-animation3">
                  <img src='all-animations/all-animation3.svg' className='circle-img' alt='circle' />

                </div>

                <div className="all-animation4">
                  <img src='all-animations/all-animation4.svg' className='triangle-img' alt='triangle' />
                </div>

                <div className="all-animation5">
                  <img src='all-animations/all-animation5.png' className='design1' alt='zig-zag' />

                </div>

                <div className="all-animation6">
                  <img src='all-animations/all-animation6.svg' className='triangle3' alt='triangle' />

                </div>

                <div className="all-animation7">
                  <img src='all-animations/all-animation7.svg' className='triangle3' alt='triangle' />

                </div>

                <div className="all-animation8">
                  <img src='all-animations/all-animation8.svg' className='triangle3' alt='triangle' />

                </div>


              </div>
            </div>
          </div>
        </div>

      {/* SITEMAP CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* MAIN PAGES */}
            <div className="col-md-6 col-lg-3">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">
                  <i className="fa-solid fa-house me-2"></i>Main Pages
                </h5>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* SERVICES & PLANS */}
            <div className="col-md-6 col-lg-3">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">
                  <i className="fa-solid fa-gear me-2"></i>Pricing Plans
                </h5>
                <ul>
                  <li><Link to="/search-engine-optimization">SEO Plan</Link></li>
                  <li><Link to="/pay-per-click">PPC Plan</Link></li>
                  <li><Link to="/digital-marketing">Digital Marketing Plan</Link></li>
                  <li><Link to="/link-building">Link Building Plan</Link></li>
                </ul>
              </div>
            </div>

            {/* BLOG & RESOURCES */}
            <div className="col-md-6 col-lg-3">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">
                  <i className="fa-solid fa-blog me-2"></i>Other Pages
                </h5>
                <ul>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            {/* USER & OTHER */}
            <div className="col-md-6 col-lg-3">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">
                  <i className="fa-solid fa-user me-2"></i>Admin Pages
                </h5>
                <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Signup</Link></li>
                  {/* <li><Link to="/forgotpassword">Forgot Password</Link></li> */}
                </ul>
              </div>
            </div>

           

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sitemap;
