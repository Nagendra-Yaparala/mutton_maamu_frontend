import Head from "next/head";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Mutton Maamu</title>
      </Head>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10 text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mt-16">Get in Touch</h1>
        <p className="mt-3 text-lg text-gray-700 max-w-xl">
          Have questions or need fresh mutton delivered? Reach out to us!
        </p>
        
        <div className="mt-8 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <span className="text-lg font-medium">Galiveedu Gorancheruvu, India</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <FaPhoneAlt className="text-red-500 text-2xl" />
              <a href="tel:+918331064219" className="text-lg font-medium hover:text-red-600 transition">
                +91 8331064219
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <FaEnvelope className="text-red-500 text-2xl" />
              <a href="mailto:contact@muttonmaamu.com" className="text-lg font-medium hover:text-red-600 transition">
                contact@muttonmaamu.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <a href="https://wa.me/918331064219" target="_blank" className="text-lg font-medium hover:text-green-600 transition">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="tel:+918331064219">
              <button className="w-full bg-red-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
