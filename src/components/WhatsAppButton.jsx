import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '6285213007480'; // Replace with your WhatsApp number (country code + number)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white py-3 px-4 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-600 transition duration-200"
      aria-label="Hubungi kami di WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="text-sm font-semibold">Hubungi WhatsApp</span>
    </a>
  );
}
