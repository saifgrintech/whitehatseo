import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";

// import Lightbox from 'react-awesome-lightbox';
// import 'react-awesome-lightbox/build/style.css';
import Footer from "../../Components/Footer";
import { Helmet } from "react-helmet-async";


const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;


const blogSeoData = {
  "digital-marketing-trends-in-2026-the-whitehatseo-guide": {
    title: "Digital Marketing Trends in 2026 | Whitehat SEO Guide",
    description:"Discover the top digital marketing trends for 2026, including AI SEO, search evolution, and growth strategies businesses must adopt to stay ahead.",
    canonical: "https://whitehatseo.in/blog/digital-marketing-trends-in-2026-the-whitehatseo-guide",
  },
  "mastering-ga4-in-2026-proactive-insights-and-privacy-first-analytics": {
    title: "Mastering in GA4 in 2026 | Whitehat SEO",
    description:"Learn how to master Google Analytics 4 in 2026 with proactive insights, privacy-first analytics strategies & data-driven decision making to grow your business.",
    canonical: "https://whitehatseo.in/blog/mastering-ga4-in-2026-proactive-insights-and-privacy-first-analytics",
  },
  "the-evolution-of-landing-pages-in-2026-a-whitehatseo-guide": {
    title: "The Evolution of Landing Pages in 2026 | Whitehat SEO",
    description:"Landing pages are evolving in 2026 with modern design trends, improved UX, personalization strategies, and optimization techniques that increase conversions.",
    canonical: "https://whitehatseo.in/blog/the-evolution-of-landing-pages-in-2026-a-whitehatseo-guide",
  },
  "solving-hreflang-issues-in-shopify-and-wordpress-the-2026-technical-seo-guide": {
    title: "Solving Hreflang Issues | 2026 SEO Guide | Whitehat SEO",
    description:"Improve multilingual SEO, avoid indexing errors, and strengthen global search visibility. Fix hreflang issues in Shopify and WordPress.",
    canonical: "https://whitehatseo.in/blog/solving-hreflang-issues-in-shopify-and-wordpress-the-2026-technical-seo-guide",
  },
  "is-seo-ranking-possible-in-4-weeks-the-2026-reality-check": {
    title: "Is SEO Ranking Possible in 4 Weeks? | WhitehatSEO",
    description:"It depends on the strategy you follow you can discover the SEO reality in 2026, realistic timelines, proven strategie & what results you can actually expect.",
    canonical: "https://whitehatseo.in/blog/is-seo-ranking-possible-in-4-weeks-the-2026-reality-check",
  },
  "how-to-improve-traffic-with-google-business-profile-in-2026": {
    title: "Improve Traffic with Google Business Profile | WhitehatSEO",
    description:"Increase website traffic in 2026 using Google Business Profile optimization, local SEO techniques &  practical tips to boost visibility and engagement.",
    canonical: "https://whitehatseo.in/blog/how-to-improve-traffic-with-google-business-profile-in-2026",
  },
};





const SingleBlog = () => {
  const { slug } = useParams(); // Get slug from the URL
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [blogContent, setBlogContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch(`${BASE_URL}/single-blog/slug/${slug}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setData(data);
        setBlogContent(data.description);

        // Assuming 'images' is an array in the API response
        if (data.images && data.images.length > 0) {
          setImages(data.images); // Set all images
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogContent();
  }, [slug]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blog`);
        if (!response.ok) {
          throw new Error("Failed to fetch latest news");
        }
        const data = await response.json();
        setNewsData(data); // Assuming the response is an array of news articles
        // console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);


  useEffect(() => {
    // Set image styles after content is rendered
    const adjustImageStyles = () => {
      const images = document.querySelectorAll('.blog_content img');
      if (images.length > 0) {
        images[0].style.width = '100%'; // Set first image to full width
        for (let i = 1; i < images.length; i++) {
          images[i].style.width = '50%'; // Set other images to 50%
        }
      }
    };

    adjustImageStyles();
  }, [blogContent]);


  const seo = blogSeoData[slug] || {
    title: `${data?.heading || "Blog"} | Whitehat SEO`,
    description:
      "Read expert blogs on SEO, digital marketing, and website growth by Whitehat SEO.",
    canonical: `https://whitehatseo.in/blog/${slug}`,
  };

   /*  SEO DEBUG LOGS */

  // useEffect(() => {
  //   console.log("Current Slug:", slug);
  //   console.log("SEO for this blog:", seo);
  //   console.log("All Blog SEO JSON:", blogSeoData);
  // }, [slug, seo]);


  return (
    <>
     <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:site_name" content="Whitehat SEO" />
      </Helmet>


      <Navbar />

      <div className="container3">
        <div className="header">
          <div className="box">
            <h2 className="fw-bold">Blog Details</h2>
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
      </div>

      <div className="blog_details py-5">
        <div className="container">
          <div className="row ">
            <div className="col-xl-8 col-lg-7 d-flex flex-column justify-content-center align-items-center  mb-5 mb-lg-0 ">
              {loading ?
                (<div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>) : error ? (<p>Error: {error}</p>) : (
                  <>
                    <h1>{data.heading}</h1>
                    <div className="blog_content" dangerouslySetInnerHTML={{ __html: blogContent }}></div>
                  </>
                )}
            </div>
            <div className="col-xl-4 col-lg-5 ps-lg-5">
              {/* <div className="gallery_view mb-5">
                <h4>Gallery</h4>
                <div className="d-flex flex-wrap">
                {images.map((image, index) => (
                <div className="col-sm-3 col-3 pe-2 p-0" key={index}>
                  <img
                    className="w-100 mb-2 "
                    src={`${WEBSITE_URL}/singleblogimg/${image}`}
                    alt={`Blog image ${index + 1}`}
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    style={{ cursor: 'pointer' }} 
                  />
                </div>
                ))}

{isOpen && (
        <Lightbox
          images={images.map((img) => `${WEBSITE_URL}/singleblogimg/${img}`)}
          onClose={() => setIsOpen(false)}
        />
      )}

                </div>
              </div> */}

              <div className="latest-news">
                <h4 className="mb-4">Latest News</h4>
                <div className="news-list">
                  {newsData.slice(0, 3).map((newsItem, index) => (
                    <Link to={`/blog/${newsItem.slug}`}
                      key={index}
                      className="news-item d-flex align-items-center  mb-4">

                      <img className="me-2 border rounded-2" src={`/blogimg/${newsItem.image}`} style={{ height: "60px", width: "60px", objectFit: "contain" }}
                       alt={newsItem.heading} />
                      <h6>{newsItem.heading}</h6>

                    </Link>
                  ))}
                </div>
              </div>


              <div className="book_consultation mt-5">
                <div className="card rounded-0">
                  <div className="card-title m-0">Ready to boost your website ranking</div>
                  <div className="card-body text-center">
                    <p>We have the most experienced teams who can help you boost your online presence.</p>
                    <Link to='/contact'><button className="book_btn" type="button">GET A FREE CONSULTATION</button></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleBlog;
