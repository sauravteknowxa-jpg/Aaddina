
import "./style.css"
function Home(){
    return(
        <>
            <div className="w-full  ">
                  <div className=" flex flex-col md:flex-row gap-4 bg-slate-50  sm:p-4 md:p-12 lg:p-30  w-full">
                     <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center gap-12  md:w-1/2 w-full ">
                        <h2 className="bg-gray-200 sm:text-base md:text-lg lg:text-xl text-left font-semibold text-neutral-500 px-4 py-1">
                          100% ORGANIC PRODUCT
                        </h2>
                        <h1 className="flex flex-col gap-2 text-left text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold md:pr-50 ">
                            Buy Delicious produce Enjoy Free Shipping
                         </h1>
                        <button className="flex flex-wrap w-36 h-12 items-center justify-center gap-3  p-3 bg-green-500 text-white">
                            <span>Buy Now</span>
                            <img src="/images/pic44.jpg" alt="" />
                          </button>
                                                
                      </div>
                      <div className="flex items-stretch justify-center  md:w-1/2 w-full">
                        <img
                          src="/images/product1.png"
                          alt=""
                          className="h-auto w-auto"
                        />
                      </div>
                    </div>
                </div>

              {/* section1 */}
              <div className='w-full mt-8 mb-4'>
                    <div className=" flex flex-col md:flex-row bg-white  sm:p-4 md:px-12 lg:px-20 py-4  w-full">
                      <div className='flex flex-wrap items-center justify-between gap-6 w-full '>
                        <div className='flex flex-col items-center justify-center gap-4 border-2 border-slate-100 p-2 md:p-10 w-full h-full md:w-44 md:h-44 hover:border-green-300'>
                              <img src="/images/category-06.png" alt="" className='bg-gray-200 rounded-3xl border-2 border-dotted border-green-300 p-2' />
                              <span className='text-gray-700'>Fresh Fruits</span>
                              <span className='text-gray-300'>24 items</span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-2 border-slate-100 p-2 md:p-10 w-full h-full md:w-44 md:h-44 hover:border-green-300'>
                              <img src="/images/category-01.png" alt="" className='bg-gray-200 rounded-3xl border-2 border-dotted border-green-300 p-2' />
                              <span className='text-gray-700'>Vegetable</span>
                              <span className='text-gray-300'>16 items</span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-2 border-slate-100 p-2 md:p-10 w-full h-full md:w-44 md:h-44 hover:border-green-300'>
                              <img src="/images/category-02.png" alt="" className='bg-gray-200 rounded-3xl border-2 border-dotted border-green-300 p-2' />
                              <span className='text-gray-700'>Milk & Dairy</span>
                              <span className='text-gray-300'>16 items</span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-2 border-slate-100 p-2 md:p-10 w-full h-full md:w-44 md:h-44 hover:border-green-300 '>
                              <img src="/images/category-03.png" alt="" className='bg-gray-200 rounded-3xl border-2 border-dotted border-green-300 p-2' />
                              <span className='text-gray-700'>Coffee & Tea</span>
                              <span className='text-gray-300'>18 items</span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-2 border-slate-100 p-2 md:p-10 w-full h-full md:w-44 md:h-44 hover:border-green-300'>
                              <img src="/images/category-04.png" alt="" className='bg-gray-200 rounded-3xl border-2 border-dotted border-green-300 p-2' />
                              <span className='text-gray-700'>Drinks </span>
                              <span className='text-gray-300'>10 items</span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 border-2 border-slate-100 p-2 md:p-10 w-full h-full md:w-44 md:h-44 hover:border-green-300'>
                              <img src="/images/category-05.png" alt="" className='bg-gray-200 rounded-3xl border-2 border-dotted border-green-300 p-2' />
                              <span className='text-gray-700'>Meat </span>
                              <span className='text-gray-300'>10 items</span>
                        </div>
                      </div>
                        
                    </div>
              </div>

              {/* section2 */}
              <div className='w-full mt-4 mb-8'>
                <div className=" flex flex-col  bg-white gap-4 p-2 sm:px-4 md:px-12 lg:px-32 py-4 w-full">
                  <button className=" flex flex-wrap items-center justify-center gap-3 py-2  px-2 bg-green-100 w-50 ">
                            <span className='text-green-400 text-lg md:text-xl'>THIS MONTH</span>
                  </button>
                   <div className='flex flex-wrap items-center justify-between gap-6 w-full '>
                        <span className='text-base sm:text-lg md:text-2xl lg:text-5xl font-semibold'>Trendy Products</span>
                        <ul className='flex flex-wrap items-center justify-between gap-6  '>
                              <li className='hover:text-green-200 font-semibold'>
                                <a href="">All Products</a>
                              </li>
                               <li className='hover:text-green-200 font-semibold'>
                                <a href="">New In</a>
                              </li>
                               <li className='hover:text-green-200 font-semibold'>
                                <a href="">Top Rated</a>
                              </li>
                               <li className='hover:text-green-200 font-semibold'>
                                <a href="">Tensing Products</a>
                              </li>
                        </ul>
                    </div>    
                </div>
                
              </div>

              <div className='w-full mt-4 mb-8'>
                <div className=" flex flex-col  bg-white gap-4  sm:p-4 md:px-12 lg:px-20 py-4 w-full">
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 px-12 w-full'>
                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product1 (1).png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Organic Avocado</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 150.00</span>
                            </div>
                      </div>

                       <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product2.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Cheddar Fries</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 190.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product3 (1).png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Broccoli Organic</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 300.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product4.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Broccoli Farms</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 129.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product5.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Fresh Orange</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 150.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product6.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Organic Avocado</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 150.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product7.png" alt="" />

                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Fresh Orange</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 80.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-center md:items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-14 sm:py-4 md:py-10 lg:py-12'>
                                      <img src="/images/product8.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Red apple</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 49.00</span>
                            </div>
                      </div>
                       
                        
                    </div>
                </div>
              </div>

            <div className='w-full mt-8 mb-4'>
              <div className=" flex flex-col md:flex-row bg-white gap-4  sm:p-4 md:px-12 lg:px-20 py-4 w-full">
                <div className='flex flex-wrap items-center justify-center gap-4 p-2 md:px-4 w-full'>
                    <div className='w-full md:w-[40%] bg-cover  ' style={{backgroundImage:"url(/images/off-01.png)"}}>
                          <div className='flex flex-col items-start justify-start gap-6 px-4 py-20'>
                                  <span className='text-green-600 text-2xl'>30% Off</span>
                                  <h2 className='text-black sm:text-2xl md:text-4xl lg:text-6xl'>Fresh Vegetables</h2>
                                  <button className="flex flex-wrap w-36 h-12 items-center justify-center gap-3  p-3 bg-green-500 text-white">
                                    <span>Buy Now</span>
                                    <img src="/images/pic44.jpg" alt="" />
                                  </button>
                        
                          </div>
                          
                    </div>
                    <div className='w-full md:w-[54%] bg-cover' style={{backgroundImage:"url(/images/off-02.png)"}}>
                            <div className='flex flex-col items-start justify-start gap-6 px-4 py-12 w-[60%]'>
                                  <span className='text-green-300 text-2xl'>Limited offer</span>
                                  <span className='text-white sm:text-2xl md:text-4xl lg:text-6xl'>Don't Miss  25% Off On All Fruits</span>
                                  <button className="flex flex-wrap w-36 h-12 items-center justify-center gap-3  p-3 bg-green-500 text-white">
                                    <span>Buy Now</span>
                                    <img src="/images/pic44.jpg" alt="" />
                                  </button>
                          </div>
                    </div>
                </div>
              </div>
            </div>

          <div className='w-full m-4'>
                <div className=" flex flex-col  bg-white gap-4  sm:p-4 md:px-12 lg:px-20 py-4 w-full">
                  <div className='w-full flex flex-col px-12  ' >
                      <button className=" flex flex-wrap items-center justify-center gap-3 py-1  px-3 bg-green-100 w-40 ">
                            <span className='text-green-400 text-lg md:text-2xl'>THIS WEEK</span>
                      </button>
                    <span className='text-base sm:text-lg md:text-2xl lg:text-5xl font-semibold'>Best Sellers</span>

                  </div>
                  
                    <div className='grid grid-cols-1  md:grid-cols-3 items-start justify-start gap-4 px-8'>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-01.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Organic <br /> Avocado</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-02.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Cheddar <br /> Fries </span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-03.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Organic <br /> Avocado</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-04.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Broccoli <br /> Farms</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-05.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Cheddar <br /> Fries</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-06.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Broccoli <br /> Organic</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-07.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Broccoli <br /> Farms</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-08.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Cheddar <br /> Fries</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap items-center justify-center gap-6 w-full '>
                              <img src="/images/fs-09.png" alt="" />                            
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-lg sm:text-xl md:text-3xl  font-semibold hover:text-green-300 flex flex-wrap'>Broccoli <br /> Organic</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 66.00</span>
                            </div>
                          </div>
                    </div>
                       
                </div>
                
          </div>

          <div className='w-full m-4'>
               <div className=" flex flex-col  bg-white   w-full">
                    <div className='w-full bg-cover' style={{backgroundImage:"url(/images/off-01.png)"}}>
                          <div className='flex flex-col items-center justify-center gap-10 px-8 md:py-20'>
                                  <button className=" flex flex-wrap items-center justify-center gap-3 py-1  px-3 bg-green-100 w-40 ">
                                        <span className='text-green-400 text-lg md:text-2xl'>THIS WEEK</span>
                                  </button>
                                  <span className='text-base sm:text-lg md:text-2xl lg:text-6xl font-bold'>Weekly Best Deals</span>
                                  <div className='grid sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-4'>
                                      <div className='bg-white flex flex-col items-center justify-center gap-3 px-6 py-3' >
                                            <span className='text-green-400 text-lg sm:text-2xl md:text-4xl'>109</span>
                                            <span className='text-gray-800 text-lg sm:text-xl md:text-2xl'>Days</span>
                                      </div>
                                      <div className='bg-white flex flex-col items-center justify-center gap-3 px-6 py-3' >
                                            <span className='text-green-400 text-lg sm:text-2xl md:text-4xl'>11</span>
                                            <span className='text-gray-800 text-lg sm:text-xl md:text-2xl'>HRS</span>
                                      </div>
                                      <div className='bg-white flex flex-col items-center justify-center gap-3 px-6 py-3' >
                                            <span className='text-green-400 text-lg sm:text-2xl md:text-4xl'>36</span>
                                            <span className='text-gray-800 text-lg sm:text-xl md:text-2xl'>MINS</span>
                                      </div>
                                      <div className='bg-white flex flex-col items-center justify-center gap-3 px-6 py-3' >
                                            <span className='text-green-400 text-lg sm:text-2xl md:text-4xl'>28</span>
                                            <span className='text-gray-800 text-lg sm:text-xl md:text-2xl'>SEC</span>
                                      </div>
                                  </div>
                                  <button className="flex flex-wrap w-36 h-12 items-center justify-center gap-3  py-1  px-3 bg-green-300 hover:bg-white text-white hover:text-green-300 cursor-pointer">
                                    <span >Buy Now</span>
                                    <img src="/images/pic44.jpg" alt="" />
                                  </button>
                          </div>
                    </div>
                </div> 
          </div>

           <div className='w-full m-10'>
                <div className=" flex flex-col  bg-white gap-8 p-2 sm:px-4 md:px-12 lg:px-20 py-4 w-full">
                    <div className='w-full flex flex-col px-8 gap-4  ' >
                        <button className=" flex flex-wrap items-center justify-center gap-3 py-1  px-3 bg-green-100 w-50 ">
                              <span className='text-green-400 text-lg md:text-2xl'>TOP SALE</span>
                        </button>
                      <span className='text-base sm:text-lg md:text-2xl lg:text-5xl font-semibold'>Featured Product</span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 px-8 w-full'>
                          <div className=' flex flex-col items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center px-6 py-12'>
                                      <img src="/images/product1 (1).png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Alexander roll Arm sofa</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 150.00</span>
                            </div>
                      </div>

                       <div className=' flex flex-col items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center px-6 py-12'>
                                      <img src="/images/product2.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Brasslegged Armchair</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 190.00</span>
                            </div>
                      </div>

                      <div className=' flex flex-col items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center px-6 py-12'>
                                      <img src="/images/product3 (1).png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Cheddar Fries</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 300.00</span>

                            </div>
                      </div>

                      <div className=' flex flex-col items-start justify-center gap-3'>
                            <div className='bg-gray-200 flex flex-col items-center justify-center px-6 py-12'>
                                      <img src="/images/product4.png" alt="" />
                            </div>
                            <div className='bg-white flex flex-col items-start justify-start gap-2 '>
                              <span className='text-black text-xl font-semibold hover:text-green-300'>Broccoli Farms</span>
                              <img src="/images/pic45.jpg" alt="" />
                              <span className='text-green-400'>USD 129.00</span>
                            </div>
                      </div>

                    </div>
                </div>
            </div> 

            <div className='w-full bg-gray-300'>
                  <div className=' flex flex-col items-center justify-center  w-full'>
                    <div className="mt-16 flex flex-col  gap-3  sm:p-4 md:px-12 lg:px-20 py-4 w-full">
                        <button className=" flex flex-wrap items-center justify-center gap-3 py-1  px-6 bg-green-100 w-50 ">
                            <span className='text-green-400 text-lg md:text-2xl '>TESTIMONIALS </span>
                        </button>
                        <div className='flex flex-wrap items-center justify-between gap-6 w-full '>
                              <span className='text-base sm:text-lg md:text-2xl lg:text-5xl font-semibold'>Client Feedback</span>
                              <ul className='flex flex-wrap items-start justify-start gap-3 pl-5  '>
                                  <img src="/images/pic51.jpg" alt="" className='rounded-3xl' />
                                  <img src="/images/pic52.jpg" alt="" className='rounded-3xl' />                        
                              </ul>
                        </div>
                    </div>
                    <div className='mt-2 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 sm:p-4 md:px-12 lg:px-20 py-4 w-full'>
                          <div className='bg-white flex flex-col items-start justify-start gap-3 p-2  md:p-10  '>
                                <div className='flex flex-col items-start justify-start gap-1 '>
                                      <img src="/images/pic45.jpg" alt="" />
                                      <h2 className='text-lg md:text-2xl font-semibold'>Ralph Edwards</h2>
                                      <span className='text-gray-500 text-lg md:text-xl font-semibold'>UI / UX Designer</span>
                                </div>
                                <p className='text-gray-500 text-base md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi, accusantium quae minus qui laboriosam fugiat a id voluptatibus modi ducimus.</p>
                          </div>
                          <div className='bg-white flex flex-col items-start justify-start gap-3 p-2  md:p-10 '>
                                <div className='flex flex-col items-start justify-start gap-1 '>
                                      <img src="/images/pic45.jpg" alt="" />
                                      <h2 className='text-lg md:text-2xl font-semibold'>Jerome Bell</h2>
                                      <span className='text-gray-500 text-lg md:text-xl font-semibold'>Web Designer</span>
                                </div>
                                <p className='text-gray-500 text-base md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi, accusantium quae minus qui laboriosam fugiat a id voluptatibus modi ducimus.</p>
                          </div>
                          <div className='bg-white flex flex-col items-start justify-start gap-3 p-2 md:p-10 '>
                                <div className='flex flex-col items-start justify-start gap-1 '>
                                      <img src="/images/pic45.jpg" alt="" />
                                      <h2 className='text-lg md:text-2xl font-semibold'>Annette Black</h2>
                                      <span className='text-gray-500 text-lg md:text-xl font-semibold'>Dog Trainer</span>
                                </div>
                                <p className='text-gray-500 text-base md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi, accusantium quae minus qui laboriosam fugiat a id voluptatibus modi ducimus.</p>
                          </div>
                    </div>
                  </div>           
            </div>

            <div className='w-full'>
                  <div className=' mt-24 mb-12 flex flex-col items-center justify-center  w-full'>
                        <div className='mt-2 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 sm:p-4 md:px-12 lg:px-20 py-4 w-full'>
                            <div className='bg-[#b8f1f5] flex flex-col items-start justify-cneter gap-4 p-11 '>
                                  <h2 className='sm:text-xl md:text-2xl lg:text-3xl font-bold'>Exclusive offers for you</h2>
                                  <h2 className='text-gray-400'>Get weekly deals, valuable health information and more.</h2>
                                  <button className=" flex flex-wrap items-center justify-center gap-3 p-2 border-2 border-black bg-[#b8f1f5] hover:bg-[#7cc934] hover:text-white cursor-pointer w-40 ">
                                          <span className=' text-lg md:text-2xl'>Sign Up</span>
                                  </button>
                            </div>
                            <div className='bg-[#f7f3d5] flex flex-col items-start justify-center gap-4 p-12 '>
                                  <h2 className='sm:text-xl md:text-2xl lg:text-3xl font-bold'>Join Our Community</h2>
                                  <h2 className='text-gray-400'>Get weekly deals, valuable health information and more.</h2>
                                  <button className=" flex flex-wrap items-center justify-center gap-3 p-2 border-2 border-black bg-[#f7f3d5] hover:bg-[#7cc934] hover:text-white cursor-pointer w-60 ">
                                          <span className=' text-lg md:text-2xl'>Join Free Now</span>
                                  </button>
                            </div>
                            <div className='bg-[#fad4f9] flex flex-col items-start justify-center gap-4 p-9 '>
                                  <h2 className='sm:text-xl md:text-2xl lg:text-3xl font-bold'>Get our FREE app Now!</h2>
                                  <h2 className='text-gray-400'>Get weekly deals, valuable health information and more.</h2>
                                  <div className='flex flex-wrap items-center justify-center gap-3 p-2 '>
                                          <div className=" flex flex-wrap items-center justify-center gap-3  border-2 bg-black w-30 h-13 p-2 ">
                                                  <img src="/images/play-store.png" alt="" className='w-full' />

                                          </div>
                                          <div className=" flex flex-wrap items-center justify-center gap-3 border-2 bg-black w-30 h-13 p-2 ">
                                                  <img src="/images/apple-store.png" alt="" className='w-full' />
                                          </div>

                                  </div>
                             </div>
                        </div>
                  </div>
            </div>

            <div className='w-full'>
                <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-between sm:p-4 md:px-12 lg:px-20 py-4 w-full'>
                    <div className='flex flex-wrap items-stretch justify-start gap-4 '>
                          <img src="/images/pic56.jpg" alt="" />
                          <div className='flex flex-col items-start justify-start gap-1'>
                                <span className='text-lg md:text-xl font-black'>Free Delivery</span>
                                <h2 className='text-gray-400'>Free shipping on <br /> all order</h2>
                          </div>
                    </div>
                    <div className='flex flex-wrap items-stretch justify-start gap-4 '>
                          <img src="/images/pic57.jpg" alt="" />
                          <div className='flex flex-col items-start justify-start gap-1'>
                                <span className='text-lg md:text-xl font-black'>Money Return</span>
                                <h2 className='text-gray-400'>Back guarantee under <br /> 7 day</h2>
                          </div>
                    </div>
                    <div className='flex flex-wrap items-stretch justify-start gap-4 '>
                          <img src="/images/pic58.jpg" alt="" />
                          <div className='flex flex-col items-start justify-start gap-1'>
                                <span className='text-lg md:text-lg font-black'>Online Support 24/7</span>
                                <h2 className='text-gray-400'>Support online 24 <br /> hours a day</h2>
                          </div>
                    </div>
                    <div className='flex flex-wrap items-stretch justify-start gap-4 '>
                          <img src="/images/pic59.jpg" alt="" />
                          <div className='flex flex-col items-start justify-start gap-1'>
                                <span className='text-lg md:text-xl font-black'>Reliable</span>
                                <h2 className='text-gray-400'>Trusted by 1000+ <br /> brands</h2>
                          </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-black'>
                  <div className='flex flex-col items-start justify-start gap-2 sm:p-2 md:px-4  w-full '>
                      <div className='m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start justify-between sm:p-4 md:px-12 lg:px-20 p-2 md:py-16 w-full'>
                          <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                <img src="/images/logo-light.svg" alt="" />
                                <h2 className='text-gray-400 text-lg md:text-xl'>It helps designers plan out where the content will sit, the content to be written and approved.</h2>
                                <div className='flex flex-wrap items-start justify-start gap-4 '>
                                    <img src="/images/pic60.jpg" alt="" className='rounded-3xl'/>
                                    <img src="/images/pic61.jpg" alt="" className='rounded-3xl' />
                                    <img src="/images/pic62.jpg" alt="" className='rounded-3xl' />
                                    <img src="/images/pic63.jpg" alt="" className='rounded-3xl' />
                                </div>
                          </div>
                          
                          <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                <span className='text-white text-lg md:text-2xl font-bold'>Services</span>
                                
                                <div className='flex flex-col items-start justify-start gap-4 '>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Login</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Wishlist</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Return Policy</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Testimonial</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Shopping FAQs</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Privacy Policy</span>
                                    
                                </div>
                          </div>

                          <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                <span className='text-white text-lg md:text-2xl font-bold'>Company</span>
                                 <div className='flex flex-col items-start justify-start gap-4 '>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Home</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>About Us</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>How its work</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Pages</span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Blog </span>
                                    <span className='text-gray-400 text-lg md:text-xl font-semibold hover:text-white cursor-pointer'>Contact Us</span>
                                    
                                </div>

                          </div>
                          <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                <span className='text-white text-lg md:text-2xl font-bold'>Contact</span>
                                <div className='flex flex-col items-start justify-start gap-4 '>
                                   <h2 className='text-gray-400 text-lg font-bold'>4517 Washington Ave. Manchester, Kentucky 39495</h2>                                                                        
                                </div>
                                <div className='flex flex-wrap items-start justify-start gap-4'>
                                    <img src="/images/pic64.jpg" alt="" className='rounded-3xl' />
                                    <span className='text-gray-400 text-lg font-bold hover:text-green-500 cursor-pointer'>711-2880 Nulla St.</span>
                                </div>
                                <div className='flex flex-wrap items-center justify-start gap-2'>
                                    <img src="/images/pic65.jpg" alt="" className='rounded-3xl' />
                                    <div className='flex flex-col items-start justify-start gap-1 '>
                                      <span className='text-gray-400 text-lg font-bold hover:text-green-500 cursor-pointer'>+964 742 44 763</span>
                                      <span className='text-gray-400 text-lg font-bold'>Mon-Sat: 9AM - 5PM</span>
                                    </div>
                                    
                                </div>
                          </div>
                      </div>
                      <hr className='text-gray-400 font-bold sm:p-4 md:px-12 lg:px-20  w-full' />
                      <div className='flex flex-wrap items-center justify-between gap-2  sm:p-4 md:px-12 lg:px-20 p-2 md:py-16 w-full'>
                            <span className='text-gray-400 text-lg font-bold'>© All Copyright 2024 by Addina</span>
                            <div className='flex flex-wrap items-center justify-center gap-3'>
                                  <img src="/images/payoneer.png" alt="" />
                                  <img src="/images/maser.png" alt="" />
                                  <img src="/images/paypal.png" alt="" />
                            </div>
                            <span className='text-gray-400 text-lg font-bold'>Terms & Condition Privacy Policy</span>
                      </div>
                  </div>                    
             </div>

        </>
    )
}
export default Home;