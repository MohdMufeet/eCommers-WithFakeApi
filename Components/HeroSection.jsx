import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
   <>
  
    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-6 rounded-lg shadow-md">
  {/* Left Section */}
  <div className="md:w-1/2 text-center md:text-left space-y-4">
    <h2 className="text-3xl font-bold text-gray-800">
      One Stop Solution <span className="text-pink-500">E-Store</span>
    </h2>
    <p className="text-lg text-gray-600">Discover exclusive deals and products tailored for you.</p>
    <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
      Shop Now
    </button>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
    
    <Image
        src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"
        alt="Mobile phone image"
        width={600}
        height={600}
       
      />
  </div>
</div>
    </> 
  )
}

export default HeroSection