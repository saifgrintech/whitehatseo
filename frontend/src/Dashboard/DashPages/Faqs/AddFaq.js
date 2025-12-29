import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Sidebar from '../../Sidebar';
import DashNav from '../../DashNav';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FootDash from '../../FootDash';

const BASE_URL = process.env.REACT_APP_URL;

const AddFaq = () => {
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [faqType, setFaqType] = useState(''); // State for FAQ type
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleFaqTypeChange = (e) => {
    setFaqType(e.target.value); // Update faqType when selection changes
  };

  const handleRemoveImage = () =>{
    setImage('');
    setImagePreview('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('heading', heading);
      formData.append('description', description);
      formData.append('category', faqType); // Append faqType to form data

      await axios.post(`${BASE_URL}/faqs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setLoading(false);
      setSuccessMessage('Faq Created Successfully !!');
      setErrorMessage(''); // Clear any previous error message

      // Reset form fields after successful submission
      setImage('');
      setImagePreview('');
      setHeading('');
      setDescription('');
      setFaqType(''); // Reset faqType as well
      e.target.reset(); // Reset form fields

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);

    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setErrorMessage('Error creating faq. Please try again.');
      // setErrorMessage(error.message);
      setSuccessMessage(''); 

      // Hide error message after 5 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <>
      <div className="main_wrapper">
        <Sidebar />
        <div className="main_content ">
          <DashNav />
          <div className="container-fluid mb-5 pb-5">
            <div className='mt-3 mb-5 pb-4'>
              <div className="py-3">
                <div className="container-fluid d-flex justify-content-between">
                  <h4 className='mb-0'>Add FAQ</h4>
                  <Link to='/faq-list' className="btn btn-warning btn-sm">All Faqs </Link>
                </div>
              </div>
              <div className=' bg-light '>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-wrap">
                    <div className="col-md-8 col-12 px-2 mb-4 mb-md-0">
                      <div className='bg-white p-4'>
                        <div className="mb-3">
                          <label htmlFor="faqType" className="form-label">Faq Category</label>
                          <select
                            className="form-select"
                            aria-label="Select FAQ Category"
                            id="faqType"
                            value={faqType}
                            onChange={handleFaqTypeChange}
                            required
                          >
                            <option value="">Select Category</option>
                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="heading" className="form-label">Title</label>
                          <input
                            className='form-control'
                            type="text"
                            id="heading"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">Description</label>
                          <ReactQuill
                            theme='snow'
                            value={description}
                            onChange={(content) => setDescription(content)}
                            modules={modules}
                            formats={formats}
                            id="description"
                          />
                        </div>

                      </div>
                    </div>
                    <div className="col-md-4 col-12 px-2">
                      <div className="bg-white p-4 mb-4">
                        <ul className='p-0' style={{ fontSize: "13px" }}>
                          <li className='mb-2'> <i className="fa-solid fa-signal"></i> Status : <b>Draft</b> <Link>Edit</Link></li>
                          <li className='mb-2'> <i className="fa-solid fa-eye"></i> Visibility : <b>Public</b> <Link>Edit</Link></li>
                          <li className='mb-2'> <i className="fa-solid fa-calendar"></i> Publish <b>Immediately</b> <Link>Edit</Link></li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 mb-4">
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">Image (optional)</label>
                         
                          {imagePreview && (
                            <div className='position-relative mb-3'
                            style={{ width: '80px', height: '80px', }}>
                              <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom: '15px' }}
                              />

                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            style={{
                              position: "absolute",  top: "-7px", right: "-6px", background: "red",  color: "white", border: "none", borderRadius: "50%", cursor: "pointer", padding: "1px 5px", fontSize: "10px",
                            }}
                          >  X  </button>

                            </div>

                          )}
                                     
                          <input
                            className='form-control'
                            type="file"
                            id="image"
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                        </div>

                        <button 
                        type="submit" 
                        className="btn btn-primary rounded-0 mt-3"
                        disabled={loading}
                        >
                         {loading ? "Saving..." : "Save"}
                        </button>
                        {successMessage && <h6 className=" text-success mt-3">{successMessage}</h6>}
                        {errorMessage && <h6 className=" text-danger mt-3">{errorMessage}</h6>}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <FootDash />
        </div>
      </div>
    </>
  );
};

export default AddFaq;
