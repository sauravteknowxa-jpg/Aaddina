
import { NavLink } from "react-router";
import "./style.css"

function Navbar(){
    return(
        <>

                 <div className=" w-full">
                    <nav className="bg-black flex flex-wrap items-center justify-between  text-shadow-black px-10 py-1 w-full ">
                        <div className="flex flex-col md:flex-row justify-center items-center p-2">
                                <a href="">
                                <h2 className="flex flex-wrap items-center justify-center gap-2 ">
                                    <img src="/images/pic40.jpg" alt="" className='rounded-xl' />
                                    <span className='text-white text-center md:text-base'>+380961381876</span>
                                </h2>
                                </a>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center p-2">
                                    <h2 className='text-white'>TAKE CARE OF YOUR Health <span className='text-green-300'>25% OFF </span>USE CODE "DOFIXO3"</h2>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center p-2">
                                <ul className='flex flex-wrap items-center justify-center gap-4'>
                                    <li>
                                        <select name="" id="" className='text-white cursor-pointer hover:text-green-300'>
                                               <option value="" className="text-black ">English</option>
                                               <option value="" className="text-black ">Spanish</option>
                                               <option value="" className="text-black ">Russian</option>
                                               <option value="" className="text-black ">Portuguese</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select name="" id="" className='text-white cursor-pointer hover:text-green-300'>
                                               <option value="" className="text-black ">USD</option>
                                               <option value="" className="text-black ">EUR</option>
                                               <option value="" className="text-black ">CHF</option>
                                               <option value="" className="text-black ">GBP</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select name="" id="" className='text-white cursor-pointer hover:text-green-300'>
                                              <option value="" className="text-black ">Setting</option>
                                               <option value="" className="text-black ">My Profile</option>
                                               <option value="" className="text-black ">Wishlist</option>
                                               <option value="" className="text-black ">Cart</option>
                                               <option value="" className="text-black ">Logout</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                    </nav>
                        
                <nav className=" flex flex-wrap items-center justify-between bg-white text-shadow-black px-12 py-3 w-full ">
                  <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-black">
                    <a href="">
                      <h3 className="flex flex-wrap items-center justify-center gap-2">
                        <img src="/images/logo.svg" alt="" />
                      </h3>
                    </a>
                    <ul className="flex flex-wrap items-center justify-center gap-10 font-bold text-black  p-3">
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
                  <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-black">
                    <img src="/images/pic42.jpg" alt="" className='rounded-2xl'/>
                    <img src="/images/pic43.jpg" alt="" className='rounded-2xl'/>
                    <img src="/images/pic39.jpg" alt="" className='rounded-2xl'/>
                  </div>
                </nav>
              </div>

        </>
    )
}
export default Navbar;