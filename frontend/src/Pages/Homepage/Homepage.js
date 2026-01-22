import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from './Banner'
import "./homepage.css"
import Cards from './Cards'
import Homesection from './Homesection'
import Features from './Features'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Readytotalk from '../../Components/Readytotalk'
import { Helmet } from 'react-helmet-async';
import ClientVideo from './ClientVideo';
import CaseStudySlider from './CaseStudySlider';
import Testimonials from '../Testimonials/Testimonials';


const BASE_URL = process.env.REACT_APP_URL;

const Homepage = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/blog`);
                setBlogs(response.data);
            } catch (error) {
                setError('Failed to fetch blogs');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);


    const stripHtmlTags = (str) => {
        if (!str) return "";
        return str.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, " ");
    };



    return (
        <>
            <Helmet>
                <title>Whitehat SEO Agency | Local & Technical SEO Experts</title>
                <meta name="description" content="We specialize in whitehat SEO techniques that follow Google guidelines and deliver sustainable rankings, quality traffic, and real business results." />
                <meta property="og:title" content="Whitehat SEO Agency | Local & Technical SEO Experts" />
                <meta property="og:description" content="We specialize in whitehat SEO techniques that follow Google guidelines and deliver sustainable rankings, quality traffic, and real business results." />
                <link rel="canonical" href="https://whitehatseo.in" />
            </Helmet>

            <div className='full_home_page'>
                <Navbar />
                <Banner />
                <Cards />
                <Homesection />
                <Features />
                <CaseStudySlider />
                 <Testimonials />

                <Readytotalk />
                <div className='mt-5 pt-5 blogs'>
                    <div className='col-lg-6 col-md-8 mx-auto d-flex flex-column align-items-center justify-content-center '>
                        <h2 >The News From Our Blog</h2>
                        <div className='bar'></div>
                        <p className='text-center'>Explore WhiteHatSeo's latest blog posts for insights, strategies, and expert tips to enhance your SEO and digital marketing efforts.</p>
                    </div>

                    <div className='container'>
                        <div className='row mt-5'>
                            {loading && <p>Loading...</p>}
                            {error && <p className="text-danger text-center">{error}</p>}
                            {!loading && !error && blogs.slice(0, 3).map((blog) => (
                                <div className='col-lg-4 col-md-6 mb-5' key={blog._id}>
                                    <div className='single-blog'>
                                        <img src={`/blogimg/${blog.image}`} className='img1' alt='blog' />
                                        <div className='content position-relative'>
                                            <div className='dates'>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}
                                            </div>
                                            <Link to={`blog/${blog.slug}`}> <h3 className='text-truncate' >{blog.heading}</h3></Link>
                                            <p>By Admin</p>
                                            <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                                            <Link to={`single-blog/${blog.slug}`}
                                            >Read more <i className='fa-solid fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* <ClientVideo /> */}
                
                <Footer />




            </div>


        </>



    )
}

export default Homepage
