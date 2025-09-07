
import React from 'react'
import Product from './Product'
// import Products from './Product';

export default async function Featured() {
  const res = await fetch('https://fakestoreapi.com/products?limit=8')
  const fakeData = await res.json();
  console.log(fakeData)
  return (
    <>
    <div className="bg-[#ececec] p-4">

    <div className="text-center my-4 font-bold text-xl">Featured products</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {fakeData.map((p,i)=>(<Product key={i} id={p.id} data={p.title} img={p.image} price={p.price} />))}
        
   

    
    </div>
    </div>
    </>
  )
}

