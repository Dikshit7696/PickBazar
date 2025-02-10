import React, { useState } from 'react';
import { BsBagCheckFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div>
            <div className="text-center">
                <button className="bg-green-500 hover:bg-green-600 h-24 w-24 text-white rounded-l-md fixed left-[94%] pt-1" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-center flex-col">
                        <div className="flex items-center font-sans">
                            <BsBagCheckFill />
                            <h1 className="ml-[5px] font-sans font-semibold">1 Item</h1>
                        </div>
                        <h1 className="mt-2 rounded-md bg-white h-10 w-16 pt-2 font-sans font-semibold text-green-500">$0.00</h1>
                    </div>
                </button>
            </div>
            <div className="relative">
                <div
                    className={`fixed top-[12%] right-0 z-50 h-full pt-4 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800 shadow-lg 
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <h5 id="drawer-right-label" className="flex items-center font-sans text-green-500 text-lg ml-4">
                        <BsBagCheckFill className="text-2xl" />
                        <h1 className="ml-2 font-semibold">1 Item</h1>
                    </h5>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-green-500 hover:text-white rounded-full text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                        onClick={() => setIsOpen(false)}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <hr className='mt-4' />
                    <div className='bg-gray-20 h-28 flex mt-4'>
                        <div className='bg-gray-200 h-24 rounded-full w-7 ml-6'>
                            <button onClick={increaseQuantity} className='mt-3'><FiPlus /></button>
                            <h1 className='mt-1'>{quantity}</h1>
                            <button onClick={decreaseQuantity} className='mt-2'><FiMinus /></button>
                        </div>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75" className='w-16 h-16 my-4 mx-6' alt="" />
                        <div className='my-2'>
                            <p className='font-sans font-semibold'>Baby Spinach</p>
                            <p className='font-sans font-semibold text-green-500 my-1.5'>$0.00</p>
                            <p className='text-sm'>{quantity} X 1Pfund</p>
                        </div>
                        <div className='flex ml-5'>
                            <p className='font-sans font-semibold my-9'>$0.00</p>
                            <button className='mt-9 h-6 w-6 mx-3 hover:bg-green-500 rounded-full hover:text-red-500'>
                                <RxCross2 className='ml-1' />
                            </button>
                        </div>
                    </div>
                    <hr className='' />
                    <div className='bg-gray-20 h-28 flex mt-4'>
                        <div className='bg-gray-200 h-24 rounded-full w-7 ml-6'>
                            <button onClick={increaseQuantity} className='mt-3'><FiPlus /></button>
                            <h1 className='mt-1'>{quantity}</h1>
                            <button onClick={decreaseQuantity} className='mt-2'><FiMinus /></button>
                        </div>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75" className='w-16 h-16 my-4 mx-6' alt="" />
                        <div className='my-2'>
                            <p className='font-sans font-semibold'>Baby Spinach</p>
                            <p className='font-sans font-semibold text-green-500 my-1.5'>$0.00</p>
                            <p className='text-sm'>{quantity} X 1Pfund</p>
                        </div>
                        <div className='flex ml-5'>
                            <p className='font-sans font-semibold my-9'>$0.00</p>
                            <button className='mt-9 h-6 w-6 mx-3 hover:bg-green-500 rounded-full hover:text-red-500'>
                                <RxCross2 className='ml-1' />
                            </button>
                        </div>
                    </div>
                    <hr className='' />
                    <button className="bg-green-500 hover:bg-green-600 bg-fixed rounded-3xl w-[365px] ml-3 h-14 mt-96 flex items-center justify-between shadow-md">
                        <span className="text-white font-semibold pl-5">Checkout</span>
                        <span className="text-green-500 bg-white rounded-3xl font-semibold px-4 py-3 mr-1">$0.00</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
