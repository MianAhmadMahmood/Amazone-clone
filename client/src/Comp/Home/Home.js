import React from 'react'
 import './Home.css'
import Product from '../Product/Product'
const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
      <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home"
        />

<div className='home_row'>
  <Product
  id='1234558'
  title={'The lean startup'}
  price={28.99}
   image={'https://m.media-amazon.com/images/I/71cKVeRVjQL._AC_UL480_FMwebp_QL65_.jpg'}
   rating={5}/>

  <Product
  id='855574'
  title={'SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone'}
  price={50.99}
   image={'https://m.media-amazon.com/images/I/41vU1u8DZXL._AC_UY327_FMwebp_QL65_.jpg'}
   rating={4} />
  

</div> 

<div className='home_row'>
<Product
id='855579'
title={'ASUS VG248QG 24" G-SYNC Gaming Monitor 165Hz 1080p 0.5ms Eye Care with DP HDMI DVI,Black'}
price={99.99}
 image={'https://m.media-amazon.com/images/I/811fyhOgYML._AC_SX466_.jpg'}
 rating={2}/>

<Product
 id='855574'
title={'Geekman 3.5 Cu. Ft. Capacity Double-door Compact Fridge with Freezer and 7-Level Thermostat'}
price={299.99}
 image={'https://m.media-amazon.com/images/I/61x64u2sSiL._AC_SX569_.jpg'}
 rating={3}/>
<Product
id='855581'
title={'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming'}
price={299.99}
 image={'https://m.media-amazon.com/images/I/81HqVRRwp3L._SY466_.jpg'}
 rating={2}/>
</div> 

<div className='home_row'>
<Product
id='855582'
title={'Amazon Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Glacier White'}
price={799.99}
 image={'https://m.media-amazon.com/images/I/7116ea3BmTL._AC_SY300_SX300_.jpg'}
 rating={4}/>
</div> 

</div>
</div>
  )
}

export default Home
