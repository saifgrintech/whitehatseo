import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import Sidebar from '../../Sidebar';
import DashNav from '../../DashNav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FootDash from '../../FootDash';

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const EditFaq = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null); // Image state
    const [imagePreview, setImagePreview] = useState(''); // Image preview state
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [faqType, setFaqType] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchFaq = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/faqs/${id}`);
                const { heading, description, category, image } = response.data;
                setHeading(heading);
                setDescription(description);
                setFaqType(category);

                // Only set image preview if image exists
                if (image) {
                    setImagePreview(`${WEBSITE_URL}/faqs/${image}`);
                    setImage(image); // Keep the image URL if it exists
                } else {
                    setImagePreview('');
                    setImage(null); // Ensure null if no image
                }
            } catch (error) {
                setErrorMessage('Error fetching FAQ details. Please try again.');
            }
        };

        fetchFaq();
    }, [id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file); // Set the file to the state
        setImagePreview(URL.createObjectURL(file)); // Show preview of selected image
    };

    const handleFaqTypeChange = (e) => {
        setFaqType(e.target.value);
    };

    // Handle removing the image (clear the preview and set image state to null)
    const handleRemoveImage = () => {
        setImage(null);
        setImagePreview('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            // If an image is selected, append it
            if (image) {
                formData.append('image', image);
            } else {
                formData.append('image', null); // Send null if no image is selected
            }

            formData.append('heading', heading);
            formData.append('description', description);
            formData.append('category', faqType);

            await axios.put(`${BASE_URL}/faqs/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccessMessage('FAQ Updated Successfully!');
            setErrorMessage('');

            // Reset form fields after successful submission
            setImage(null);
            setImagePreview('');
            setHeading('');
            setDescription('');
            setFaqType('');
            e.target.reset(); // Reset form

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            setErrorMessage('Error updating FAQ. Please try again.');
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
            ['clean'],
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
    ];

    return (
        <>
            <div className="main_wrapper">
                <Sidebar />
                <div className="main_content">
                    <DashNav />
                    <div className="container-fluid mb-5 pb-5">
                        <div className="mt-3 mb-5 pb-4">
                            <div className="py-3">
                                <div className="container-fluid d-flex justify-content-between">
                                    <h4 className="mb-0">Edit FAQ</h4>
                                    <Link to="/faq-list" className="btn btn-warning btn-sm">All FAQs</Link>
                                </div>
                            </div>
                            <div className="bg-light">
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-wrap">
                                        <div className="col-md-8 col-12 px-2 mb-4 mb-md-0">
                                            <div className="bg-white p-4">
                                                <div className="mb-3">
                                                    <label className="form-label">FAQ Category</label>
                                                    <select
                                                        className="form-select"
                                                        value={faqType}
                                                        onChange={handleFaqTypeChange}
                                                        required
                                                    >
                                                        <option value="">Select type</option>
                                                        <option value="Search Engine Optimization">Search Engine Optimization</option>
                                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                                        <option value="Digital Marketing">Digital Marketing</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={heading}
                                                        onChange={(e) => setHeading(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Description</label>
                                                    <ReactQuill
                                                        theme="snow"
                                                        value={description}
                                                        onChange={setDescription}
                                                        modules={modules}
                                                        formats={formats}
                                                        id="description"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-white p-4 mb-4">
                                                <ul className="p-0" style={{ fontSize: '13px' }}>
                                                    <li className="mb-2"> <i className="fa-solid fa-signal"></i> Status : <b>Draft</b> <Link>Edit</Link></li>
                                                    <li className="mb-2"> <i className="fa-solid fa-eye"></i> Visibility : <b>Public</b> <Link>Edit</Link></li>
                                                    <li className="mb-2"> <i className="fa-solid fa-calendar"></i> Publish <b>Immediately</b> <Link>Edit</Link></li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4">
                                                <div className="mb-3">
                                                    <label className="form-label">Image</label>

                                                    {imagePreview && (
                                                        <div className="position-relative mb-3" style={{ width: '80px', height: '80px' }}>
                                                            <img
                                                                src={imagePreview}
                                                                alt="Preview"
                                                                className="img-fluid "
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover', marginBottom: '10px' }}
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={handleRemoveImage}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '-7px',
                                                                    right: '-6px',
                                                                    background: 'red',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '50%',
                                                                    cursor: 'pointer',
                                                                    padding: '1px 5px',
                                                                    fontSize: '10px',
                                                                }}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                    )}

                                                    <input
                                                        type="file"
                                                        id="image"
                                                        className="form-control"
                                                        onChange={handleImageChange}
                                                        accept="image/*"
                                                    />
                                                </div>

                                                <button type="submit" className="btn btn-primary rounded-0 mt-3">Update</button>

                                                {successMessage && <div className="alert text-success mt-3">{successMessage}</div>}
                                                {errorMessage && <div className="alert text-danger mt-3">{errorMessage}</div>}
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

export default EditFaq;
