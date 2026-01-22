import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_URL;

const Contactsection = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);
  const [rawPhone, setRawPhone] = useState("");
  const [countryCode, setCountryCode] = useState("1");
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations (toast)
    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return;
    }
    if (!formData.lastName.trim()) {
      toast.error("Last name is required");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!rawPhone) {
      toast.error("Phone number is required");
      return;
    }
    if (!formData.subject) {
      toast.error("Please select a subject");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Message is required");
      return;
    }
    if (!captchaValue) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    setLoading(true);

    const formattedPhone = `+${countryCode}-${rawPhone.replace(countryCode, "")}`;

    try {
      await axios.post(`${BASE_URL}/contact`, {
        ...formData,
        phone: formattedPhone,
        captcha: captchaValue,
      });

      // GTM / DataLayer event — ONLY on success
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_type: "contact_us",
        form_position: "main_content",
      });

      toast.success("Message sent successfully!");
      navigate("/thank-you");

      setFormData(initialFormData);
      setRawPhone("");
      setCountryCode("91");
      setCaptchaValue(null);

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================== MAIN CONTACT FORM ================== */}
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
                          placeholder="Enter first name"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Last name</label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          required
                        />
                      </div>

                      {/* ✅ React Phone Input */}
                      <div className="col-md-6 mb-3">
                        <label>Phone number</label>
                        <PhoneInput
                          country="us"
                          enableSearch
                          value={rawPhone}
                          onChange={(value, country) => {
                            setRawPhone(value);
                            setCountryCode(country.dialCode);
                          }}
                          inputProps={{ required: true }}
                          inputStyle={{ width: "100%" }}
                        />
                      </div>

                      <div className="col-md-12 mb-3">
                        <label>Choose Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-select"
                          required
                        >
                          <option value="">Select Option</option>
                          <option value="Seo Audit">Seo Audit</option>
                          <option value="Paid Ads">Paid Ads</option>
                          <option value="Email Marketing">Email Marketing</option>
                          <option value="GA4 Analytics">GA4 Analytics</option>
                          <option value="GMB">GMB</option>
                          <option value="GTM">GTM</option>
                        </select>
                      </div>

                      <div className="col-md-12 mb-3">
                        <label>Write your message</label>
                        <textarea
                          name="message"
                          rows="4"
                          className="form-control"
                          value={formData.message}
                          placeholder="Write here..."
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
                        <button
                          type="submit"
                          className="black-button mt-3"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "SEND MESSAGE"}
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

              {/* RIGHT INFO (UNCHANGED) */}
              <div className="col-lg-4">
                <div className="contact-info-card text-start">
                  <h4>Hate Filling out Forms?</h4>
                  <hr />
                  <h6>Email</h6>
                  <Link to="mailto:info@whitehatseo.in">info@whitehatseo.in</Link>
                  <h6>Call</h6>
                  <a href="tel:+917018168269">+91-7018168269</a>
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
