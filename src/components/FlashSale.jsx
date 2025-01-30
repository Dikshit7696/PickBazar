import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Footer from './Footer';

function FlashSale() {
    return (
        <div>
            <div className='bg-gray-200 py-32'>
                <h1 className='pt-20 text-3xl font-sans font-bold text-center'>Available Flash Sale</h1>
                <div className='flex justify-self-center mt-4'>
                    <p className='hover:text-green-400 cursor-pointer'><Link className='nav-link' to='/'><FaHome className='inline mr-2 mb-1' />Home</Link></p>
                    <p className='text-gray-500'><IoIosArrowForward className='inline mx-4' />Available Flash Sale</p>
                </div>
            </div>
            <div className='flex py-20 bg-gray-50 mb-24 justify-between px-2'>
                <div className=''>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2289%2FGroup-1000003746.png&w=640&q=100" className='rounded-md w-[490px] h-[278px]' alt="" />
                        <h1 className='font-sans font-medium text-lg mt-5'>Limited-Time Offer: Act Fast!<BsFire className='inline ml-3 text-orange-500 mb-1' /></h1>
                        <p className='font-sans font-medium'>Offer Till : <span className='font-normal'>31 Oct 2024 - 29 May 2025</span></p>
                        <p className='font-sans font-medium'>Campaign status : <span className='font-normal'>On going</span></p>
                        <p className='font-sans font-medium'>Campaign type on : <span className='font-normal'>Percentage</span></p>
                        <p className='font-sans font-medium'>Deals rate : <span className='font-normal'>50</span></p>
                </div>
                <div className=''>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2285%2F2-92206549.png&w=640&q=100" className='rounded-md w-[490px] h-[278px]' alt="" />
                        <h1 className='font-sans font-medium text-lg mt-5'>Limited time discounts.</h1>
                        <p className='font-sans font-medium'>Offer Till : <span className='font-normal'>25 Dec 2024 - 12 June 2025</span></p>
                        <p className='font-sans font-medium'>Campaign status : <span className='font-normal'>On going</span></p>
                        <p className='font-sans font-medium'>Campaign type on : <span className='font-normal'>Fixed Rate</span></p>
                        <p className='font-sans font-medium'>Deals rate : <span className='font-normal'>10</span></p>
                </div>
                <div className=''>
                    <img src="https://img.freepik.com/free-vector/gradient-flash-sale-background_23-2149027975.jpg?t=st=1738217137~exp=1738220737~hmac=6291e3e5cbea47cafe3b73aa73550426cabc312c7898f0b3d7d5117f1e3f0eac&w=996" className='rounded-md w-[490px] h-[278px]' alt="" />
                        <h1 className='font-sans font-medium text-lg mt-5'>Limited time discounts.</h1>
                        <p className='font-sans font-medium'>Offer Till : <span className='font-normal'>08 Feb 2024 - 18 Sep 2025</span></p>
                        <p className='font-sans font-medium'>Campaign status : <span className='font-normal'>On going</span></p>
                        <p className='font-sans font-medium'>Campaign type on : <span className='font-normal'>Fixed Rate</span></p>
                        <p className='font-sans font-medium'>Deals rate : <span className='font-normal'>70</span></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FlashSale
