import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 top-0 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
