import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../Sidebar";
import DashNav from "../../DashNav";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SmallCard from "../SmallCard";
import FootDash from "../../FootDash";

const BASE_URL = process.env.REACT_APP_URL;

const EditSingleService = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([{ featureIcon: "", featureTitle: "", featureDesc: "" }]);
  const [faqs, setFaqs] = useState([
  { faqTitle: "", faqDesc: "" }
]);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/single-service/${id}`);
        const { images, heading, description, features, faqs } = response.data;


        const imagePaths = images.map((image) => `/singleserviceimg/${image}`);
        setImages(images);
        setImagePreviews(imagePaths);
        setHeading(heading);
        setDescription(description);

        // Set the fetched features or default to an empty feature if no features are available
        setFeatures(features.length > 0 ? features : [{ featureIcon: "", featureTitle: "", featureDesc: "" }]);
        // setFeatures( features || [{ featureIcon: "", featureTitle: "", featureDesc: "" }]);

        setFaqs(faqs?.length > 0 ? faqs : [{ faqTitle: "", faqDesc: "" }]);


      } catch (error) {
        console.error("Error fetching service data:", error);
        setErrorMessage("Error fetching service data. Please try again.");
      }
    };

    fetchServiceData();
  }, [id]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImagePaths = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...newImagePaths]);
    setImagePreviews((prev) => [...prev, ...newImagePaths]);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index) => {
    const removedImage = images[index];
    setRemovedImages((prev) => [...prev, removedImage]);

    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));

    const updatedUploadedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedUploadedFiles);
  };

  const handleFeatureChange = (index, key, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][key] = value;
    setFeatures(updatedFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, { featureIcon: "", featureTitle: "", featureDesc: "" }]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };


  const handleFaqChange = (index, field, value) => {
  const updatedFaqs = [...faqs];
  updatedFaqs[index][field] = value;
  setFaqs(updatedFaqs);
  };

  const addFaq = () => {
    setFaqs([...faqs, { faqTitle: "", faqDesc: "" }]);
  };

  const removeFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };


  /*---- Handle Submit ------*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => {
        formData.append("images", file);
      });

      formData.append("removedImages", JSON.stringify(removedImages));
      formData.append("heading", heading);
      formData.append("description", description);
      formData.append("features", JSON.stringify(features));
      formData.append("faqs", JSON.stringify(faqs));


      const response = await axios.put(`${BASE_URL}/single-service/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setSuccessMessage("Single service updated successfully!");
        setErrorMessage(null);
      }

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Error updating service. Please try again.");
      }
      // setErrorMessage(error.response?.data?.message || "An error occurred while updating the service.");
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

    <div className="main_wrapper">
      <Sidebar />
      <div className="main_content">
        <DashNav />
        <div className="container-fluid mt-3 pb-5 mb-5">
          <div className="py-3">
            <div className="container-fluid d-flex justify-content-between">
              <h4 className="mb-0">Edit Single Service</h4>
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

                    <div className="mb-3">
                    <label className="form-label">Features</label>
                      {features.map((feature, index) => (
                        <div key={index} className="row mb-3 pb-2 feature_fields border-bottom">
                         <div className="col-12 d-flex align-items-center justify-content-between mb-2">
                          <span>({index+1})</span>
                        <div>
                         <button
                            type="button"
                            className="rounded-0 btn btn-danger btn-sm me-2"
                            onClick={() => removeFeature(index)}
                          > -
                          </button>
                          <button type="button" className="rounded-0 btn btn-primary btn-sm me-2" onClick={addFeature}>
                            +                           
                          </button>
                        </div>

                          </div>
                          <div className="col-md-5 mb-2">
                          <input
                            type="text"
                            placeholder="Feature Icon"
                            className="form-control mb-2"
                            value={feature.featureIcon}
                            onChange={(e) => handleFeatureChange(index, "featureIcon", e.target.value)}
                          />
                          </div>
                          <div className="col-md-7 mb-2">
                          <input
                            type="text"
                            placeholder="Feature Title"
                            className="form-control mb-2"
                            value={feature.featureTitle}
                            onChange={(e) => handleFeatureChange(index, "featureTitle", e.target.value)}
                          />
                          </div>
                          <div className="col-12 mb-2">
                          <textarea
                            placeholder="Feature Description"
                            className="form-control"
                            value={feature.featureDesc}
                            onChange={(e) => handleFeatureChange(index, "featureDesc", e.target.value)}
                          ></textarea>
                          </div>
                         
                        
                        </div>
                      ))}
                    </div>

                    <div className="mb-3 mt-4">
                      <label className="form-label">FAQs</label>

                      {faqs.map((faq, index) => (
                        <div key={index} className="row mb-3 pb-2 border-bottom">
                          <div className="col-12 d-flex align-items-center justify-content-between mb-2">
                            <span>({index + 1})</span>
                            <div>
                              <button
                                type="button"
                                className="rounded-0 btn btn-danger btn-sm me-2"
                                onClick={() => removeFaq(index)}
                                disabled={faqs.length === 1}
                              >
                                -
                              </button>
                              <button
                                type="button"
                                className="rounded-0 btn btn-primary btn-sm"
                                onClick={addFaq}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="col-12 mb-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="FAQ Title"
                              value={faq.faqTitle}
                              onChange={(e) =>
                                handleFaqChange(index, "faqTitle", e.target.value)
                              }
                            />
                          </div>

                          <div className="col-12 mb-2">
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
                </div>

                <div className="col-md-4 px-2">
                  <SmallCard />
                  <div className="bg-white p-4">
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Images
                      </label>
                      <div className="py-3 d-flex flex-wrap">
                        {imagePreviews.map((preview, index) => (
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
                                right: "5px",
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
                      />
                    </div>

                    <button type="submit" className="btn btn-primary rounded-0 mt-3">
                      Update
                    </button>

                    {successMessage && <h6 className="text-success mt-3">{successMessage}</h6>}
                    {errorMessage && <h6 className="text-danger mt-3">{errorMessage}</h6>}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <FootDash />

      </div>
    </div>
  );
};

export default EditSingleService;
