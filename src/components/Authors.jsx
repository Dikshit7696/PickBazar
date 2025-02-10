import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

function Authors() {
    return (
        <div>
            <ScrollToTop />
            <div>
                <div className='pt-40 justify-self-center'>
                    <h1 className='font-sans font-bold text-green-600 text-4xl'>Search Our beloved authors</h1>
                    <p className='mt-4 ml-5'>Lorem ipsum dolor sit amet, consectetu eradipiscing elit.</p>
                </div>
                <div className='relative mt-10 justify-self-center'>
                    <BiSearchAlt className="absolute mt-4 ml-4 text-gray-500 h-5 w-5" />
                    <input type="text" id='Search' name='Search' className='border bg-gray-100 text-sm rounded-lg h-12 w-[800px]' placeholder='             Search manufacturers/publishers from here' />
                </div>
            </div>
            <div className='grid grid-cols-5 mt-20 gap-20 justify-self-center'>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1591%2FAuthor-img-800-%25283%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Kaity Lerry</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1593%2FAuthor-img-800-%25281%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Jacob Dilon</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1595%2FAuthor-img-800-%25289%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Dorian P Price</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1597%2FAuthor-img-800-%25282%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Kelly White</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1599%2FAuthor-img-800-%25287%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Jenifer Wickham</h1>
                </div>
            </div>
            <div className='grid grid-cols-5 mt-20 gap-20 justify-self-center'>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1601%2FAuthor-img-800-%25288%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Sharone C Stone</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1603%2FAuthor-img-800-%25284%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Kelton Benjamin</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1605%2FAuthor-img-800-%25286%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Jimmy P Bulard</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1607%2FAuthor-img-800-%25281%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Brandon T. Trigg</h1>
                </div>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1609%2FAuthor-img-800-%252810%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>Earnestine N. Pace</h1>
                </div>
            </div>
            <div className='grid grid-cols-5 mt-20 gap-20 justify-self-center mb-48'>
                <div className='h-[184px] w-[184px] bg-gray-100 rounded-full drop-shadow-lg'>
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1611%2FAuthor-img-800-%25285%2529.jpg&w=1920&q=75" className='rounded-full h-44 w-44 ml-1 mt-1' alt="" />
                    <h1 className='mt-8 ml-8'>James N. Almeida</h1>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Authors
