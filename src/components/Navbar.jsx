import React, { useState } from "react";
import { Link } from "react-scroll"; // Import for smooth scrolling, if needed
// import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4 fixed w-full z-50">
    // <nav className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
    //   <div className="container mx-auto flex justify-between">
    //     <img src="./images/djk.png" width={28} height={28}/>
    //     <div className="text-black-700 text-4xl font-bold items-center text-center">
    //       <Link to="home" smooth={true} duration={500}>
    //         Darsa Jaya Komputer
    //       </Link>
    //     </div>
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo dan Nama */}
        <div className="flex items-center space-x-2">
          <img
            src="./images/djk.png"
            alt="logo darsa jaya komputer"
            className="w-10 h-10"
          />
          <span className="text-white text-xl font-bold tracking-wide">
            Darsa Jaya Komputer
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-black-700 text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="profile" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Profile
          </Link>
          <Link to="products" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Products
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Projects
          </Link>
          <Link to="testimonials" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Testimonials
          </Link>
          <Link to="tutorials" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Tutorials
          </Link>
          <Link to="contacts" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Contacts
          </Link>
          {/* <DarkModeToggle/> */}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 md:hidden flex flex-col items-center space-y-4 py-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="profile"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Profile
            </Link>
            <Link
              to="products"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              to="tutorials"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Tutorials
            </Link>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className="text-white font-medium hover:underline cursor-pointer"
              onClick={toggleMenu}
            >
              Contacts
            </Link>
            {/* <DarkModeToggle/> */}
          </div>
        )}
      </div>
    </nav>
  );
}
