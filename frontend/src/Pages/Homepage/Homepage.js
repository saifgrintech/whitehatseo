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
                <title>WhiteHatSEO - Best SEO and Digital Marketing Agency</title>
                <meta name="description" content="WhiteHatSEO is the best digital marketing agency which is offering digital marketing services such as SEO, PPC services in globally & locally." />
                <meta name="keywords" content="SEO, PPC, Digital Marketing, Online Marketing" />
                <meta property="og:title" content="WhiteHatSEO - Best SEO and Digital Marketing Agency" />
                <meta property="og:description" content="Welcome to the homepage of my website." />
                <link rel="canonical" href="https://whitehatseo.in" />
            </Helmet>

            <div className='full_home_page'>
                <Navbar />
                <Banner />
                <Cards />
                <Homesection />
                <Features />
                <Readytotalk />
                <div className='mt-5 pt-5 blogs'>
                    <div className='col-lg-6 col-md-8 mx-auto d-flex flex-column align-items-center justify-content-center '>
                        <h2>The News From Our Blog</h2>
                        <div className='bar'></div>
                        <p className='text-center'>Explore Whitehatseo's latest blog posts for insights, strategies, and expert tips to enhance your SEO and digital marketing efforts.</p>
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
                                            <Link target="_blank" to={`single-blog/${blog.slug}`}> <h3>{blog.heading}</h3></Link>
                                            <p>By Admin</p>
                                            <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                                            <Link
                                                target="_blank" to={`single-blog/${blog.slug}`}
                                            >Read more <i className='fa-solid fa-arrow-right'></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <Footer />




            </div>


        </>



    )
}

export default Homepage
