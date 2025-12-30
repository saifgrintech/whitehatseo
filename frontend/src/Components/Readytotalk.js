import React from 'react'
import { Link } from 'react-router-dom'

const Readytotalk = () => {
    return (
        <div className='readtotalk_page'>

            <div className='ready-to-talk position-relative'>

                <div className='box'>
                    <div className='col-lg-7 col-md-9 mx-auto inside_box px-2'>
                    <h3 className='m-0'>Ready To Talk?</h3>
                    <p className='text-white m-0'>Have questions or need assistance? We’re here to help! Whether you're looking for more information about our services or need support, we’d love to hear from you.</p>
                    <div className=" btn-hover">
                        <Link to='/contact'>
                        <button className="btn-purple1 " type="">BooK a free Consultation</button>
                        </Link>
                    </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Readytotalk
