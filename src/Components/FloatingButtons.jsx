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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-gray-100 text-blue-950  p-3 rounded-full shadow-lg transition-all hover:shadow-xl mb-8"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingButtons;
