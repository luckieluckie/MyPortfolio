import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <a href="https://github.com/luckieluckie" target="_blank" rel="noreferrer" className='social-icon'>
                    <img src="/assets/github.svg" alt="Github" className='w-1/2 h-1/2' />
                </a>
                <a href="https://linkedin.com/in/aayush-srivastava-b7b18030b/" target="_blank" rel="noreferrer" className='social-icon'>
                    <img src="/assets/linkedin.png" alt="LinkedIn" className='w-1/2 h-1/2' />
                </a>
                <a href="https://instagram.com/__zolson__" target="_blank" rel="noreferrer" className='social-icon'>
                    <img src="/assets/instagram.svg" alt="Instagram" className='w-1/2 h-1/2' />
                </a>
            </div>
            <p className='text-white'>© 2024 Aayush. All rights reserved.</p>
        </section>
    )
}

export default Footer