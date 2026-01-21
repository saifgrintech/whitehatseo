
import { Link } from 'react-router-dom'

const Banner = () => {
 
  return (
    <div className='main-banner'>

      <div className='animation'>

        <div className='shape1'>
          <img src='homeimages/shape1.png' className='shape1' alt='moon' />
        </div>

        <div className='shape3'>
          <img src='homeimages/shape3.svg' className='shape3' alt='circle' />
        </div>

        <div className='shape4'>
          <img src='homeimages/shape4.svg' className='shape4' alt='triangle' />
        </div>

        <div className='shape5'>
          <img src='homeimages/shape5.png' className='shape5' alt='zig-zag' />
        </div>

        <div className='shape6'>
          <img src='homeimages/shape6.svg' className='shape6' alt='traingle' />
        </div>

        <div className='shape7'>
          <img src='homeimages/shape7.svg' className='shape7' alt='cross' />
        </div>

        <div className="all-animation2">
          <img src='all-animations/all-animation2.svg' className='cross-img' alt='cross' />

        </div>

      </div>

      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <h1 className='text-capitalize'>Transforming Digital Visions into Reality with WhiteHatSeo</h1>
            <p>At WhiteHatSeo, we specialize in transforming your digital presence into a powerful engine for growth. As a leading SEO and digital marketing agency, we are dedicated to driving results through cutting-edge strategies and innovative solutions. Our team of experts leverages the latest tools and techniques to boost your online visibility, attract targeted traffic, and convert visitors into loyal customers.
            </p>
            <div className="d-flex btn-hover">             
           <Link to='/contact'>
             <button className="gradient-button" >Book a free consultation</button>
           </Link>
            </div>
          </div>

        <div className="col-lg-5 mt-5 mt-lg-0 text-center">
         
          <img src="/homeimages/banner3.png" className='w-100 hero_banner_img' alt="banner-image" />
         
        </div>
      </div>
      </div>

    </div>
  )
}

export default Banner
