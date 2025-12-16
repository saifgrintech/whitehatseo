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
                                    <p className='mt-3 px-3'> We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                                    <div className='footer-social   m-0'>
                                        <div className='d-flex justify-content-start ms-xl-2'>
                                            <Link to="https://www.facebook.com/people/WhitehatSeo/100094138745677/" target="_blank" ><i className='fa-brands fa-facebook me-2'></i></Link>
                                            <Link to="https://twitter.com/WhitehatSeo_" target="_blank" ><i className='fa-brands fa-twitter me-2'></i></Link>
                                            <Link to="https://www.instagram.com/whitehatseo_/" target="_blank" ><i className='fa-brands fa-instagram me-2'></i></Link>
                                            <Link to="https://www.linkedin.com/company/www.whitehatseo.in/" target="_blank" ><i className='fa-brands fa-linkedin me-2'></i></Link>

                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section text-align-center'>
                                    <h3>Quick Links</h3>
                                    <ul className='p-0'>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/about'>About Us</Link></li>
                                        <li><Link to='/services'>Services</Link></li>
                                        <li><Link to='/blog'>Latest News</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section'>
                                    <h3>Support</h3>
                                    <ul className='p-0'>
                                        <li><Link to='/faqs' >FAQs</Link></li>
                                        <li><Link to='/privacy-policy' >Privacy Policy</Link></li>
                                        <li><Link to='/terms-conditions' >Terms & Conditions</Link></li>
                                        <li><Link to='/contact' >Contact Us</Link></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section'>
                                    <h3>Address</h3>
                                    <ul className='p-0'>
                                        <li>A-818, 8th Floor, Bestech Business Tower, Mohali, Punjab 160062</li>
                                        <li>Email : <Link to="mailto:info@whitehatseo.in"> info@whitehatseo.in</Link></li>
                                        <li>Phone : <Link to="tel:+919418960274" >+91-9418960274</Link></li>
                                    </ul>

                                   
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='footer-copyright border-top'>
                        <div className='container'>
                            <div className='content py-3'>
                                <p className='m-0'>© Copyright 2025 Whitehatseo | All Rights Reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Footer
