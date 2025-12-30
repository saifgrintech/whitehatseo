import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';


const BASE_URL = process.env.REACT_APP_URL;

// Utility function to strip HTML tags from a string
const stripHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "");
};


const PRIORITY_ORDER = [
  "search-engine-optimization",
  "local-seo",
  "social-media-marketing",
  "pay-per-click-ppc",
  "digital-marketing",
  "google-tag-manager-gtm",
  "google-analytics-4-ga4",
  "google-my-business-gmb"
];



const Servicessection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const fetchServices = async () => {
        //     try {
        //         const response = await axios.get(`${BASE_URL}/services`);
        //         setServices(response.data);
        //     } catch (error) {
        //         setError('Failed to fetch services');
        //         console.error('Error fetching services:', error);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        const fetchServices = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/services`);

                const sortedServices = [...response.data].sort((a, b) => {
                const indexA = PRIORITY_ORDER.indexOf(a.slug);
                const indexB = PRIORITY_ORDER.indexOf(b.slug);

                // both not in priority → keep original order
                if (indexA === -1 && indexB === -1) return 0;

                // only A is priority
                if (indexA !== -1 && indexB === -1) return -1;

                // only B is priority
                if (indexA === -1 && indexB !== -1) return 1;

                // both are priority → compare order
                return indexA - indexB;
                });

                setServices(sortedServices);
            } catch (error) {
                setError('Failed to fetch services');
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
         };



        fetchServices();
    }, []);

    return (
        <>
            <div className='servicespage'>
                <Navbar />
                <div className='container3'>
                    <div className='header'>
                        <div className='box'>
                            <h1 className='mb-0'>Services</h1>

                            <div className="all-animation">

                                <div className="all-animation1">
                                    <img src='all-animations/all-animation1.png' className='circle-img' alt='moon' />

                                </div>

                                <div className="all-animation2">
                                    <img src='all-animations/all-animation2.svg' className='cross-img' alt='cross' />

                                </div>

                                <div className="all-animation3">
                                    <img src='all-animations/all-animation3.svg' className='circle-img' alt='circle' />

                                </div>

                                <div className="all-animation4">
                                    <img src='all-animations/all-animation4.svg' className='triangle-img' alt='triangle' />
                                </div>

                                <div className="all-animation5">
                                    <img src='all-animations/all-animation5.png' className='design1' alt='zig-zag' />

                                </div>

                                <div className="all-animation6">
                                    <img src='all-animations/all-animation6.svg' className='triangle3' alt='triangle' />

                                </div>

                                <div className="all-animation7">
                                    <img src='all-animations/all-animation7.svg' className='triangle3' alt='triangle' />

                                </div>

                                <div className="all-animation8">
                                    <img src='all-animations/all-animation8.svg' className='triangle3' alt='triangle' />

                                </div>


                            </div>


                        </div>
                    </div>
                </div>

                <div className='services-section py-5'>
                    <div className='container'>
                        <h2 className='text-center mb-5'>We provide the necessary services to you</h2>
                        <div className='row justify-content-center'>
                            {loading && (
                                <div className="spinner-grow text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            )}

                            {error && <p className="text-danger text-center w-100" style={{maxWidth:"100%"}}>{error}</p>}
                            {!loading && services.map((service) => (
                                <div className='col-lg-4 col-sm-6 mb-4' key={service._id}>
                                    <div className='box h-100'>
                                        <img src={`/serviceimg/${service.image}`} className='img1' alt={service.title} />
                                        <h3><Link to={`/services/${service.slug}`}>{service.title}</Link></h3>
                                        {/* <p dangerouslySetInnerHTML={{ __html : service.description}}/> */}
                                        <p className='m-0'>{stripHtmlTags(service.description)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Servicessection;

