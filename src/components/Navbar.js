import React from 'react';
import { Link } from 'react-router-dom'; // Added single or double quotes around 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
        <div className="cursor-pointer">
          <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl '>Eatify</h1>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <div className='flex'>
          <div className="flex justify-center bg-gray-200 h-10 rounded-md sm:pl-2 sm:w-[400px] lg:w-[400px] items-center">
            <input type="search" className='hidden sm:flex bg-transparent p-2 sm:w-full focus:outline-none text-black ' placeholder='search..' />
            {/* <FiIconName size={5} className="bg-black text-white p-[10px] h-10 rounded-md w-10 font-bold " />  */}
          </div>
          <div className="login">
            <button className='bg-black text-white px-5 py-1 ml-2 h-10 w-[100px] rounded-md'>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
