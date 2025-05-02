import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_URL;

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
      <div className="contact-section2 contact_us_form pb-5">
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
                      sitekey="6LcWqYUqAAAAAGwQ1O-ZBoVlQOM5XPgpYJJ4TcE4"  // Replace with your site key
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
    </>
  );
};

export default Contactsection;
