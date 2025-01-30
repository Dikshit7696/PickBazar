import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
import { Navigation } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa";
import { GiShinyApple } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { GiDogBowl } from "react-icons/gi";
import { TfiSpray } from "react-icons/tfi";
import { LuMilk } from "react-icons/lu";
import { PiCookingPotFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaGlassCheers } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';


function Dairy() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState('dairy');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log(`Searching for: ${searchQuery}`);
    };

    const toggleDropdown = (category) => {
        setActiveDropdown((prev) => (prev === category ? null : category));
    };

    return (
        <div>
            <div className="flex flex-col items-center text-center pt-8 relative">
                <div className="h-full w-full absolute z-0 top-0 left-0">
                    <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=3840&q=75" alt="" /></div>
                <div className='relative z-20'>
                    <h1 className="font-sans font-bold text-5xl mt-64">Groceries Delivered in 90 Minutes</h1>
                    <p className="font-sans text-lg mt-8">Get your healthy foods & snacks delivered at your doorsteps all day, every day.</p>
                    <div className="flex items-center w-auto mt-8 drop-shadow-xl">
                        <input type="text" placeholder="   Search your products from here" value={searchQuery} onChange={handleSearchChange} className="w-[700px] h-14 p-3  rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <button onClick={handleSearch} className="w-32 h-14 px-4 py-3 text-white font-sans font-semibold bg-green-500 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"><FaSearch className='inline mr-2 font-bold' />Search</button>
                    </div>
                </div>
                <div className="w-full h-auto px-7 mt-[380px] bg-white py-10">
                    <Swiper slidesPerView={3} spaceBetween={0} navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Foffer-2.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Foffer-1.png&w=640&q=75" className='w-[475px] h-[230px]' alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full bg-gray-100  flex">
                    <div className="col-span-1 w-60 h-auto pb-4 bg-white shadow-md pt-10 mt-0.5">
                        <ul className="space-y-6 sticky top-32 left-0">
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('fruits')}><GiShinyApple className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/fruitsvegetables'>Fruits & Vegetables</Link></li>
                            {activeDropdown === 'fruits' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-8"><Link className='nav-link' to='/fruits'>Fruits</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer"><Link className='nav-link' to='/vegetables'>Vegetables</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('meat')}><TbMeat className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/meat&fish'> Meat & Fish</Link></li>
                            {activeDropdown === 'meat' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-2"><Link className='nav-link' to='/fish'>Fresh Fish</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/meat'>Meat</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('snacks')}><GiCoffeeCup className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/snacks'> Snacks</Link></li>
                            {activeDropdown === 'snacks' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer ml-8"><Link className='nav-link' to='/nuts&biscuits'>Nuts & Biscuits</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-2"><Link className='nav-link' to='/chocolates'>Chocolates</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-8"><Link className='nav-link' to='/crisps'>Crisps</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-10"><Link className='nav-link' to='/noodles&pasta'>Noodles & Pasta</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-8"><Link className='nav-link' to='/sauce'>Sauce</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('pet')}><GiDogBowl className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/petcare'>Pet Care</Link></li>
                            {activeDropdown === 'pet' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-3"><Link className='nav-link' to='/catfood'>Cat Food</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-1"><Link className='nav-link' to='/dogfood'>Dog Food</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-2"><Link className='nav-link' to='/accessories'>Accessories</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('home')}><TfiSpray className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/home&cleaning'>Home & Cleaning</Link></li>
                            {activeDropdown === 'home' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer ml-3"><Link className='nav-link' to='/airfreshner'>Air Freshner</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-[53px]"><Link className='nav-link' to='/cleaning'>Cleaning Products</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-[60px]"><Link className='nav-link' to='/kitchen'>Kitchen Accessories</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-5"><Link className='nav-link' to='/laundary'>Laundry</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('dairy')}><LuMilk className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/dairy'> Dairy</Link></li>
                            {activeDropdown === 'dairy' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/milk'>Milk</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/butter'>Butter</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/egg'>Egg</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-5"><Link className='nav-link' to='/yogurt'>Yogurt</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('cooking')}><PiCookingPotFill className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/cooking'> Cooking</Link></li>
                            {activeDropdown === 'cooking' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-12"><Link className='nav-link' to='/oil'>Oil</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-10"><Link className='nav-link' to='/rice'>Rice</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-4"><Link className='nav-link' to='/slat&sugar'>Salt & Sugar</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-6"><Link className='nav-link' to='/spices'>Spices</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('breakfast')}><PiBowlFoodFill className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/breakfast'> Breakfast</Link></li>
                            {activeDropdown === 'breakfast' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/bread'>Bread</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-6"><Link className='nav-link' to='/cereal'>Cereal</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-9"><Link className='nav-link' to='/jam'>Jam</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('beverage')}><FaGlassCheers className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/beverage'> Beverage</Link></li>
                            {activeDropdown === 'beverage' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-5"><Link className='nav-link' to='/coffee'>Coffee</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-8"><Link className='nav-link' to='/energy'>Energy Drinks</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/juice'>Juice</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-5"><Link className='nav-link' to='/fizzy'>Fizzy Drinks</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-9"><Link className='nav-link' to='/tea'>Tea</Link></li>
                                </ul>
                            )}
                            <li className="flex items-center cursor-pointer hover:text-green-500" onClick={() => toggleDropdown('health')}><GiHealthCapsule className="mr-3 ml-6 w-5 h-5" /><Link className='nav-link' to='/health&beauty'> Health & Beauty</Link></li>
                            {activeDropdown === 'health' && (
                                <ul className="space-y-4 mr-10 mt-1">
                                    <li className="hover:text-green-500 cursor-pointer mr-7"><Link className='nav-link' to='/bath'>Bath</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer mr-4"><Link className='nav-link' to='/cream'>Cream</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-4"><Link className='nav-link' to='/deodorant'>Deodorant</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-2"><Link className='nav-link' to='/face'>Face Care</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-1"><Link className='nav-link' to='/oral'>Oral Care</Link></li>
                                    <li className="hover:text-green-500 cursor-pointer ml-11"><Link className='nav-link' to='/shaving'>Shaving Needs</Link></li>
                                </ul>
                            )}
                        </ul>
                    </div>
                    <div className='mt-6 mx-10'>
                        <div className='grid grid-cols-4 gap-4'>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F305%2Fbutter_barney.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Barney Butter</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$8.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F306%2Fbutter_kirkland.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Kirkland Signature</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$9.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$8.25</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F307%2Fbutter_nature%2527s_tattva.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Nature S Tattva Shea Butter</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$8.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F308%2Fbutter_nikki%2527s.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Nikki S Coconut Butter</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$10.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$7.59</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F309%2Fbutter_tru_nut.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Tru Nut Powdered Peanut Butter</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$10.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$8.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F310%2Fbutter_whole_earth.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Whole Earth Crunchy Peanut Butter</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$6.49</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F311%2Fegg_cavanagh.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center ' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Cavanagh Free Range Eggs</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$2.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F312%2Fegg_clarenece_court.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Clarence Cout 6 Free Range Eggs</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$2.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$1.59</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F313%2Fegg_freshlay_golden_yolks.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Freshlay Golden Yolks</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$3.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F314%2Fegg_morrisons.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Morissons 6 Medium Yolk Eggs</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$4.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.59</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Happy Egg Organic</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$4.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.49</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Cp Omega</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$2.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F317%2Fmilk_arla_lacto_free.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Arla Lacto Free Semi Skimmed Milk</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$5.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$4.59</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F318%2Fmilk_arla_low_fat1.5.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center ' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Arla All Natural Milk Low Flat</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F319%2Fmilk_f%2526n_magnolia.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Magnolia Fresh Milk</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F320%2Fmilk_greenfields_choco_malt_flavoured.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Greenfields Chocolate Malt</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$5.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2Fmilk_lactaid.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Lactaid</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$5.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$4.29</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F322%2Fmilk_living_planet.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Living Planet Organic Dairy Milk </h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$5.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.89</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F323%2Fmilk_cream_nammilk.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Nammik Greek Style</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F324%2Fyogourt_astro_balkan.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Astro Original</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$4.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.29</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F325%2Fyogourt_astro_bio_best.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Astro Bio Best</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F326%2Fyogourt_dannon_strawberry.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Dannon Strawberry</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$6.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.59</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F327%2Fyogourt_dannon_vanilla.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Dannon Vanilla</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.00</p>
                                        <button className='ml-28 mt-11 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md mb-10'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F328%2Fyogourt_chobani_vanilla.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Chonani Vanilla Blended</h1>
                                    <p className='font-thin text-sm mt-2'>2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$6.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$4.59</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dairy;

