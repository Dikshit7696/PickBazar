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
                <button
                    className="bg-green-500 hover:bg-green-600 h-24 w-24 text-white rounded-l-md fixed left-[94%] pt-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center flex-col">
                        <div className="flex items-center font-sans">
                            <BsBagCheckFill />
                            <h1 className="ml-[5px] font-sans font-semibold">{quantity} Item</h1>
                        </div>
                        <h1 className="mt-2 rounded-md bg-white h-10 w-16 pt-2 font-sans font-semibold text-green-500">$0.00</h1>
                    </div>
                </button>
            </div>
            <div className="relative">
                <div
                    className={`fixed top-[12%] right-0 z-50 h-full bg-white w-96 dark:bg-gray-800 shadow-lg flex flex-col transition-transform
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-4 flex justify-between items-center sticky top-0 bg-white z-10">
                        <h5 className="flex items-center font-sans text-green-500 text-lg">
                            <BsBagCheckFill className="text-2xl" />
                            <h1 className="ml-2 font-semibold">{quantity} Item</h1>
                        </h5>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-green-500 hover:text-white rounded-full text-sm w-8 h-8 flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <RxCross2 />
                        </button>
                    </div>

                    <hr />
                    <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-140px)]">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                            <div key={index} className="bg-gray-20 h-28 flex items-center mb-4">
                                <div className="bg-gray-200 h-24 w-8 rounded-full flex flex-col items-center justify-center">
                                    <button onClick={increaseQuantity} className="p-1">
                                        <FiPlus />
                                    </button>
                                    <h1 className="text-lg font-semibold">{quantity}</h1>
                                    <button onClick={decreaseQuantity} className="p-1">
                                        <FiMinus />
                                    </button>
                                </div>
                                <img
                                    src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2Fconversions%2FBabySpinach-thumbnail.jpg&w=1920&q=75"
                                    className="w-16 h-16 mx-5"
                                    alt="Baby Spinach"
                                />
                                <div className="flex-1 mr-2">
                                    <p className="font-sans font-semibold">Baby Spinach</p>
                                    <p className="font-sans font-semibold text-green-500 my-1.5">$0.00</p>
                                    <p className="text-sm">{quantity} X 1 Pound</p>
                                </div>
                                <div className="flex justify-center items-end">
                                    <p className="font-sans font-semibold">$0.00</p>
                                    <button className="mt-2 mx-2 h-6 w-6 hover:bg-green-500 rounded-full hover:text-red-500 flex items-center justify-center">
                                        <RxCross2 className='' />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <hr/>
                    </div>
                    <div className="p-4 bg-white shadow-md sticky bottom-0 w-full">
                        <button className="bg-green-500 rounded-3xl hover:bg-green-600 w-full h-14 flex items-center justify-between px- shadow-md">
                            <span className="text-white font-semibold ml-6">Checkout</span>
                            <span className="text-green-500 bg-white rounded-3xl font-semibold px-4 py-3 mr-1">$0.00</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
