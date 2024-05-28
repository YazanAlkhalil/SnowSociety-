import React from 'react'
import './AdvertWidget.css'
function AdvertWidget() {
  return (
    <div className='advertPage'>
    <div>
        <div className='header'>
            <h3>sponsored</h3>
            <p>Create ad</p>
        </div>
      <img
        width="100%"
        height='auto'
        alt='advert'
        style={{borderRadius: '0.75rem',margin: "0.75rem 0"}}
       src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-01/240117-staff-skin-care-routines-social-2c85d8.jpg'></img>
    </div>
    <div className='title'>
        <p>MikaCosmetics</p>
        <p>mikacosmetics.com</p>
    </div>
    <p>your pathway to stunning and immaculate beauty and made sure your skin is</p>
    </div>
  )
}

export default AdvertWidget
