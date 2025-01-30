import React, { useState, useEffect } from 'react';
import { GiShinyApple } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GiCakeSlice } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { BsFillLampFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { FaHeadphones } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isGroceryDropdownOpen, setIsGroceryDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleGroceryDropdown = () => {
        setIsGroceryDropdownOpen((prev) => !prev);
    };

    return (
        <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#fafafa]'}`}>
            <div className="flex py-5">
                <div>
                    <Link className='nav-link' to='/'>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" className="ml-10 mr-8 mt-2 h-7 w-36" alt="" />
                    </Link>
                </div>
                <div className="h-auto w-auto relative">
                    <button onClick={toggleGroceryDropdown} className="flex items-center pl-4 pr-4 py-2 rounded-lg bg-white border border-green-500 font-sans font-semibold text-green-500"><GiShinyApple className="inline mb-1 mr-2 w-5 h-5" />Grocery<MdArrowDropDown className="inline ml-2 w-6 h-6" /></button>
                    {isGroceryDropdownOpen && (
                        <ul className="absolute bg-white shadow-md rounded-md mt-2 py-4 w-52 h-80 overflow-x-hidden	">
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><GiShinyApple className="inline mb-1 mr-2 w-5 h-5" />Grocery</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><GiCakeSlice className="inline mb-1 mr-2 w-5 h-5" />Bakery</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><GiLipstick className="inline mb-1 mr-2 w-5 h-5" />Makeup</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><FaBagShopping className="inline mb-1 mr-2 w-5 h-5" />Bags</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><GiClothes className="inline mb-1 mr-2 w-5 h-5" />Clothing</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><BsFillLampFill className="inline mb-1 mr-2 w-5 h-5" />Furniture</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><GiShinyApple className="inline mb-1 mr-2 w-5 h-5" />Daily Needs</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><ImBook className="inline mb-1 mr-2 w-5 h-5" />Books</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><FaHeadphones className="inline mb-1 mr-2 w-5 h-5" />Gadget</li>
                            <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><GiMedicines className="inline mb-1 mr-2 w-5 h-5" />Medicine</li>
                        </ul>
                    )}
                </div>
                <div className="flex">
                    <ul className="flex font-sans font-normal gap-6 ml-[600px] mt-3">
                        <li className="cursor-pointer hover:text-green-500"><Link className='nav-link' to='/shops'>Shops</Link></li>
                        <li className="cursor-pointer hover:text-green-500"><Link className='nav-link' to='/offers'>Offers</Link></li>
                        <li className="cursor-pointer hover:text-green-500"><Link className='nav-link' to='/contact'>Contact</Link></li>
                        <li className="relative" onMouseEnter={() => setIsPagesDropdownOpen(true)} onMouseLeave={() => setIsPagesDropdownOpen(false)}>
                            <span className="cursor-pointer hover:text-green-500">Pages<IoIosArrowDown className="inline ml-1.5" /></span>
                            {isPagesDropdownOpen && (
                                <ul className="absolute bg-white shadow-md rounded-md mt-2 py-4 w-52">
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/flash'>Flash Sale</Link></li>
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/manufactures'>Manufactures/Publishers</Link></li>
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/authors'>Authors</Link></li>
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/faq'>FAQ</Link></li>
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/terms'>Terms & Conditions</Link></li>
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/customer'>Customer Refund Policy</Link></li>
                                    <li className="px-4 py-2 hover:text-green-500 cursor-pointer hover:scale-105 transition duration-300"><Link className='nav-link' to='/vendor'>Vendor Refund Policy</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className="mt-2 ml-10">
                        <button className="bg-green-600 font-sans font-normal text-white h-auto w-auto px-3 py-1.5 rounded-lg mr-4">Join</button>
                        <button className="bg-green-600 font-sans font-normal text-white h-auto w-auto px-3 py-1.5 rounded-lg">Become a Seller</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
