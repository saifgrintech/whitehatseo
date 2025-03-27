import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha';

import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

// const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Banner = () => {
  const initialFormData = {
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); 
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only numeric input and limit to 11 characters
      if (/^\d*$/.test(value) && value.length <= 11) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      // For other fields, update as usual
      setFormData({ ...formData, [name]: value });
    }
  };



 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    setLoading(true);
    setError(null);

    try {
       await axios.post(`${BASE_URL}/contact`, { 
        ...formData,
        captcha: captchaValue // Send captcha value to the backend
      });
      setSuccess(true);
      setFormData(initialFormData);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setError("Failed to send message");
      setTimeout(() => setError(null), 5000);
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main-banner'>

      <div className='animation'>

        <div className='shape1'>
          <img src='homeimages/shape1.png' className='shape1' alt='moon' />
        </div>

        <div className='shape3'>
          <img src='homeimages/shape3.svg' className='shape3' alt='circle' />
        </div>

        <div className='shape4'>
          <img src='homeimages/shape4.svg' className='shape4' alt='triangle' />
        </div>

        <div className='shape5'>
          <img src='homeimages/shape5.png' className='shape5' alt='zig-zag' />
        </div>

        <div className='shape6'>
          <img src='homeimages/shape6.svg' className='shape6' alt='traingle' />
        </div>

        <div className='shape7'>
          <img src='homeimages/shape7.svg' className='shape7' alt='cross' />
        </div>

        <div className="all-animation2">
          <img src='all-animations/all-animation2.svg' className='cross-img' alt='cross' />

        </div>

      </div>

      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <h1 className='text-capitalize'>Transforming Digital Visions into Reality with WHITEHATSEO</h1>
            <p>At WHITEHATSEO, we specialize in transforming your digital presence into a powerful engine for growth. As a leading SEO and digital marketing agency, we are dedicated to driving results through cutting-edge strategies and innovative solutions. Our team of experts leverages the latest tools and techniques to boost your online visibility, attract targeted traffic, and convert visitors into loyal customers.
            </p>
            <div className="d-flex btn-hover">             
           <Link to='/contact'>
             <button className="banner-btn">Book Now</button>
           </Link>
            </div>
          </div>

        <div className="col-lg-5 mt-5 mt-lg-0">
        <form onSubmit={handleSubmit} >
            <div className="card border-0">
                <div className="card-body">
                  <h2 className='mb-3 text-center text-white'>Let's discuss your <span style={{color:"#0d96de"}}>project</span></h2>
                  <div className="row">
                    <div className="col-12 mb-3">
                    <input name="firstName" className='form-control' type="text"
                      value={formData.firstName}
                      placeholder='Full name' 
                      onChange={handleChange}
                      minLength="3"
                      required
                       />
                    </div>
                    <div className="col-12 mb-3">
                      <input name="email" className='form-control' type="email"
                        placeholder='Your email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                        />
                    </div>
                    <div className="col-12 mb-3">
                      <input name="phone" className='form-control' type="text" placeholder='Phone number' 
                      value={formData.phone}
                      onChange={handleChange}
                       pattern="^\d{0,11}$"
                       title="Enter numeric values only"
                      required
                      />
                    </div>
                    <div className="col-12 mb-3">
                    <select
                    name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select" aria-label="Default select example">
                        <option >Looking for...</option>
                        <option value="Seo Audit">Seo Audit</option>
                        <option value="Paid Ads">Paid Ads</option>
                        <option value="Email Marketing">Email Marketing</option>
                        </select>
                    </div>
                    <div className="col-12 mb-3">
                      <textarea 
                      name="message" 
                      className='form-control' 
                      placeholder='Message' 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      />
                    </div>

                  
                   <div className="col-lg-12 mb-4">
                    <ReCAPTCHA
                      sitekey="6LcWqYUqAAAAAGwQ1O-ZBoVlQOM5XPgpYJJ4TcE4"  
                      onChange={handleCaptchaChange}
                    />
                  </div>

                    <div className="col-12">
                    <button className='submit_btn'      type='submit' disabled={loading}
                    >
                    {loading ? "Submitting..." : " Get A Quote"}
                    </button>
                    </div>    

                    {success && (
                    <div className="col-lg-12 pt-3 ">
                      <h6 className="text-success text-center">
                        Message sent successfully. We will contact you soon!!
                      </h6>
                    </div>
                    
                  )}
                  
                    {error && (
                    <div className="col-lg-12 pt-3 ">
                      <h6 className="text-danger text-center">
                        {error}
                      </h6>
                    </div>
                  )}

                  </div>
                </div>
            </div>
        </form>
        </div>


          {/* <div className='col-lg-6 offset-lg-1 d-none'>
            <div className='banner-img position-relative'>
              <img src='homeimages/man.png' className='banner-img1' alt='man' />
              <img src='homeimages/img2.png' className='banner-img2' alt='keyboard' />
              <img src='homeimages/img3.png' className='banner-img3' alt='headphones' />
              <img src='homeimages/img4.png' className='banner-img4' alt='plant' />
              <img src='homeimages/img5.png' className='banner-img5' alt='cactus' />
              <img src='homeimages/img6.png' className='banner-img6' alt='switch' />
              <img src='homeimages/img7.png' className='banner-img7' alt='laptop' />
              <img src='homeimages/img8.png' className='banner-img8' alt='topframe' />
              <img src='homeimages/img9.png' className='banner-img9' alt='mat' />
              <img src='homeimages/img10.png' className='banner-img10' alt='books' />
              <img src='homeimages/img11.png' className='banner-img11' alt='penstand' />
              <img src='homeimages/img12.png' className='banner-img12' alt='table' />
              <img src='homeimages/img13.png' className='banner-img13' alt='tea' />
              <img src='homeimages/img1.png' className='banner-imgnew' alt='dustbin' />
            </div>

            <div className='full-bannerimg1'>
              <img src='frontendImg/main-banner-img.png' className='full-banner1 w-100' alt='man' />

            </div>
          </div> */}
        </div>




      </div>
    </div>
  )
}

export default Banner
