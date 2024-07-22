import React from 'react'
import './qua.css'

const Qualifi = ({setIsContactVisible}) => {


  const openForm = ()=>{
    setIsContactVisible(true);
  }

  return (
    <div className='qualify' id='about'>
        <div className="title flex justify-center items-center flex-col mb-5">
            <h3>Qualification</h3>
        </div>

        <div className="row mb-[60px]">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 place-items-center'>
            <div className='column one lg:w-[300px] lg:mx-2 md:w-[80%] sm:md:w-[100%] bg-pink-200 p-3 rounded mb-3'>
              <div className="flex place-content-center  mb-3">
                <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
              </div>
              <p>Proficiency in HTML, CSS, and JavaScript.</p>
            </div>
            <div className='column lg:w-[300px] mx-2 md:w-[80%] sm:md:w-[100%] bg-pink-200 p-3 rounded mb-3'>
              <div className="flex place-content-center  mb-3">
                <img width="48" height="48" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/angularjs.png" alt="angularjs"/>
              </div>
              <p>Familiarity with at least one front-end framework (e.g., React, Angular).</p>
            </div>
            <div className='column two lg:w-[300px] mx-2 md:w-[80%] sm:md:w-[100%] bg-pink-200 p-3 rounded mb-3'>
                <div className="flex place-content-center  mb-3">
                  <img width="48" height="48" src="https://img.icons8.com/fluency/48/source-code.png" alt="source-code"/>
                </div>
                <p>Strong problem-solving skills and a passion for web development.</p>
            </div>
            
          </div>
        </div>

        

        <div className='flex justify-center items-center mb-[50px]'>
          <button onClick={openForm} className='px-2 text-white rounded bg-pink-500 py-1 my-2 text-[17px] text-center'>Apply Now<i className='bx bx-right-arrow-alt'></i></button> 
        </div>
    </div>
  )
}

export default Qualifi