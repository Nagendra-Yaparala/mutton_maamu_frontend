import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Mutton Maamu</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">📍 Location: Hyderabad, India</p>
        <p className="text-lg text-gray-700">📞 Phone: +91 8331064219</p>
        <p className="text-lg text-gray-700">📧 Email: contact@muttonmaamu.com</p>
        <div className="mt-6">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
            Call Now
          </button>
        </div>
      </div>
    </>
  );
}
