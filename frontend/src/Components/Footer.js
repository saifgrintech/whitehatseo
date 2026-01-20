import { Link } from 'react-router-dom';

import React from 'react'

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;


const Footer = () => {
    return (
        <>

            <div className='footer pt-5 pb-0' style={{ backgroundColor: "#f7fafd" }}>


                <div className='footer-animation'>

                    <div className='footer-animation1'>
                        <img src={`${WEBSITE_URL}/homeimages/footer-shape1.png`} className='footer-moon' alt='moon'></img>
                    </div>

                    <div className='footer-animation2'>
                        <img src={`${WEBSITE_URL}/homeimages/footer-shape2.svg`} className='footer-cross' alt='cross'></img>
                    </div>
                </div>

                <div className='container '>

                    <div className='row'>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex'>
                                <div className='footer-section'>
                                    <Link to='/'>
                                    <img src={`${WEBSITE_URL}/images/white_logo.png`} style={{ width: "130px" }} alt='logo'></img>
                                    </Link>
                                    <p className='mt-3 px-3'> We help brands grow through smart strategies, data-driven decisions, and measurable results.</p>
                                    <div className="footer-social m-0">
                                    <div className="d-flex justify-content-start ms-xl-2">
                                        <a
                                        href="https://www.facebook.com/people/WhitehatSeo/100094138745677/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhiteHatSeo Facebook"
                                        >
                                        <i className="fa-brands fa-facebook me-2"></i>
                                        </a>

                                        <a
                                        href="https://twitter.com/WhitehatSeo_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhiteHatSeo Twitter"
                                        >
                                        <i className="fa-brands fa-twitter me-2"></i>
                                        </a>

                                        <a
                                        href="https://www.instagram.com/whitehatseo_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhiteHatSeo Instagram"
                                        >
                                        <i className="fa-brands fa-instagram me-2"></i>
                                        </a>

                                        <a
                                        href="https://www.linkedin.com/company/www.whitehatseo.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhiteHatSeo LinkedIn"
                                        >
                                        <i className="fa-brands fa-linkedin me-2"></i>
                                        </a>
                                    </div>
                                    </div>

                                </div>
                                

                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section text-align-center'>
                                    <h4>Quick Links</h4>
                                    <ul className='p-0'>
                                        <li><Link to='/about'>About Us</Link></li>
                                        <li><Link to='/case-studies'>Case Studies</Link></li>
                                        <li><Link to='/contact' >Contact Us</Link></li>
                                        <li><Link to='/blogs'>Latest News</Link></li>
                                        <li><Link to='/packages'>Packages</Link></li>
                                         <li><Link to='/faqs' >FAQs</Link></li>
                                        <li><Link to='/sitemap' >Sitemap</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section'>
                                    <h4>Services</h4>
                                    <ul className='p-0'>
                                       
                                        <li><Link to='/services/search-engine-optimization' >SEO </Link></li>
                                        <li><Link to='/services/local-seo' >Local SEO </Link></li>
                                        <li><Link to='/services/digital-marketing' >Digital Marketing </Link></li>
                                        <li><Link to='/services/pay-per-click-ppc' >PPC </Link></li>
                                        <li><Link to='/services/google-analytics-4-ga4' >GA4 </Link></li>
                                        <li><Link to='/services/google-tag-manager-gtm' >GTM </Link></li>
                                        <li><Link to='/services/google-my-business-gmb' >GMB </Link></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section'>
                                    <h4>Address</h4>
                                    <ul className='p-0'>
                                        <li>A-818, 8th Floor, Bestech Business Tower, Mohali, Punjab 160062</li>
                                        <li>Email : <a href="mailto:info@whitehatseo.in" target="_blank" rel="noopener noreferrer" > info@whitehatseo.in </a></li>
                                        <li>Phone : <Link to="tel:+917018168269" >+91-7018168269</Link></li>
                                    </ul>

                                   
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='footer-copyright border-top'>
                        <div className='container'>
                            <div className='content py-3'>
                                <div className="row ">
                                    <div className="col-md-6 text-center  text-md-start">
                                  <p className="m-0"> © Copyright {new Date().getFullYear()} WhiteHatSeo | All Rights Reserved. </p>

                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                                            <li><Link to='/privacy-policy' >Privacy Policy</Link></li>
                                            <li><Link to='/terms-conditions' >Terms & Conditions</Link></li>
                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Footer
