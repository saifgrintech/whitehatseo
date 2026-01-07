import React from 'react'
import Blogsection from './Blogsection'
import { Helmet } from 'react-helmet-async'



const Blogpage = () => {
  return (
    <>
      <Helmet>
      <title>Blog - WhiteHatSeo</title>
      <meta name="description" content="Stay updated with the latest SEO and digital marketing trends and tips from WhiteHatSeo." />
      <meta name="keywords" content="SEO Blog, Digital Marketing Tips, Online Marketing Blog" />
      <meta property="og:title" content="Blog - WhiteHatSeo" />
      <meta property="og:description" content="Explore our blog for the latest updates and insights on SEO and digital marketing." />
      <link rel="canonical" href="https://whitehatseo.in/blog" />
      </Helmet>

      <div> 
        <Blogsection />
      </div>
    </>
  )
}

export default Blogpage
