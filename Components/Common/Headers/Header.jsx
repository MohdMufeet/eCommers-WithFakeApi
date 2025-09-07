import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <nav className='flex justify-around items-center mx-auto py-3 text-black bg-white'>
      <div>
      <h1 className='text-2xl'>E-<span className='text-[#ec4899] '>Store</span></h1>
</div>

<ul className='flex justify-around items-center gap-4'>
  <li><Link href="/">HOME</Link></li>
  {/* <li><Link href="/store">Store</Link></li> */}
  <li><Link href="/store">STORE</Link></li>
</ul>
    </nav>
    </>
  )
}

export default Header