import React from 'react'
import { Link } from 'react-router-dom'

const Readytotalk = () => {
    return (
        <div className='readtotalk_page'>

            <div className='ready-to-talk position-relative'>

                <div className='box'>
                    <div className='col-lg-7 col-md-9 mx-auto inside_box'>
                    <h3 className='m-0'>Ready To Talk?</h3>
                    <p className='text-white m-0'>Have questions or need assistance? We’re here to help! Whether you're looking for more information about our services or need support, we’d love to hear from you.</p>
                    <div className=" btn-hover">
                        <Link to='/contact'>
                        <button className="btn-purple1 " type="">Contact Us</button>
                        </Link>
                    </div>

                    </div>

                    

                </div>

                {/* <div className='container col-11 mx-auto container-inner'>

                    <div className='row'>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner1.png' className='img' alt='node' />
                                    <img src='frontendImg/partner1hover.png' className='imghover' alt='node' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner2.png' className='img' alt='slack' />
                                    <img src='frontendImg/partner2hover.png' className='imghover' alt='slack' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner3.png' className='img' alt='envato' />
                                    <img src='frontendImg/partner3hover.png' className='imghover' alt='envato' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner4.png' className='img' alt='themeforest' />
                                    <img src='frontendImg/partner4hover.png' className='imghover' alt='themeforest' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner5.png' className='img' alt='gitup' />
                                    <img src='frontendImg/partner5hover.png' className='imghover' alt='gitup' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner1.png' className='img' alt='node' />
                                    <img src='frontendImg/partner1hover.png' className='imghover' alt='node' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner6.png' className='img' alt='rails' />
                                    <img src='frontendImg/partner6hover.png' className='imghover' alt='rails' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner1.png' className='img' alt='node' />
                                    <img src='frontendImg/partner1hover.png' className='imghover' alt='node' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner2.png' className='img' alt='slack' />
                                    <img src='frontendImg/partner2hover.png' className='imghover' alt='slack' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner3.png' className='img' alt='envato' />
                                    <img src='frontendImg/partner3hover.png' className='imghover' alt='envato' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner4.png' className='img' alt='themeforest' />
                                    <img src='frontendImg/partner4hover.png' className='imghover' alt='themeforest' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner5.png' className='img' alt='gitup' />
                                    <img src='frontendImg/partner5hover.png' className='imghover' alt='gitup' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner1.png' className='img' alt='node' />
                                    <img src='frontendImg/partner1hover.png' className='imghover' alt='node' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner6.png' className='img' alt='rails' />
                                    <img src='frontendImg/partner6hover.png' className='imghover' alt='rails' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner3.png' className='img' alt='envato' />
                                    <img src='frontendImg/partner3hover.png' className='imghover' alt='envato' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner4.png' className='img' alt='themeforest' />
                                    <img src='frontendImg/partner4hover.png' className='imghover' alt='themeforest' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner5.png' className='img' alt='gitup' />
                                    <img src='frontendImg/partner5hover.png' className='imghover' alt='gitup' />
                                </a>


                            </div>
                        </div>

                        <div className='col-lg-2 col-md-3 col-6 py-2'>
                            <div className='flex'>
                                <a href=''>
                                    <img src='frontendImg/partner1.png' className='img' alt='node' />
                                    <img src='frontendImg/partner1hover.png' className='imghover' alt='node' />
                                </a>


                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Readytotalk
