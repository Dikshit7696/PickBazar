import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function Register() {
    return (
        <div>
            <ScrollToTop />
            <div className='pt-28'>
                <div className='bg-gray-50 h-auto w-auto mx-[500px] py-10 rounded-xl '>
                    <div className='justify-self-center '>
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" className='ml-16' alt="" />
                        <h1 className='mt-4'>By signing up, you agree to our <span className='underline hover:no-underline text-green-500 cursor-pointer'>terms</span> & <span className='underline hover:no-underline text-green-500 cursor-pointer'>policy</span></h1>
                    </div>
                    <div className='mt-12 mx-8'>
                        <h1 className=' font-semibold'>Name</h1>
                        <input type="name" name='name' id='name' className='border rounded-md mt-2 h-12 w-[450px]' placeholder='     enter your name' required />
                        <h1 className='mt-4 font-semibold'>Email</h1>
                        <input type="email" name='email' id='email' className='border rounded-md mt-2 h-12 w-[450px]' placeholder='     customer@demo.com' required />
                        <h1 className='mt-4 font-semibold'>Password</h1>
                        <input type="password" name='password' id='password' className='borderr rounded-md mt-2 h-12 w-[450px]' placeholder='' />
                        <button className='bg-green-500 hover:bg-green-600 h-12 rounded-md w-[450px] text-white font-semibold font-sans mt-8'>Register</button>
                        <div className="relative my-10 flex items-center">
                            <hr className="w-full border-gray-300" />
                            <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 px-3 text-gray-500">Or</span>
                        </div>
                        <h1 className='text-center'>Already have any account? <Link className='nav-link' to='/join'><span className=' underline hover:no-underline text-green-500'>Login</span></Link></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
