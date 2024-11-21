import React, { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar';
import axios from "axios";
import Footer from "../../Components/Footer";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Faq = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [faqs, setFaqs] = useState([]); // Store all fetched FAQs
  const [selectedTab, setSelectedTab] = useState("SEO Questions"); // Default tab

  // Fetch FAQs when the component mounts
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/faqs`);
        setFaqs(response.data); // Store fetched FAQ data
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setError("Failed to load FAQs.");
      }
    };
    fetchFaqs();
  }, []);


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
    setLoading(true);
    setError(null);

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
      setError("Failed to send message");
      setTimeout(() => {
        setError("");
      }, 5000);
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to map API category to tab name
  const mapCategoryToTab = (category) => {
    switch (category) {
      case "Search Engine Optimization":
        return "SEO Questions";
      case "Social Media Marketing":
        return "SMM Questions";
      case "Digital Marketing":
        return "Digital Marketing Questions";
      default:
        return "";
    }
  };

  // Filter FAQs by selected tab's category
  const filteredFaqs = faqs.filter((faq) => mapCategoryToTab(faq.category) === selectedTab);

  return (
    <>
      <div className='faq_page'>
        <Navbar />

        <div className='container3'>
          <div className='box'>
            <h2>FAQ</h2>

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

        <div className='faq_content'>
          <div className='container'>
            <h2 className="text-center">What Makes Us Different from Other SEO Companies?</h2>
            <p className="text-center">Whitehatseo helps increase a website’s search ranking on a search engine results page (SERP)...</p>

            <div className="row mt-5">
              <div className="col-lg-9 order-2 order-lg-1">
                <div className="tab-content" id="myTabContent">
                {/* SEO Tab Content */}
                <div className="tab-pane fade show active" id="seo-tab-pane" role="tabpanel" aria-labelledby="seo-tab" tabIndex="0">
                  <div className="accordion" id="accordionExample">
                    {filteredFaqs.map((faq) => (
                      <div key={faq._id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq._id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${faq._id}`}
                          >
                            {faq.heading}
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq._id}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p dangerouslySetInnerHTML={{ __html: faq.description }}></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SMM Tab Content */}
                <div className="tab-pane fade" id="smm-tab-pane" role="tabpanel" aria-labelledby="smm-tab" tabIndex="0">
                  <div className="accordion" id="accordionExampleSMM">
                    {filteredFaqs.map((faq) => (
                      <div key={faq._id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq._id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${faq._id}`}
                          >
                            {faq.heading}
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq._id}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExampleSMM"
                        >
                          <div className="accordion-body">
                            <p dangerouslySetInnerHTML={{ __html: faq.description }}></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Digital Marketing Tab Content */}
                <div className="tab-pane fade" id="digital-tab-pane" role="tabpanel" aria-labelledby="digital-tab" tabIndex="0">
                  <div className="accordion" id="accordionExampleDM">
                    {filteredFaqs.map((faq) => (
                      <div key={faq._id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq._id}`}
                            aria-expanded="true"
                            aria-controls={`collapse${faq._id}`}
                          >
                            {faq.heading}
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq._id}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExampleDM"
                        >
                          <div className="accordion-body">
                            <p dangerouslySetInnerHTML={{ __html: faq.description }}></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-3 order-1 order-lg-2">
              <ul className="faq_tabs nav nav-tabs mb-0 mb-lg-5 border-0 d-flex justify-content-center flex-row flex-lg-column " id="myTab" role="tablist">
              <li className="nav-item mb-4 d-flex align-items-center" role="presentation">
                <i className={`fa-solid fa-arrow-left ${selectedTab === "SEO Questions" ? 'color' : ''}`}  />
                <button
                  className="nav-link border-0 active"
                  id="seo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seo-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="seo-tab-pane"
                  aria-selected="true"
                  onClick={() => setSelectedTab("SEO Questions")}
                >
                  SEO Questions
                </button>
              </li>
              <li className="nav-item mb-4 d-flex align-items-center" role="presentation">
              <i  className={`fa-solid fa-arrow-left ${selectedTab === "SMM Questions" ? 'color' : ''}`}  />
                <button
                  className="nav-link border-0"
                  id="smm-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#smm-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="smm-tab-pane"
                  aria-selected="false"
                  onClick={() => setSelectedTab("SMM Questions")}
                >
                  SMM Questions
                </button>
              </li>
              <li className="nav-item mb-4 d-flex align-items-center" role="presentation">
              <i  className={`fa-solid fa-arrow-left ${selectedTab === "Digital Marketing Questions" ? 'color' : ''}`}  />
                <button
                  className="nav-link border-0 text-start"
                  id="digital-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#digital-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="digital-tab-pane"
                  aria-selected="false"
                  onClick={() => setSelectedTab("Digital Marketing Questions")}
                >
                  Digital Marketing Questions
                </button>
              </li>
            </ul>
              </div>
            </div>

            {/* Tab Navigation */}
            <ul className="d-none faq_tabs nav nav-tabs mb-0 mb-md-5 border-0 d-flex justify-content-center" id="myTab" role="tablist">
              <li className="nav-item mb-4 mb-md-0" role="presentation">
                <button
                  className="nav-link border-0 active"
                  id="seo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seo-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="seo-tab-pane"
                  aria-selected="true"
                  onClick={() => setSelectedTab("SEO Questions")}
                >
                  SEO Questions
                </button>
              </li>
              <li className="nav-item mb-4 mb-md-0" role="presentation">
                <button
                  className="nav-link border-0"
                  id="smm-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#smm-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="smm-tab-pane"
                  aria-selected="false"
                  onClick={() => setSelectedTab("SMM Questions")}
                >
                  SMM Questions
                </button>
              </li>
              <li className="nav-item mb-4 mb-md-0" role="presentation">
                <button
                  className="nav-link border-0"
                  id="digital-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#digital-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="digital-tab-pane"
                  aria-selected="false"
                  onClick={() => setSelectedTab("Digital Marketing Questions")}
                >
                  Digital Marketing Questions
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="d-none tab-content" id="myTabContent">
              {/* SEO Tab Content */}
              <div className="tab-pane fade show active" id="seo-tab-pane" role="tabpanel" aria-labelledby="seo-tab" tabIndex="0">
                <div className="accordion" id="accordionExample">
                  {filteredFaqs.map((faq) => (
                    <div key={faq._id} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq._id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${faq._id}`}
                        >
                          {faq.heading}
                        </button>
                      </h2>
                      <div
                        id={`collapse${faq._id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p dangerouslySetInnerHTML={{ __html: faq.description }}></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SMM Tab Content */}
              <div className="tab-pane fade" id="smm-tab-pane" role="tabpanel" aria-labelledby="smm-tab" tabIndex="0">
                <div className="accordion" id="accordionExampleSMM">
                  {filteredFaqs.map((faq) => (
                    <div key={faq._id} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq._id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${faq._id}`}
                        >
                          {faq.heading}
                        </button>
                      </h2>
                      <div
                        id={`collapse${faq._id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExampleSMM"
                      >
                        <div className="accordion-body">
                          <p dangerouslySetInnerHTML={{ __html: faq.description }}></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital Marketing Tab Content */}
              <div className="tab-pane fade" id="digital-tab-pane" role="tabpanel" aria-labelledby="digital-tab" tabIndex="0">
                <div className="accordion" id="accordionExampleDM">
                  {filteredFaqs.map((faq) => (
                    <div key={faq._id} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq._id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${faq._id}`}
                        >
                          {faq.heading}
                        </button>
                      </h2>
                      <div
                        id={`collapse${faq._id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExampleDM"
                      >
                        <div className="accordion-body">
                          <p dangerouslySetInnerHTML={{ __html: faq.description }}></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className='faq_contact'>
              <h3 className="mb-3">Ask Your Questions</h3>

              <form onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                        minLength="3"
                        required
                      />
                    </div>
                  </div>


                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
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
                        placeholder="Your phone number"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="^\d{0,11}$"
                        title="Enter numeric values only"
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

                  <div className="col-lg-12 mb-5">
                    <div className="form-details">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mb-3 text-centre">
                    <button
                      className="btn-purple1"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "SEND MESSAGE"}
                    </button>

                    {success && (
                      <div className="col-lg-12 py-3 ">
                        <h6 className="text-success">
                          Message sent successfully. We'll contact you soon!
                        </h6>
                      </div>
                    )}

                    {error && (
                      <div className="col-lg-12 py-3 ">
                        <h6 className="text-danger">{error}</h6>
                      </div>
                    )}
                  </div>
                </div>
              </form>

            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Faq;
