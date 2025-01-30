import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import Footer from './Footer';

function Manufactures() {
    return (
        <div>
            <div>
                <div className='pt-40 justify-self-center'>
                    <h1 className='font-sans font-bold text-green-600 text-4xl'>Manufacturers/Publishers</h1>
                    <p className='mt-4 ml-5'>Lorem ipsum dolor sit amet, consectetu eradipiscing elit.</p>
                </div>
                <div className='relative mt-10 justify-self-center'>
                    <BiSearchAlt className="absolute mt-4 ml-4 text-gray-500 h-5 w-5" />
                    <input type="text" id='Search' name='Search' className='border bg-gray-100 text-sm rounded-lg h-12 w-[800px]' placeholder='             Search manufacturers/publishers from here' />
                </div>
            </div>
            <div className='mt-24'>
                <div className='grid grid-cols-4 gap-7 justify-self-center'>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1410%2FPublisher-logo-2.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Too Cool Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1409%2FPublisher-logo-1.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Jeremy Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1408%2FPublisher-logo-3.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Wonder Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1407%2FPublisher-logo-4.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Super Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-7 justify-self-center mt-7'>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1406%2FPublisher-logo-5.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Poppy Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1405%2FPublisher-logo-6.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>ABC Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1560%2FPublisher-logo-8.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Be Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1562%2FPublisher-logo-9.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Odien Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-7 justify-self-center mt-7'>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1563%2FPublisher-logo-10.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Fancy Publication</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2054%2FGadget-logo1.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Apex tech</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2073%2FGadget-logo3.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>Infinity Gadget</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2072%2FGadget-logo2.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>VisionX</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-7 justify-self-center mt-7 mb-60'>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2065%2FMedicine-logo1.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>MediCure</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='h-28 w-80 shadow-md border flex'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2064%2FMedicine-logo2.png&w=1920&q=75" className='rounded-full w-16 h-16 my-5 ml-5 flex-shrink-0' alt="" />
                        <div className='ml-4'>
                            <h1 className='mt-6 font-sans font-medium text-lg hover:text-green-500 cursor-pointer'>HealTech</h1>
                            <div className='flex gap-4 mt-2'>
                                <FaFacebookSquare className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaInstagram className='w-5 h-6 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                                <FaYoutube className='w-7 h-10 pb-4 hover:text-green-500 hover:scale-105 transition duration-300 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Manufactures
