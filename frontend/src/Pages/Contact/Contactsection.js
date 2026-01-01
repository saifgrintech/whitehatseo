import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Contactsection = () => {

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 11) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); 
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
      navigate("/thank-you");
      setFormData(initialFormData);
      // setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setError("Failed to send message");
      setTimeout(() => setError(null), 5000);
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-section2 contact_us_form pb-5 d-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contactus-img">
                <img
                  src="homeimages/contact.png"
                  className="img1 w-100"
                  alt="contact-img"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4 mt-4">
                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        minLength={3}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-details">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="^\d{0,11}$"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                     
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-details">
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Write Your Message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <ReCAPTCHA
                      sitekey="6LcWqYUqAAAAAGwQ1O-ZBoVlQOM5XPgpYJJ4TcE4"  
                      onChange={handleCaptchaChange}
                    />
                  </div>

                  <div className="col-lg-12 mb-4">
                    <button
                      className="btn-purple1"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "SEND MESSAGE"}
                    </button>

                    {success && (
                      <div className="col-lg-12 py-3 ">
                        <h5 className="text-success text-center">
                          Message sent successfully. We will contact you soon!!
                        </h5>
                      </div>
                    )}
                  
                    {error && (
                      <div className="col-lg-12 py-3 ">
                        <h5 className="text-danger text-center">{error}</h5>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-wrapper py-5">
        
            <div className="container">
              <div className="contact-box">
                <div className="row g-0">

                  {/* LEFT FORM */}
                  <div className="col-lg-8">
                    <div className="contact-form-card text-start">
                      <h2 className="mb-4 fw-bold">Let's Discuss Your Project</h2>

                      <form onSubmit={handleSubmit}>
                        <div className="row">

                          <div className="col-md-6 mb-3">
                            <label>First name</label>
                            <input
                              type="text"
                              name="firstName"
                              className="form-control"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              minLength={3}
                            />
                          </div>

                          <div className="col-md-6 mb-3">
                            <label>Last name</label>
                            <input
                              type="text"
                              name="lastName"
                              className="form-control"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-md-6 mb-3">
                            <label>Email </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-md-6 mb-3">
                            <label>Phone number </label>
                            <input
                              type="tel"
                              name="phone"
                              className="form-control"
                              value={formData.phone}
                              onChange={handleChange}
                              pattern="^\d{0,11}$"
                              required
                            />
                          </div>

                          <div className="col-md-12 mb-3">
                            <label>Choose Subject </label>
                            {/* <input
                              type="text"
                              name="subject"
                              className="form-control"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            /> */}
                             <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="form-select" aria-label="Default select example">
                                <option >Select Option</option>
                                <option value="Seo Audit">Seo Audit</option>
                                <option value="Paid Ads">Paid Ads</option>
                                <option value="Email Marketing">Email Marketing</option>
                                <option value="GA4 Analytics">GA4 Analytics</option>
                                <option value="GMB">GMB (Google My Business)</option>
                                <option value="GTM">GTM (Google Tag Manager)</option>
                              </select>
                          </div>

                          <div className="col-md-12 mb-3">
                            <label>Write your message </label>
                            <textarea
                              name="message"
                              rows="4"
                              className="form-control"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-md-12 mb-3">
                            <ReCAPTCHA
                              sitekey="6LcWqYUqAAAAAGwQ1O-ZBoVlQOM5XPgpYJJ4TcE4"
                              onChange={handleCaptchaChange}
                            />
                          </div>

                          <div className="col-md-12">
                            {/* <button
                            className="btn-purple1"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? "Sending..." : "SEND MESSAGE"}
                          </button> */}
                          <button
                           type="submit"
                           className="black-button mt-3"
                           disabled={loading}
                           >{loading ? "Sending..." : "SEND MESSAGE"}
                           </button>
                          </div>

                          {error && (
                            <p className="text-danger mt-3">{error}</p>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* RIGHT INFO */}
                  <div className="col-lg-4">
                    <div className="contact-info-card text-start">
                      <h4>Hate Filling out Forms?</h4>
                      <hr />

                      <h6>Request a Quote</h6>
                      <Link target="_blank" rel="noopener noreferrer" to="mailto:info@whitehatseo.in" >info@whitehatseo.in</Link>


                      <h6>Call</h6>
                      <a href="tel:+917018168269"> +91-7018168269 </a>

                      <h6>Whatsapp</h6>
                        <a
                          href="https://wa.me/917018168269"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +91-7018168269
                        </a>

                      <h6>Visit Here</h6>
                      <p className="mb-3 text-white">A-818, 8th Floor, Bestech Business Tower, Mohali, Punjab 160062</p>

                     <Link to="/packages" class="flash-banner">
                      <div class="flash-banner-bg"></div>
                      <div class="flash-text">
                        <span class="sub-text">SEE OUR PACKAGES</span>
                      </div>
                      <div class="flash-lightning"></div>
                    </Link>




                    </div>
                  </div>

                </div>
              </div>
            </div>
      </div>


    </>
  );
};

export default Contactsection;
