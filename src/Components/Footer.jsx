import React from 'react'

export default function Footer() {
    return (
        <div className="footer text-center text-white">

            <div className='d-flex justify-content-evenly align-items-center gap-3'>
                <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    <span className='fw-bolder fs-3'>LOCATION</span>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    <span className='fw-bolder fs-3'>AROUND THE WEB</span>
                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <div className='p-1 border border-1 rounded-circle border-white'> <i className="fa-brands fa-facebook-f"></i></div>
                        <div className='p-1 border border-1 rounded-circle border-white'> <i className="fa-brands fa-twitter"></i></div>
                        <div className='p-1 border border-1 rounded-circle border-white'> <i className="fa-brands fa-linkedin-in"></i></div>
                        <div className='p-1 border border-1 rounded-circle border-white'> <i class="fa-solid fa-globe mx-1 icon"></i></div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                    <span className='fw-bolder fs-3'>ABOUT FREELANCER</span>
                    <p>Freelance is a free to use, licensed  </p><p>Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className='footer-bottom py-3'>
                <p className='m-0'>© 2023 Route. All rights reserved.</p>
            </div>
        </div>
    )
}
