import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const testimonials = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    name: "John Doe",
    role: "Web Developer",
    comment:
      "Produk dari toko ini sangat berkualitas dan pelayanan yang diberikan sangat memuaskan!",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    name: "Jane Smith",
    role: "UI/UX Designer",
    comment:
      "Pengalaman belanja yang luar biasa. Barang sampai tepat waktu dan sesuai ekspektasi.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100",
    name: "Michael Brown",
    role: "Software Engineer",
    comment:
      "Harga terjangkau dan produk sangat memuaskan! Pasti saya akan kembali membeli lagi.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/100",
    name: "Sarah Connor",
    role: "Product Manager",
    comment:
      "Rekomendasi toko terbaik untuk perangkat komputer dan laptop. Layanan sangat profesional!",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/100",
    name: "David Wilson",
    role: "Tech Enthusiast",
    comment:
      "Sangat puas dengan pengalaman berbelanja di sini. Produk sesuai deskripsi dan harga bersaing.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/100",
    name: "Emma Watson",
    role: "Graphic Designer",
    comment:
      "Pelayanan sangat ramah dan responsif. Produk yang saya beli sangat membantu pekerjaan saya.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(autoScroll); // Clear interval on unmount
  }, []);

  return (
    <div id="testimonials" className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonial Clients</h2>

      <div className="flex justify-center items-center gap-4">
        {/* <button
          onClick={prevSlide}
          className="text-3xl"
        >
          ◀
        </button> */}

         {/* Button Prev */}
         <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-white text-purple-500 shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-110"
        >
          <AiOutlineLeft className="text-2xl" />
        </button>

        <div className="flex gap-6 overflow-hidden">
          {testimonials
            .slice(currentIndex, currentIndex + 3) // Display only 3 items
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-80"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {testimonial.name}
                </h3>
                <p className="text-center text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-center">{testimonial.comment}</p>
              </div>
            ))}
        </div>

           {/* Button Next */}
           <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-white text-purple-500 shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-110"
        >
          <AiOutlineRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
