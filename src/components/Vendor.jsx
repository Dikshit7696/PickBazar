import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Vendor() {
    return (
        <div>
            <div className='bg-gray-200 py-32'>
                <h1 className='pt-20 text-3xl font-sans font-bold text-center'>Vendor Refund Policy</h1>
                <div className='flex justify-self-center mt-4'>
                    <p className='hover:text-green-400 cursor-pointer'><Link className='nav-link' to='/'><FaHome className='inline mr-2 mb-1' />Home</Link></p>
                    <p className='text-gray-500'><IoIosArrowForward className='inline mx-4' />Vendor Refund Policy</p>
                </div>
            </div>
            <div className='mt-20 mb-48 mx-10 justify-self-center'>
                <img src="https://pickbazar-react.vercel.app/_next/static/media/no-result.b574bcc9.svg" alt="" />
                <h1 className='text-xl text-center font-sans font-semibold my-10 text-blue-800'>Sorry, No FAQs Found :(</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Vendor
