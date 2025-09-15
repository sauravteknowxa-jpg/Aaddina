import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus, FaHeart, FaPhone } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./style.css"
import { useState } from "react";

function Navbar(){
    const [showMenu, setShowMenu]= useState (false);
    const handleButton=()=>{
        setShowMenu(!showMenu);
    }
    return(
        <>

                 <div className=" w-full">
                    <nav className="bg-black flex flex-wrap items-center justify-between  text-shadow-black px-10 py-1 w-full ">
                          <div className="flex  items-center gap-2 p-2 md:flex-none">
                                <a href="" className="flex items-center gap-2">
                                <h2 className="flex flex-wrap items-center justify-center gap-2 ">
                                    <FaPhone className="text-white text-xl transform -scale-x-100"></FaPhone>
                                    <span className='text-white text-center md:text-base'>+380961381876</span>
                                </h2>
                                </a>
                                <button onClick={handleButton} className="md:hidden text-white text-3xl cursor-pointer">
                                  <GiHamburgerMenu />
                                </button>
                            </div>
                            <div className="hidden md:flex items-center p-2 justify-center">
                                    <h2 className='text-white text-center w-full'>TAKE CARE OF YOUR Health <span className='text-green-300'>25% OFF </span>USE CODE "DOFIXO3"</h2>
                            </div>
                            <div className="hidden md:flex  items-center p-4 gap-2">
                                      <select name="" id="" className='text-white cursor-pointer hover:text-green-300'>
                                               <option value="" className="text-black ">English</option>
                                               <option value="" className="text-black ">Spanish</option>
                                               <option value="" className="text-black ">Russian</option>
                                               <option value="" className="text-black ">Portuguese</option>
                                        </select>

                                        <select name="" id="" className='text-white cursor-pointer hover:text-green-300'>
                                               <option value="" className="text-black ">USD</option>
                                               <option value="" className="text-black ">EUR</option>
                                               <option value="" className="text-black ">CHF</option>
                                               <option value="" className="text-black ">GBP</option>
                                        </select>

                                         <select name="" id="" className='text-white cursor-pointer hover:text-green-300'>
                                              <option value="" className="text-black ">Setting</option>
                                               <option value="" className="text-black ">My Profile</option>
                                               <option value="" className="text-black ">Wishlist</option>
                                               <option value="" className="text-black ">Cart</option>
                                               <option value="" className="text-black ">Logout</option>
                                        </select>
                            </div> 

                            {showMenu && (
                                <div className="w-full md:hidden bg-black p-4 mt-2 space-y-4">
                                  <h2 className="text-white text-center">
                                    TAKE CARE OF YOUR Health <span className="text-green-300">25% OFF </span>USE CODE "DOFIXO3"
                                  </h2>
                                  <div className="flex flex-col gap-3">
                                    <select className="text-black cursor-pointer px-2 py-1 rounded">
                                      <option>English</option>
                                      <option>Spanish</option>
                                      <option>Russian</option>
                                      <option>Portuguese</option>
                                    </select>
                                    <select className="text-black cursor-pointer px-2 py-1 rounded">
                                      <option>USD</option>
                                      <option>EUR</option>
                                      <option>CHF</option>
                                      <option>GBP</option>
                                    </select>
                                    <select className="text-black cursor-pointer px-2 py-1 rounded">
                                      <option>Setting</option>
                                      <option>My Profile</option>
                                      <option>Wishlist</option>
                                      <option>Cart</option>
                                      <option>Logout</option>
                                    </select>
                                  </div>
                                </div>
                              )}                 
                  </nav>
                        
                <nav className=" flex flex-wrap items-center justify-between bg-white text-shadow-black px-12 py-3 w-full ">
                  <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-black">
                    <a href="">
                      <h3 className="flex flex-wrap items-center justify-center gap-2">
                        <img src="/images/logo.svg" alt="" />
                      </h3>
                    </a>
                    <ul className="hidden lg:flex flex-wrap items-center justify-center gap-10 font-bold text-black  p-3">
                      <li className='hover:text-green-300 cursor-pointer'>
                        <NavLink to="/">Home </NavLink>
                      </li>
                      <li className='hover:text-green-300 cursor-pointer'>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li className='hover:text-green-300 cursor-pointer'>
                        <NavLink to="/shop">Shop </NavLink>
                      </li>
                      <li className='hover:text-green-300 cursor-pointer'>
                        <NavLink to="/pages">Pages </NavLink>
                      </li>
                      <li className='hover:text-green-300 cursor-pointer'>
                        <NavLink to="/blog">Blog </NavLink>
                      </li>
                      <li className='hover:text-green-300 cursor-pointer'>
                        <NavLink to="/contact">Contact </NavLink>
                      </li>
                      
                      
                    </ul>
                  </div>
                  <div className="hidden lg:flex flex-wrap items-center justify-center gap-6 font-bold text-black">
                    <FaHeart className="text-3xl text-gray-400 cursor-pointer" />
                    <FaCartPlus className="text-3xl text-gray-400 cursor-pointer" />
                    <GiHamburgerMenu className="cursor-pointer text-3xl text-gray-400" />
                    
                  </div>

                  <div className=" lg:hidden">
                        <button onClick={handleButton} className="cursor-pointer text-2xl">
                                <GiHamburgerMenu />
                        </button>
                  </div>

                  {showMenu && (
                        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">
                          <ul className='flex flex-col items-center gap-4 py-4 text-black'>
                            <li><NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink></li>
                            <li><NavLink to="/feature" onClick={() => setShowMenu(false)}>About</NavLink></li>
                            <li><NavLink to="/community" onClick={() => setShowMenu(false)}>Shop</NavLink></li>
                            <li><NavLink to="/blog" onClick={() => setShowMenu(false)}>Pages</NavLink></li>
                            <li><NavLink to="/pricing" onClick={() => setShowMenu(false)}>Blog</NavLink></li>
                            <li><NavLink to="/pricing" onClick={() => setShowMenu(false)}>Contact</NavLink></li>
                            
                           </ul>
                        </div>
                    )}

                </nav>
              </div>

              

        </>
    )
}
export default Navbar;