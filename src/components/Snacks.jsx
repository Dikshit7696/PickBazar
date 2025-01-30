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


function Snacks() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDropdown, setActiveDropdown] = useState('snacks');

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
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Belmont Custard Cream</h1>
                                    <p className='font-thin text-sm mt-2'>1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Crawford Digestives</h1>
                                    <p className='font-thin text-sm mt-2'>.75lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$8.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$6.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Crawford Shortie</h1>
                                    <p className='font-thin text-sm mt-2'>.50lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F196%2FHill_Biscuits_Mini_Pack_Mix_.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Hill Mini Pack Mix</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$10.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$7.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F197%2FJammie_Dodgers.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Jammie Dodgers Raspberry</h1>
                                    <p className='font-thin text-sm mt-2'>1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$7.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Juli S Cheese Crackers</h1>
                                    <p className='font-thin text-sm mt-2'>.75lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$8.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F199%2Fkhong_guan_orange_cream.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Khong Guan Orange Cream</h1>
                                    <p className='font-thin text-sm mt-2'>0.5lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F200%2Fkhong_guan_premium_marie.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Khong Guan Premium Marie</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$8.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$6.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Lotus Biscoff</h1>
                                    <p className='font-thin text-sm mt-2'>0.5lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$10.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$7.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F202%2Fartiach_filipino.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Filipinos</h1>
                                    <p className='font-thin text-sm mt-2'>0.5lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F203%2Fcadbury_dairy_milk_crispello.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Dairy Milk Crispello</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$2.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Cadbury Zip</h1>
                                    <p className='font-thin text-sm mt-2'>1p(s)</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$4.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$2.90</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F205%2Fcadbury-dairy-milk-reclose.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Dairy Milk Reclose</h1>
                                    <p className='font-thin text-sm mt-2'>0.2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$3.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F206%2Fcloetta.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Cloetta Chocowoffle Crispy</h1>
                                    <p className='font-thin text-sm mt-2'>0.2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$3.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$2.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F207%2Fcloetta_sprinkle.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Cloetta Sprinkle</h1>
                                    <p className='font-thin text-sm mt-2'>0.2lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$3.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F208%2Fhersheys_kisses.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Hersheys Kisses</h1>
                                    <p className='font-thin text-sm mt-2'>0.2lb</p>
                                    <p className='font-thin text-sm mt-6 italic line-through'>$2.00</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-2'>$3.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F209%2Fm%2526m_funsize.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>M & M Funsize</h1>
                                    <p className='font-thin text-sm mt-2'>0.1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F210%2Fnestle_butterfinger.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Nestle Butterfinger</h1>
                                    <p className='font-thin text-sm mt-2'>0.1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F211%2Fnestle_kitkat.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Nestle Kitkat</h1>
                                    <p className='font-thin text-sm mt-2'>0.1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F212%2Fsnikers_slice.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Snikers Slice</h1>
                                    <p className='font-thin text-sm mt-2'>0.1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$3.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Snikers Snack Size</h1>
                                    <p className='font-thin text-sm mt-2'>0.1lb</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$3.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F214%2Fcottage_bbq.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Wise Cottage Fires Bbq</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F215%2Fcrisps-puzzle.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Puzzles Crips Ready Salted</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$0.60</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F216%2Fdoritos.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Doritos Tangy Cheese</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F217%2Flays_baked.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Lays Baked</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F218%2Flays_sea_salted.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Lays Sea Salted</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.20</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F219%2Flays-kettle-cooked.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Lays Kettle Cooked</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F220%2Flays-sour-cream.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Lays Sour Cream</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F221%2Fnims_apple_fruit.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center object-contain' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Nims Apple Crisp</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$1.50</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F222%2FReady-Salted-Crisps.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Snack Rite Ready Saled</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$3.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F223%2FRoysters_6pk.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Roysters Bubbled Crips</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$4.20</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Snackrite Cheese Onion</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F229%2Findomie_special_chicken.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Indomie Chicken Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F230%2Fkame_stir_fry.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Kame H Okkein Stir Fry Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F231%2Fkoka_curry.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Koka Curry Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F232%2Fmaggi_bbq.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Maggi Bbq Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F233%2Fmaggi_beef.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Maggi Beef Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F234%2Fmaggi_biriyani.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Maggi Biriyani Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F235%2Fmaggi_chicken.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Maggi Chicken Noodles</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-72 bg-white border rounded-md mb-10'>
                                <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fbadia_pinenuts.jpg&w=1920&q=75" className='w-60 h-60 justify-self-center' alt="" />
                                <div className='text-start ml-5'>
                                    <h1 className='font-semibold'>Badia Pine Nuts</h1>
                                    <p className='font-thin text-sm mt-2'>1pc(s)</p>
                                    <div className='flex'>
                                        <p className='font-semibold text-green-500 mt-12'>$5.00</p>
                                        <button className='ml-28 font-semibold rounded-3xl mt-11 border border-green-500 w-24 h-9 text-green-500 hover:bg-green-700 hover:text-white'><MdOutlineShoppingBasket className='inline mr-3 h-4 w-4' />Cart</button>
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

export default Snacks;

