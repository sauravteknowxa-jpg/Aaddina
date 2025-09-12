function About(){
    return(
        <>
            <div className='w-full mt-8 mb-4'>
              <div className=" flex flex-col md:flex-row bg-white gap-4  sm:p-4 md:px-12 lg:px-20 py-4 w-full">
                <div className='flex flex-wrap items-center justify-center gap-4 p-2 md:px-4 w-full'>
                    <div className='w-full md:w-[40%] bg-cover  ' style={{backgroundImage:"url(/images/pic48.jpg)"}}>
                          <div className='flex flex-col items-start justify-start gap-6 px-4 py-20'>
                                  <span className='text-green-400 text-2xl'>30% Off</span>
                                  <h2 className='text-black sm:text-2xl md:text-4xl lg:text-6xl'>Fresh Vegetables</h2>
                                  <button className="flex flex-wrap w-36 h-12 items-center justify-center gap-3  p-3 bg-green-500 text-white">
                                    <span>Buy Now</span>
                                    <img src="/images/pic44.jpg" alt="" />
                                  </button>
                        
                          </div>
                          
                    </div>
                    <div className='w-full md:w-[54%] bg-cover' style={{backgroundImage:"url(/images/pic49.jpg)"}}>
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
export default About;