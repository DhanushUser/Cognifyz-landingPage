import React from 'react'
import './overview.css'

const Overview = () => {
  return (
    <div className='overview mt-[30%]' id='program'>
        <div className="title flex justify-center items-center flex-col mb-5">
            <h3>Overview</h3>
        </div>

        <div className="over-about">
            <p>Our internship program runs for 3 months, starting in [Aug, 2024]. Interns will work closely with our development team on real-world projects and receive guidance from industry experts.</p>

            <div className="highlight my-7">
              <h4 className='border-b border-black'>Highlights of the Internship ;</h4>
              <p><b>Real-World Experience:</b> Work on live projects that impact our products and clients.</p>
              <p><b>Mentorship:</b> Receive guidance from experienced developers to enhance your skills.</p>
              <p><b>Professional Growth:</b> Gain insights into industry best practices and develop your portfolio.</p>
            </div>
        </div>
    </div>
  )
}

export default Overview