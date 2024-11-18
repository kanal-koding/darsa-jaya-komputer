// import React from 'react';

// const Profile = () => {
//   return (
//     <div id="profile" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg text-gray-900 dark:text-gray-100 transition duration-300">
//       <img
//         src="https://via.placeholder.com/150"
//         alt="Profile"
//         className="w-32 h-32 rounded-full shadow-lg mb-4 border-4 border-blue-500 dark:border-blue-700 transition duration-300"
//       />
//       <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition duration-300">
//         John Doe
//       </h2>
//       <p className="text-center text-gray-700 dark:text-gray-300 transition duration-300">
//         Passionate web developer with expertise in creating dynamic and responsive websites. Skilled in React, Tailwind CSS, and modern web technologies.
//       </p>
//       <button className="mt-4 px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg shadow hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300">
//         Contact Me
//       </button>
//     </div>
//   );
// };

// export default Profile;

const Profile = () => {
  return (
    <section
      id="profile"
      className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 px-6 sm:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
          Welcome to <span className="text-yellow-300">DARSA JAYA</span> KOMPUTER
        </h1>
        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8 animate-fade-in-up delay-100">
          Solusi teknologi terbaik untuk kebutuhan Anda.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-semibold mb-4">Kenapa Memilih Kami?</h2>
            <ul className="list-disc list-inside text-left space-y-3">
              <li>Produk berkualitas tinggi dengan garansi resmi.</li>
              <li>Harga kompetitif tanpa mengorbankan kualitas.</li>
              <li>Pelayanan pelanggan profesional dan ramah.</li>
              <li>Produk selalu up-to-date dengan teknologi terbaru.</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="animate-slide-in-right">
            <img
              src="https://via.placeholder.com/400x300"
              alt="TechTrendz Store"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300">
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
