import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from "react-router-dom";

const BannerForm = () => {

  const initialFormData = {
    firstName: "",
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

  const BASE_URL = process.env.REACT_APP_URL;


     const handleCaptchaChange = (value) => {
        setCaptchaValue(value); 
      };
    
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
          navigate("/thank-you");
          setFormData(initialFormData);
          
        } catch (error) {
          setError("Failed to send message");
          setTimeout(() => setError(null), 5000);
          console.error("Error sending message:", error);
        } finally {
          setLoading(false);
        }
      };

  return (
    <form onSubmit={handleSubmit} >
        <div className="card border-0" style={{background:"#000"}}>
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
                    <option value="GA4 Analytics">GA4 Analytics</option>
                    <option value="GMB">GMB (Google My Business)</option>
                    <option value="GTM">GTM (Google Tag Manager)</option>
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
  )
}

export default BannerForm