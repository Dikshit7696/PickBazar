import React, { useState } from 'react'
import Footer from './Footer'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


function Offers() {

    return (
        <div>
            <div className='bg-gray-200 py-32'>
                <h1 className='pt-20 text-3xl font-sans font-bold text-center'>Offers</h1>
                <div className='flex justify-self-center mt-4'>
                    <p className='hover:text-green-400 cursor-pointer'><Link className='nav-link' to='/'><FaHome className='inline mr-2 mb-1' />Home</Link></p>
                    <p className='text-gray-500'><IoIosArrowForward className='inline mx-4' />Offers</p>
                </div>
            </div>
            <div className='grid grid-cols-4 justify-between px-20 py-28 h-auto w-auto bg-gray-100 mb-28'>
                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F932%2Fconversions%2F8x2x-thumbnail.jpg&w=640&q=100" alt="" />
                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F931%2Fconversions%2F12x2x-thumbnail.jpg&w=640&q=100" alt="" />
                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F930%2Fconversions%2F15x2x-thumbnail.jpg&w=640&q=100" alt="" />
                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F929%2Fconversions%2F18x2x-thumbnail.jpg&w=640&q=100" alt="" />
                <div className='grid grid-cols-4'>
                    <div className='flex ml-4 h-14 py-4 pl-5 w-[275px] bg-white'>
                        <h1 className='text-lg font-sans font-medium'>FOO</h1>
                        <button className='ml-[162px] text-green-600 text-sm mt-1 font-sans font-medium'>COPY</button>
                    </div>
                    <div className='flex ml-[270px] h-14 py-4 pl-5 w-[275px] bg-white'>
                        <h1 className='text-lg font-sans font-medium'>EID12</h1>
                        <button className='ml-36 text-green-600 text-sm mt-1 font-sans font-medium'>COPY</button>
                    </div>
                    <div className='flex ml-[523px] h-14 py-4 pl-5 w-[275px] bg-white'>
                        <h1 className='text-lg font-sans font-medium'>HELLO15</h1>
                        <button className='ml-[120px] text-green-600 text-sm mt-1 font-sans font-medium'>COPY</button>
                    </div>
                    <div className='flex ml-[776px] h-14 py-4 pl-5 w-[275px] bg-white'>
                        <h1 className='text-lg font-sans font-medium'>BAZAR18</h1>
                        <button className='ml-[115px] text-green-600 text-sm mt-1 font-sans font-medium'>COPY</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Offers
