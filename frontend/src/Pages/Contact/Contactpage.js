import React from 'react'
import Contactsection from './Contactsection'
import "./contactsection.css"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Helmet } from 'react-helmet-async'


const Contactpage = () => {
  return (
    <>
        <Helmet>
        <title>Contact Whitehat SEO – Get in Touch with Our SEO Experts</title>
        <meta name="description" content="Reach out to  Whitehat SEO for SEO services, digital marketing support, consultations, and expert guidance to grow your online presence." />
        <meta property="og:title" content="Contact Whitehat SEO – Get in Touch with Our SEO Experts" />
        <meta property="og:description" content="Reach out to  Whitehat SEO for SEO services, digital marketing support, consultations, and expert guidance to grow your online presence." />
        <link rel="canonical" href="https://whitehatseo.in/contact" />
      </Helmet>

      <div>

        <Navbar />

        <div className='contact-title '>

          <div className='container3'>
            <div className='header'>
              <div className='box'>
                <h1 className='mb-0'>Contact Us</h1>

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

        </div>



        {/* <div className='container'>
          <div className='contact-section'>
            <div className='row pb-5'>
              <div className="col-lg-4 col-md-6 col-sm-6 enquiry">
                <div className='card border-0 h-100'>
                  <div className='contact-info'>
                    <i className="fa-solid fa-envelope mb-2"></i>
                    <h3 className='py-2 fw-bold'>Mail Here</h3>
                    <a target='_blank' href='mailto:info@whitehatseo.in'>
                      <p>info@whitehatseo.in</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 mt-4 mt-sm-0">
                <div className='card border-0 h-100'>
                  <div className='contact-info'>
                    <i className="fa-solid fa-location-dot mb-2"></i>
                    <h3 className='py-2 fw-bold'>Visit Here</h3>
                    <p>A-818, 8th Floor, Bestech Business Tower, Mohali, Punjab 160062</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 details">
                <div className='card border-0 h-100'>
                  <div className='contact-info'>
                    <i className="fa-solid fa-phone mb-2"></i>
                    <h3 className='py-2 fw-bold'>Call Here</h3>
                    <a href="tel:+917018168269"> +91-7018168269 </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}



        {/* <div className='contact-area'>

          <div className='container'>

            <div className='section-title'>

              <h2>Get In Touch With Us</h2>
              <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
            </div>
          </div>
        </div> */}



        <Contactsection />

        <Footer />

      </div>

    </>
  )
}

export default Contactpage
