// import Product from '@/Components/Product';
// import React from 'react'

// const page = async () => {
//   const res = await fetch('https://fakestoreapi.com/products')
//   const data = res.json();
//   return (
//     <>
//     {/* {
//       data.map(
//         (p,n) => (
//           <Product key={n} id={p.id} data={p.title} img={p.image} price={p.price} />
//         )
//       )
//     } */}
//     {data.map((p,i)=>(<Product key={i} id={p.id} data={p.title} img={p.image} price={p.price} />))}
//     </>
//   )
// }



// export default page


import React from 'react'
 import Product from '@/Components/Product';
// import Products from './Product';

export default async function Featured() {
  const res = await fetch('https://fakestoreapi.com/products')
  const fakeData = await res.json();
  console.log(fakeData)
  return (
    <>
    <div className="bg-[#ececec] p-4">

    <div className="text-center my-4 font-bold text-xl">Our Store</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {fakeData.map((p,i)=>(<Product key={i} id={p.id} data={p.title} img={p.image} price={p.price} />))}
        
   

    
    </div>
    </div>
    </>
  )
}

