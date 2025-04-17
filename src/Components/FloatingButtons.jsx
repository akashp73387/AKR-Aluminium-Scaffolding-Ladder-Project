// Components/FloatingButtons.jsx
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = "+918667662590"; // your company number
  const whatsappMessage = "Hi, I’d like to know more about your products.";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        title="Call Us"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
