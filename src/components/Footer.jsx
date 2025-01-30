import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdSend } from "react-icons/io";

function Footer() {
    return (
        <div>
            <div className='flex'>
                <div className=''>
                    <Link className='nav-link' to='/'><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" className="ml-10 mr-8 mt-2 h-7 w-36" alt="" /></Link>
                    <h1 className='ml-10 mt-8'>NY State Thruway, New York, USA</h1>
                    <p className='ml-10 mt-8'>demo@demo.com</p>
                    <p className='ml-10 mt-1'>+129290122122</p>
                    <div className='flex mt-4 gap-3 ml-10 text-green-500'>
                        <FaFacebookSquare className='w-7 h-6 hover:scale-125 transition duration-300 cursor-pointer' />
                        <FaTwitter className='w-7 h-6 hover:scale-125 transition duration-300 cursor-pointer' />
                        <FaInstagram className='w-7 h-6 hover:scale-125 transition duration-300 cursor-pointer' />
                    </div>
                </div>
                <div className='mt-2 ml-28'>
                    <h1 className='font-medium font-sans'>Explore</h1>
                    <ul className='mt-8'>
                        <li className=''>Shops</li>
                        <li className='mt-4'>Authors</li>
                        <li className='mt-4'>Flash Deals</li>
                        <li className='mt-4'>Coupon</li>
                    </ul>
                </div>
                <div className='mt-2 ml-32'>
                    <h1 className='font-medium font-sans'>Customer Service</h1>
                    <ul className='mt-8'>
                        <li>FAQ & Helps</li>
                        <li className='mt-4'>Vendor Refund Policies</li>
                        <li className='mt-4'>Customer Refund Policies</li>
                    </ul>
                </div>
                <div className='mt-2 ml-32'>
                    <h1 className='font-medium font-sans'>Our Information</h1>
                    <ul className='mt-8'>
                        <li>Manufacturers</li>
                        <li className='mt-4'>Privacy Policies</li>
                        <li className='mt-4'>Terms & Conditions</li>
                        <li className='mt-4'>Contact Us</li>
                    </ul>
                </div>
                <div className=' ml-32'>
                    <h1 className='font-medium font-sans text-2xl'>Subscribe Now</h1>
                    <p className='mt-8'>Subscribe your email for newsletter and <br />featured news based on your interest</p>
                    <div className='mt-8'>
                        <label htmlFor="Email Address" className=''></label>
                        <input type="email" id='email' name='email' className='font-sans text-sm rounded-l-md border-y border-l w-52 bg-gray-50 h-14' placeholder='      Write your email here'required />
                        <button className=' h-14 w-14 bg-gray-50 pb-[21px] mt-0.5 rounded-r-md border-y border-r'><IoMdSend className='ml-5 mt-[18px] h-5 w-5'/></button>
                    </div>
                </div>
            </div>
            <h1 className='ml-10 mt-20 mb-10 text-sm'>©2025 <span className='font-medium'>Pickbazar</span>. Copyright © REDQ. All rights reserved worldwide. <span className='font-semibold'>REDQ</span></h1>
        </div>
    )
}

export default Footer