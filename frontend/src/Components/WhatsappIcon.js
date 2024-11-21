import React from 'react'
import { Link } from 'react-router-dom'

const WhatsappIcon = () => {
  return (
    <>
        <div className="whatsapp-icon">
            <Link to="https://wa.me/917018168269" target="_blank">
                <i className="fab fa-whatsapp"></i> 
            </Link>
        </div>

    </>
  )
}

export default WhatsappIcon