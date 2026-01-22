import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

const BannerForm = () => {

  const initialFormData = {
    firstName: "",
    email: "",
    subject: "",
    message: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [rawPhone, setRawPhone] = useState("");
  const [countryCode, setCountryCode] = useState("1");

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.firstName || formData.firstName.trim().length < 3) {
    toast.error("Please enter a valid full name");
    return;
  }

  if (!formData.email) {
    toast.error("Please enter your email");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast.error("Please enter a valid email address");
    return;
  }

  if (!rawPhone) {
    toast.error("Please enter your phone number");
    return;
  }

  if (!formData.subject) {
    toast.error("Please select a subject");
    return;
  }

  if (!formData.message || formData.message.trim().length < 5) {
    toast.error("Please enter a message");
    return;
  }

  if (!captchaValue) {
    toast.error("Please complete the reCAPTCHA");
    return;
  }

  setLoading(true);
  setError(null);

  const formattedPhone = `+${countryCode}-${rawPhone.replace(countryCode, "")}`;

  try {
    await axios.post(`${BASE_URL}/contact`, {
      ...formData,
      phone: formattedPhone,
      captcha: captchaValue,
    });

    toast.success("Message sent successfully!");
    navigate("/thank-you");
    setFormData(initialFormData);
    setRawPhone("");

  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div className="card border-0" style={{ background: "#000" }}>
        <div className="card-body">
          <h2 className="mb-3 text-center text-white">
            Let's discuss your <span style={{ color: "#0d96de" }}>project</span>
          </h2>

          <div className="row">

            {/* Name */}
            <div className="col-12 mb-3">
              <input
                name="firstName"
                className="form-control"
                type="text"
                placeholder="Full name"
                value={formData.firstName}
                onChange={handleChange}
                minLength="3"
                required
              />
            </div>

            {/* Email */}
            <div className="col-12 mb-3">
              <input
                name="email"
                className="form-control"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone (React Phone Input 2) */}
            <div className="col-12 mb-3">
              <PhoneInput
                country="us"
                enableSearch
                value={rawPhone}
                onChange={(value, country) => {
                  setRawPhone(value);
                  setCountryCode(country.dialCode);
                }}
                inputProps={{
                  required: true,
                  name: "phone",
                }}
                inputStyle={{
                  width: "100%",
                  height: "45px",
                }}
              />
            </div>

            {/* Subject */}
            <div className="col-12 mb-3">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Looking for...</option>
                <option value="Seo Audit">Seo Audit</option>
                <option value="Paid Ads">Paid Ads</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="GA4 Analytics">GA4 Analytics</option>
                <option value="GMB">GMB (Google My Business)</option>
                <option value="GTM">GTM (Google Tag Manager)</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-12 mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Captcha */}
            <div className="col-lg-12 mb-4">
              <ReCAPTCHA
                sitekey="6LcWqYUqAAAAAGwQ1O-ZBoVlQOM5XPgpYJJ4TcE4"
                onChange={handleCaptchaChange}
              />
            </div>

            {/* Submit */}
            <div className="col-12">
              <button className="submit_btn" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Get A Quote"}
              </button>
            </div>

            {/* Success */}
            {success && (
              <div className="col-lg-12 pt-3">
                <h6 className="text-success text-center">
                  Message sent successfully. We will contact you soon!!
                </h6>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="col-lg-12 pt-3">
                <h6 className="text-danger text-center">{error}</h6>
              </div>
            )}

          </div>
        </div>
      </div>
    </form>
  );
};

export default BannerForm;
