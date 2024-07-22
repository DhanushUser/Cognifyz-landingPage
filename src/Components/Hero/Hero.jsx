import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero flex flex-col justify-center items-center mt-[25vh] mb-[100px]' id='home'>
      <div className="hero-details ">
        <div className="bg"></div>
        <h1 className='text-3xl font-[550]'>Welcome to <span className='text-3xl font-[550] text-pink-500'>Cognifyz Technologies !</span></h1>
        <p className='text-[17px]'>we are offering a web developer internship program at our company. </p>

       <a href="#program"> <button className='px-2 rounded bg-pink-500 py-1 my-2 text-[17px] text-center'>Read more<i className='bx bx-right-arrow-alt'></i></button></a>
      </div>
    </div>
  )
}

export default Hero