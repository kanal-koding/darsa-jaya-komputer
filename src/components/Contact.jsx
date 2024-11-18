
// import React, { useState } from 'react';
// import Map from './Map';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Tambahkan logika untuk mengirim data ke server atau database
//     alert('Pesan Anda telah terkirim!');
//   };

//   return (
//     // <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 p-8 rounded-lg shadow-lg container mx-auto">
//     <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white min-h-screen py-12 p-8 shadow-lg">
//       <h1 className="text-4xl font-bold text-white text-center mb-6">Hubungi Kami</h1>
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <form onSubmit={handleSubmit}>
//           {/* <div className="mb-4"> */}
//           {/* <div className="my-6"> */}
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//               Nama Anda
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Masukkan nama Anda"
//               required
//             />
//           {/* </div> */}
//           {/* <div className="my-6"> */}
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//               Email Anda
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Masukkan email Anda"
//               required
//             />
//           {/* </div> */}
//           {/* <div className="my-6"> */}
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
//               Pesan Anda
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Tulis pesan Anda di sini"
//               required
//             ></textarea>
//           {/* </div> */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all transform hover:scale-105"
//           >
//             Kirim Pesan
//           </button>
//         </form>
//       </div>
//       <Map/>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Untuk status pengiriman form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set status loading atau kirim pesan
    setStatus("Sending...");

    // Kirim email menggunakan EmailJS
    emailjs
      .sendForm("service_yourServiceID", "template_yourTemplateID", e.target, "user_yourUserID")
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Try again later.");
        }
      );

    // Clear form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contacts" className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">
          Hubungi Kami
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0">
          {/* Form Kontak */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                   required placeholder="masukan Nama Anda ..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukan Email Anda ..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Silahkan Masukan Pesan Anda ..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Kirim
              </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
          </div>

          {/* Map */}
          <div className="flex w-full lg:w-1/2 lg:mt-0">
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg">
              <iframe
                title="Google Map"
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6398426448104!2d105.48580687407807!3d-4.831751249778157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3f61787c30a1b1%3A0xb043e0bb84569381!2sDarsa%20Jaya%20Komputer!5e0!3m2!1sid!2sid!4v1731296927552!5m2!1sid!2sid"
                style={{ border: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
