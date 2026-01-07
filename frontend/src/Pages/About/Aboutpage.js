import React from "react";
import Aboutsection from "./Aboutsection";
import "./aboutsection.css"
import { Helmet } from "react-helmet-async";



const Aboutpage = () => {
    return (
      <>
          <Helmet>
          <title>About Us - WhiteHatSeo</title>
          <meta name="description" content="Learn more about WhiteHatSeo, our mission, and how we provide the best SEO and digital marketing services globally and locally." />
          <meta name="keywords" content="About WhiteHatSeo, SEO Company, Digital Marketing Agency" />
          <meta property="og:title" content="About Us - WhiteHatSeo" />
          <meta property="og:description" content="Get to know more about WhiteHatSeo and our expertise in SEO and digital marketing." />
          <link rel="canonical" href="https://whitehatseo.in/about" />
        </Helmet>

      <div>
        <Aboutsection />
      </div>

      </>
  
  
    )
  }
  
  export default Aboutpage