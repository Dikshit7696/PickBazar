import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function Join() {
  return (
    <div>
      <ScrollToTop />
      <div className='pt-28'>
        <div className='bg-gray-50 h-auto w-auto mx-[500px] py-10 rounded-xl '>
          <div className='justify-self-center '>
            <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" className='ml-4' alt="" />
            <h1 className='mt-4'>Login with your email & password</h1>
          </div>
          <div className='mt-12 mx-8'>
            <h1 className=''>Email</h1>
            <input type="email" name='email' id='email' className='border rounded-md mt-2 h-12 w-[450px]' placeholder='     customer@demo.com' required />
            <h1 className='mt-4'>Password</h1>
            <input type="password" name='password' id='password' className='borderr rounded-md mt-2 h-12 w-[450px]' placeholder='' />
            <button className='bg-green-500 hover:bg-green-600 h-12 rounded-md w-[450px] text-white font-semibold font-sans mt-8'>Login</button>
            {/* <hr className='my-12' /> */}
            <div className="relative my-12 flex items-center">
              <hr className="w-full border-gray-300" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 px-3 text-gray-500">Or</span>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white h-12 w-[450px] rounded-md font-semibold'>Login with Google</button>
            <button className='bg-gray-500 hover:bg-gray-600 text-white h-12 w-[450px] rounded-md font-semibold mt-5'>Login with Mobile Number</button>
            <hr className='my-12' />
            <h1 className='text-center'>Don't have any account? <Link className='nav-link' to='/register'><span className=' underline hover:no-underline text-green-500'>Register</span></Link></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
