import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../../Components/Navbar'
import Workslider from '../../Components/Workslider';
import Footer from '../../Components/Footer';
import Testimonials from '../Testimonials/Testimonials';
import { Link } from 'react-router-dom';
import Loader from "../../Components/Loader";

import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const ServiceSingle = () => {

  const initialFormData = {
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const { slug } = useParams(); // Get slug from the URL
  const [data, setData] =useState('');
  const [images, setImages] = useState([]);
  const [serviceContent, setServiceContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(null);


  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchServiceContent = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/single-service/slug/${slug}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setData(data);
        setServiceContent(data.description);
  
          // Assuming 'images' is an array in the API response
        if (data.images && data.images.length > 0) {
          setImages(data.images); // Set all images
        }
  
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchServiceContent();
  }, [slug]); 


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
    // setLoading(true);
    setFormError(null);

    try {
      // Send POST request to the server
      await axios.post(`${BASE_URL}/contact`, formData);

      // If successful, set success state and optionally reset form data
      setSuccess(true);
      setFormData(initialFormData); // Reset form data if needed
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      setFormError("Failed to send message");
      setTimeout(() => {
        setFormError("");
      }, 5000);
      console.error("Error sending message:", error);
    } finally {
      // setLoading(false);
    }
  };


  return (
    <div className='service_single'>
        <Navbar />

        <div className="container3">
        <div className="header">
          <div className="box">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-7 position-relative">
                    
                    {loading ? ( <p>Loading..</p>) : error ? (  <p className="text-danger">Error: {error}</p>  ) : (
                    <>
                      <h1 className="text-start">{data.heading}</h1>
                      <div className="blog_content text-start" dangerouslySetInnerHTML={{ __html: serviceContent }}></div>
                    
                    </>
                    )}
                    </div>
                    <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-1  d-flex flex-column justify-content-center">
                        <form onSubmit={handleSubmit} >
                            <div className="card border-0">
                                <div className="card-body">
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

                                    {success && (
                                    <div className="col-lg-12 py-3 ">
                                      <h6 className="text-success">
                                        Message sent successfully. We will contact you soon!!
                                      </h6>
                                    </div>
                                  )}
                                    {formError && (
                                    <div className="col-lg-12 py-3 ">
                                      <h6 className="text-danger">
                                       {formError}
                                      </h6>
                                    </div>
                                  )}

                                    <div className="col-12">
                                    <button className='submit_btn' type='submit'>Get Quote</button>
                                    </div>                                 
                                  </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="all-animation">
              <div className="all-animation1">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation1.png`}
                  className="circle-img"
                  alt="moon"
                />
              </div>

              <div className="all-animation2">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation2.svg`}
                  className="cross-img"
                  alt="cross"
                />
              </div>

              <div className="all-animation3">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation3.svg`}
                  className="circle-img"
                  alt="circle"
                />
              </div>

              <div className="all-animation4">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation4.svg`}
                  className="triangle-img"
                  alt="triangle"
                />
              </div>

              <div className="all-animation5">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation5.png`}
                  className="design1"
                  alt="zig-zag"
                />
              </div>

              <div className="all-animation6">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation6.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>

              <div className="all-animation7">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation7.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>

              <div className="all-animation8">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation8.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>
            </div>
          </div>
        </div>
        </div>


        <div className="features-section">
        <div className="container py-4">
          {/* <div className="box d-flex flex-column align-items-center justify-content-center">
            <h2>Our Featured Services </h2>
            <div className='bar'></div>
            <p>
              WHITEHATSEO agency can provide several strategic advantages for businesses looking to improve their online presence and drive more traffic to their websites.
            </p>
          </div> */}
        <div className="row align-items-center">
            <div className="col-lg-6">
            <div className="box d-flex flex-column align-items-center justify-content-center">
            <h1>Our Featured Services </h1>
            <div className='bar'></div>
            <p>
              WHITEHATSEO agency can provide several strategic advantages for businesses looking to improve their online presence and drive more traffic to their websites.
            </p>
          </div>
            </div>
            <div className="col-lg-6 mx-auto">
              { images.length > 0 ? <img className="w-100" src={`/singleserviceimg/${images[0]}`} alt="service_img" /> :  <img src={`${WEBSITE_URL}/homeimages/service.png`} className='w-100' alt="service_img" /> }                              
            </div>
            <div className="col-12 mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 py-3">
                    <div className="card position-relative">
                        <div className="d-flex flex-column ">
                        <div className="icons">
                            <i className="fa-solid fa-gear icons-inner"></i>
                        </div>

                        <div className="input">
                            <Link className="card-title">
                            Set Clear Objectives
                            </Link>
                            <p className="card-text mt-2">
                            Define your SMO goals, such as increasing brand awareness, driving website traffic, or improving customer engagement. Establish specific and measurable objectives to guide your SMO efforts.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6 py-3">
                    <div className="card position-relative">
                        <div className="d-flex flex-column">
                        <div className="icons">
                            <i className="fa-solid fa-envelope icons-inner"></i>
                        </div>

                        <div className="input">
                            <Link className="card-title">
                            Optimize Profiles
                            </Link>
                            <p className="card-text mt-2">
                            Add relevant keywords, concise descriptions, and consistent branding to your social media profiles to make them more effective. Improving online professionalism and enhancing your professional reputation.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6 py-3">
                    <div className="card position-relative">
                        <div className="d-flex flex-column">
                        <div className="icons2">
                            <i className="fa-solid fa-border-none icons-inner"></i>
                        </div>

                        <div className="input">
                            <Link className="card-title">
                            Content Strategy
                            </Link>
                            <p className="card-text mt-2">
                            Develop a content strategy that is in line with your goals and appeals to your target audience.Create engaging and shareable content, including articles, videos, infographics, and images.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6 py-3">
                    <div className="card position-relative">
                        <div className="d-flex flex-column">
                        <div className="icons2">
                            <i className="fa-solid fa-circle-info icons-inner"></i>
                        </div>

                        <div className="input">
                            <Link className="card-title">
                            Hashtags and Keywords
                            </Link>
                            <p className="card-text mt-2">
                            When posting on social media, do your research and include pertinent hashtags and phrases. By doing this, you can reach a larger audience and improve the discoverability of your material.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6 py-3">
                    <div className="card position-relative">
                        <div className="d-flex flex-column">
                        <div className="icons3">
                            <i className="fa-solid fa-cube icons-inner"></i>
                        </div>

                        <div className="input">
                            <Link className="card-title">
                            Identify Target Audience
                            </Link>
                            <p className="card-text mt-2">
                            Actively interact with your audience by answering their questions, comments, and messages. Four levels of segmentation that can help define your business's primary target audience, Geographic, demographic, psychographic and behavioral.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6 py-3">
                    <div className="card position-relative">
                        <div className="d-flex flex-column">
                        <div className="icons3">
                            <i className="fa-regular fa-bell icons-inner"></i>
                        </div>

                        <div className="input">
                            <Link className="card-title">
                            Engage with Your Audience
                            </Link>
                            <p className="card-text mt-2">
                            Actively interact with your audience by replying to their comments, mails, and mentions. Promote debate, pose inquiries, and express gratitude for user-generated content that is relevant to your brand.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
      </div>

        <div className="service_details ">
        <div className=" works">
            <div className="container">
               <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                <h2 className="">Our Works</h2>
                <div className="bar"></div>
               </div>
                <Workslider />
            </div>
        </div>
       </div>



        <Testimonials />

       <Footer />


    </div>
  )
}

export default ServiceSingle