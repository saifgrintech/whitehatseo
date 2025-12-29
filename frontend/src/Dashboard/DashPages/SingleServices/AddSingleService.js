import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";
import DashNav from "../../DashNav";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SmallCard from "../SmallCard";
import FootDash from "../../FootDash";

const BASE_URL = process.env.REACT_APP_URL;

const AddSingleService = () => {
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [features, setFeatures] = useState([
    { featureIcon: "", featureTitle: "", featureDesc: "" },
  ]);

  const [faqs, setFaqs] = useState([
  { faqTitle: "", faqDesc: "" }
]);


  // Function to handle image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImage((prev) => [...prev, ...files]); // Append new files to the existing state
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreview((prev) => [...prev, ...previews]); // Append new previews
  };

  // Function to remove an image
  const handleRemoveImage = (index) => {
    setImage((prev) => prev.filter((_, i) => i !== index)); // Remove the image from the state
    setImagePreview((prev) => prev.filter((_, i) => i !== index)); // Remove the preview from the state
  };

   // Handle feature changes
   const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][field] = value;
    setFeatures(updatedFeatures);
  };

  // Add a new feature row
  const handleAddFeature = () => {
    setFeatures([...features, { featureIcon: "", featureTitle: "", featureDesc: "" }]);
  };

  // Remove a feature row
  const handleRemoveFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };


  // Handle FAQ change
  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  // Add FAQ
  const handleAddFaq = () => {
    setFaqs([...faqs, { faqTitle: "", faqDesc: "" }]);
  };

  // Remove FAQ
  const handleRemoveFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };



  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append multiple files
      image.forEach((file) => {
        formData.append("images", file);
      });

      formData.append("heading", heading);
      formData.append("description", description);
      formData.append("features", JSON.stringify(features));
      formData.append("faqs", JSON.stringify(faqs));


      const response = await axios.post(`${BASE_URL}/single-service`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success
      setSuccessMessage("Single service created successfully!");
      setErrorMessage("");

      // Reset form fields after successful submission
      setImage([]);
      setImagePreview([]);
      setHeading("");
      setDescription("");
      setFeatures([{ featureIcon: "", featureTitle: "", featureDesc: "" }]);
      setFaqs([{ faqTitle: "", faqDesc: "" }]);

      // e.target.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Error creating service. Please try again.");
      }
      // setErrorMessage("Error creating service. Please try again.");
      setSuccessMessage("");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "audio", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "audio", 
    "video",
  ];

  return (
    <>
      <div className="main_wrapper">
        <Sidebar />

        <div className="main_content">
          <DashNav />
          <div className="container-fluid mt-3 pb-5 mb-5">
            <div className="py-3">
              <div className="container-fluid d-flex justify-content-between">
                <h4 className="mb-0">Create Single Service</h4>
                <Link to="/singleService-list" className="btn btn-warning btn-sm">
                  All Services
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit} className="serviceForm">
                <div className="d-flex">
                  <div className="col-md-8 px-2">
                    <div className="bg-white p-4">
                      <div className="mb-3">
                        <label htmlFor="heading" className="form-label">
                          Heading
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="heading"
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <ReactQuill
                          theme="snow"
                          value={description}
                          onChange={(content) => setDescription(content)}
                          modules={modules}
                          formats={formats}
                          id="description"
                        />
                      </div>

                      <h5>Features</h5>
                      {features.map((feature, index) => (
                        <div className="row mb-3 pb-2 border-bottom" key={index}>
                           <div className="col-12 py-2 d-flex align-items-center justify-content-between">
                            <span>({index+1})</span>
                            <div>
                            <button
                              type="button"
                              className="rounded-0 btn btn-danger btn-sm me-2"
                              onClick={() => handleRemoveFeature(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="rounded-0 btn btn-primary btn-sm "
                              onClick={handleAddFeature}
                            >
                              +
                            </button>
                           
                            </div>
                          </div>
                          <div className="col-md-5 mb-3">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Icon URL"
                              value={feature.featureIcon}
                              onChange={(e) =>
                                handleFeatureChange(index, "featureIcon", e.target.value)
                              }
                            />
                            <small className="text-secondary "><span className="text-danger">*</span> Use font awesome classes</small>
                          </div>
                          <div className="col-md-7 mb-3">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Title"
                              value={feature.featureTitle}
                              onChange={(e) =>
                                handleFeatureChange(index, "featureTitle", e.target.value)
                              }
                            />
                          </div>
                          <div className="col-12 mb-3">
                            <textarea
                              className="form-control"
                              placeholder="Description"
                              value={feature.featureDesc}
                              onChange={(e) =>
                                handleFeatureChange(index, "featureDesc", e.target.value)
                              }
                            />
                          </div>
                         
                        </div>
                      ))}


                      <h5 className="mt-4">FAQs</h5>

                      {faqs.map((faq, index) => (
                        <div className="row mb-3 pb-2 border-bottom" key={index}>
                          <div className="col-12 py-2 d-flex align-items-center justify-content-between">
                            <span>({index + 1})</span>
                            <div>
                              <button
                                type="button"
                                className="rounded-0 btn btn-danger btn-sm me-2"
                                onClick={() => handleRemoveFaq(index)}
                                disabled={faqs.length === 1}
                              >
                                -
                              </button>
                              <button
                                type="button"
                                className="rounded-0 btn btn-primary btn-sm"
                                onClick={handleAddFaq}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="col-12 mb-3">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="FAQ Title"
                              value={faq.faqTitle}
                              onChange={(e) =>
                                handleFaqChange(index, "faqTitle", e.target.value)
                              }
                            />
                          </div>

                          <div className="col-12 mb-3">
                            <textarea
                              className="form-control"
                              placeholder="FAQ Description"
                              value={faq.faqDesc}
                              onChange={(e) =>
                                handleFaqChange(index, "faqDesc", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      ))}



                    </div>
                  </div>

                  <div className="col-md-4 px-2">
                    <SmallCard />
                    <div className="bg-white p-4">
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label"> Image </label>
                        <div className="py-3 d-flex flex-wrap">
                          {imagePreview.map((preview, index) => (
                            <div key={index} style={{ position: "relative" }}>
                              <img
                                src={preview}
                                alt={`Preview ${index}`}
                                style={{
                                  height: "70px",
                                  width: "70px",
                                  objectFit: "cover",
                                  marginRight: "10px",
                                }}
                                className="img-fluid mb-3"
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                style={{
                                  position: "absolute",
                                  top: "-8px",
                                  right: '5px',
                                  background: "red",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                  padding: "1px 5px",
                                  fontSize: "10px",
                                }}
                              >
                                X
                              </button>
                            </div>
                          ))}
                        </div>
                        <input
                          className="form-control"
                          type="file"
                          id="image"
                          name="images"
                          onChange={handleImageUpload}
                          accept="image/*"
                          multiple
                          // required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary rounded-0 mt-3"
                      >
                        Submit
                      </button>
                      {successMessage && (
                        <h6 className="text-success mt-3">{successMessage}</h6>
                      )}
                      {errorMessage && (
                        <h6 className="text-danger mt-3">{errorMessage}</h6>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <FootDash />
        </div>
      </div>
    </>
  );
};

export default AddSingleService;
