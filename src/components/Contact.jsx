import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from './Footer';

function Contact() {
    return (
        <div>
            <div className='flex bg-gray-100 pt-36 pb-14 mb-24'>
                <div className='bg-white ml-40 rounded-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/static/media/contact-illustration.2f6adc05.svg" className='px-10 pt-6' alt="" />
                    <div className='ml-6'>
                        <h1 className='mt-6 font-sans font-semibold'>Address</h1>
                        <p className='mt-3 font-sans text-sm'>NY State Thruway, New York, USA</p>

                        <h1 className='mt-6 font-sans font-semibold'>Phone</h1>
                        <p className='mt-3 font-sans text-sm'>+129290122122</p>

                        <h1 className='mt-6 font-sans font-semibold'>Email Address</h1>
                        <p className='mt-3 font-sans text-sm'>demo@demo.com</p>

                        <h1 className='mt-6 font-sans font-semibold'>Website</h1>
                        <p className='mt-3 font-sans text-sm'>https://redq.io</p>

                        <h1 className='mt-6 font-sans font-semibold'>Follow Us</h1>
                        <div className='flex mt-4 gap-6 mb-12'>
                            <FaFacebookSquare className='w-6 h-5 hover:scale-125 transition duration-300 cursor-pointer' />
                            <FaTwitter className='w-6 h-5 hover:scale-125 transition duration-300 cursor-pointer' />
                            <FaInstagram className='w-6 h-5 hover:scale-125 transition duration-300 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='bg-white ml-10 rounded-lg pt-10'>
                    <h1 className='font-sans font-bold text-2xl px-8'>How can we improve your experience?</h1>
                    <div className='px-8'>
                        <form action="">
                            <p className='mt-5 mb-2'>Name <span className='ml-[325px]'>Email</span></p>
                            <label htmlFor="Name"></label>
                            <input type="text" id='Name' name='Name' className='border rounded-md h-12 w-[350px]' placeholder='' />
                            <label htmlFor="Email"></label>
                            <input type="email" id='email' name='email' className='border rounded-md h-12 w-[350px] ml-5' placeholder='' />
                            <p className='mt-5 mb-2'>Subject</p>
                            <label htmlFor="Subject"></label>
                            <input type="text" id='Subject' name='Subject' className='border rounded h-12 w-full' placeholder='' />
                            <p className='mt-5 mb-2'>Description</p>
                            <label htmlFor="Description"></label>
                            <textarea name="Description" id="Description" className='border rounded-md h-32 w-full' placeholder=''></textarea>
                            <button className='bg-green-600 hover:bg-green-700 text-white mt-5 h-12 w-full font-medium rounded-md'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
