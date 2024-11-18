import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Alamat Toko */}
        <div>
        <h2 className="text-lg font-bold">Darsa Jaya Komputer</h2>
        <p>Jalan Raya Seputih Banyak</p>
        <p>Kelurahan Setia Bakti</p>
        <p>Kecataman Seputih Banyak</p>
        <p>Lampung Tengah, Lampung 34156</p>
        <p>Email:<a> darsajayakomputer@gmail.com</a></p>
        <p>No HP: +6285213007480</p>
        </div>
        {/* Navigation Links */}
        <div className="text-center">
        <h2 className="text-lg font-bold">Navigasi</h2>
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm hover:underline px-4"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("profile")}
            className="text-sm hover:underline px-4"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-sm hover:underline px-4"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm hover:underline px-4"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm hover:underline px-4"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("tutorials")}
            className="text-sm hover:underline px-4"
          >
            Tutorials
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-sm hover:underline px-4"
          >
            Contacts
          </button>
          
        </div>
         {/* Media Sosial */}
         <div>
          <h2 className="text-lg text-center font-bold mb-4">Ikuti Kami</h2>
          <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 text-center" 
          >
            Facebook<FaFacebook size={24}/> 
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            Instagram
            <FaInstagram size={24} className="justify-center items-center"/>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            Tiktok
            <FaTiktok size={24}/>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            Twitter
            <FaTwitter size={24}/>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
          >
            Youtube
            <FaYoutube size={24} />
          </a>
          <div/>
          </div>
      
        <div/>
        </div>

        </div>
                  {/* Footer Text */}
                  <div className="mt-6 text-center text-sm text-white opacity-75 justify-center">
          &copy; 2024 Computer Store. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
