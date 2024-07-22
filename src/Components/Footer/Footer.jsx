import React from 'react'
import logo from '../../assets/cognifyz-1.png'
import insta from '../../assets/insta.gif'
import './footer.css'

const Footer = () => {
  return (
    <div className='bg-[#c2c3d7] flex justify-between'>
      
      <div className="title p-3">
            <img width={100} src={logo} alt="" />
            <p className='text-[13px]  text-[#000]'>copyright &copy; 2024</p>
            <p className='text-[13px]   text-[#000]'>Icons8.com</p>
      </div>

      <div className="icons  mt-10 mr-5">
        <div className='flex justify-evenly'>
        <span><img width="28" height="28" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></span>
        <span><img width="28" height="28" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></span>
        <span><img width="28" height="28" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github"/></span>
        </div>
        <div className='text-[14px]'>
            <p>Check out our social links</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer