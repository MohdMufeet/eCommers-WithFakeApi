"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({key , data, price , img , id}) => {
  return (
    <>
   
    <div key={key} className="w-[100%] h-[400px] mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
 <div className='h-[200px] w-full relative'>
  <Image
            src={img}
            alt="Mobile phone image"
            width={100}
            height={100}
            className="w-full h-48 object-cover"
            // style={{ objectFit: 'cover' }}
          />
          </div>
  <div className="p-4 text-gray-800 flex-grow flex flex-col justify-between">
    <h2  className="text-sm font-semibold">{data}</h2>
    <p className="text-pink-600 font-bold text-xl mb-4">{price}</p>

    <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded transition duration-200">
      
      Buy Now
    </button>
    
  </div>
</div>
    
</>
  )
}

export default Product

