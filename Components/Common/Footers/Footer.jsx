import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Company Info */}
    <div>
      <h3 className="text-xl font-bold mb-2">E-Store</h3>
      <p className="text-gray-400">Your one-stop solution for exclusive products and deals.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#" className="hover:text-pink-400">Home</a></li>
        <li><a href="#" className="hover:text-pink-400">Shop</a></li>
        <li><a href="#" className="hover:text-pink-400">About Us</a></li>
        <li><a href="#" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </div>

    {/* Subscribe Section */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
      <p className="text-gray-400 mb-4">Get updates on new arrivals and offers.</p>
      <form className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-10 text-center text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} E-Store. All rights reserved.
  </div>
</footer>

    </>
  )
}

export default Footer