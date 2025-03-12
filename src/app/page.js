"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Animated Background Circles */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-10 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/30 rounded-full blur-2xl"
        ></motion.div>

        {/* Hero Images */}
        <div className="relative flex items-center justify-center gap-8 mt-10">
  {/* Left Image with 3D Card Effect */}
  <motion.div
    initial={{ opacity: 0, x: -50, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    whileHover={{ scale: 1.1, y: -10 }}
    transition={{ duration: 0.8 }}
    className="relative bg-white p-2 rounded-2xl shadow-xl border border-gray-200 transform transition-all duration-300 hover:shadow-red-400/60"
  >
    <Image 
      src="/4.jpeg" 
      alt="Delicious Mutton Dish" 
      width={180} 
      height={180} 
      className="rounded-xl"
    />
  </motion.div>

  {/* Center Image - Main Focus */}
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.15, y: -10 }}
    transition={{ duration: 1 }}
    className="relative bg-white p-3 rounded-3xl shadow-2xl border-4 border-red-600 hover:shadow-red-600/70 transition-all duration-300"
  >
    <Image 
      src="/1.jpeg" 
      alt="Premium Fresh Mutton" 
      width={260} 
      height={260} 
      className="rounded-3xl"
    />
  </motion.div>

  {/* Right Image - 3D Card Effect */}
  <motion.div
    initial={{ opacity: 0, x: 50, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    whileHover={{ scale: 1.1, y: -10 }}
    transition={{ duration: 0.8 }}
    className="relative bg-white p-2 rounded-2xl shadow-xl border border-gray-200 transform transition-all duration-300 hover:shadow-yellow-400/60"
  >
    <Image 
      src="/6.jpeg" 
      alt="Farm Fresh Mutton" 
      width={180} 
      height={180} 
      className="rounded-xl"
    />
  </motion.div>
</div>




        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-gray-900 mt-6"
        >
          <span className="text-red-500">W</span>elcome to{" "}
          <span className="text-red-600">Mutton Maamu</span> 🐏
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xl text-gray-700 mt-4"
        >
          Order fresh mutton delivered to your doorstep!
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mt-6 flex gap-4"
        >
          <Link href="/products">
            <button className="px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
              Order Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-900 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
  <h2 className="text-5xl font-bold text-gray-900 mb-3">Why Choose Us?</h2>
  <p className="text-lg text-gray-600">Fresh & hygienic mutton, directly sourced from farms!</p>

  <div className="mt-10 flex flex-wrap justify-center gap-8">
    {/* Feature 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ duration: 0.6 }}
      className="relative w-80 p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 hover:shadow-red-400/50 transition duration-300"
    >
      <Image src="/4.jpeg" alt="100% Fresh" width={90} height={90} className="mx-auto rounded-full shadow-lg border-4 border-red-500" />
      <h3 className="text-2xl font-semibold text-red-500 mt-4">100% Fresh</h3>
      <p className="text-gray-600 mt-2">Our mutton is freshly cut and delivered within hours!</p>
    </motion.div>

    {/* Feature 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: -2 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-80 p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 hover:shadow-yellow-400/50 transition duration-300"
    >
      <Image src="/2.jpg" alt="Farm Direct" width={90} height={90} className="mx-auto rounded-full shadow-lg border-4 border-yellow-500" />
      <h3 className="text-2xl font-semibold text-yellow-500 mt-4">Farm Direct</h3>
      <p className="text-gray-600 mt-2">Sourced from healthy livestock raised with care.</p>
    </motion.div>

    {/* Feature 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-80 p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 hover:shadow-green-400/50 transition duration-300"
    >
      <Image src="/6.jpeg" alt="Fast Delivery" width={90} height={90} className="mx-auto rounded-full shadow-lg border-4 border-green-500" />
      <h3 className="text-2xl font-semibold text-green-500 mt-4">Fast Delivery</h3>
      <p className="text-gray-600 mt-2">Guaranteed delivery within 2 hours in major cities!</p>
    </motion.div>
  </div>
</section>
{/* Testimonials Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 text-center">
  <h2 className="text-5xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Hear from our happy customers about their experience with Mutton Maamu.
  </p>

  <div className="mt-12 flex flex-wrap justify-center gap-10">
    {/* Testimonial 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="w-96 p-8 bg-white rounded-2xl shadow-xl border border-gray-300 relative"
    >
      <Image src="/4.jpeg" alt="Customer" width={60} height={60} className="mx-auto rounded-full border-2 border-red-500" />
      <h4 className="text-xl font-bold mt-4 text-red-500">Rajesh Kumar</h4>
      <p className="text-yellow-500 flex justify-center mt-2 text-lg">⭐⭐⭐⭐⭐</p>
      <p className="text-gray-700 italic mt-3">"Best quality mutton I have ever had! Super fresh and fast delivery."</p>
    </motion.div>

    {/* Testimonial 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-96 p-8 bg-white rounded-2xl shadow-xl border border-gray-300 relative"
    >
      <Image src="/5.jpeg" alt="Customer" width={60} height={60} className="mx-auto rounded-full border-2 border-yellow-500" />
      <h4 className="text-xl font-bold mt-4 text-yellow-500">Sneha Reddy</h4>
      <p className="text-yellow-500 flex justify-center mt-2 text-lg">⭐⭐⭐⭐⭐</p>
      <p className="text-gray-700 italic mt-3">"Hygienic, neatly packed, and delivered on time. Love the service!"</p>
    </motion.div>

    {/* Testimonial 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-96 p-8 bg-white rounded-2xl shadow-xl border border-gray-300 relative"
    >
      <Image src="/6.jpeg" alt="Customer" width={60} height={60} className="mx-auto rounded-full border-2 border-green-500" />
      <h4 className="text-xl font-bold mt-4 text-green-500">Arjun Mehta</h4>
      <p className="text-yellow-500 flex justify-center mt-2 text-lg">⭐⭐⭐⭐⭐</p>
      <p className="text-gray-700 italic mt-3">"Great pricing and excellent quality! Highly recommend Mutton Maamu."</p>
    </motion.div>
  </div>
</section>


{/* How It Works Section */}
<section className="py-20 bg-white text-center">
  <h2 className="text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Ordering fresh mutton has never been easier! Just follow these three simple steps.
  </p>

  <div className="mt-12 flex flex-wrap justify-center gap-16">
    {/* Step 1 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-80 p-8 bg-gray-100 rounded-2xl shadow-lg border-l-4 border-red-500"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
        1
      </div>
      <Image src="/1.jpeg" alt="Choose Meat" width={90} height={90} className="mx-auto rounded-full" />
      <h3 className="text-2xl font-semibold mt-6 text-gray-900">Choose Your Cut</h3>
      <p className="text-gray-600 mt-3">Select from a variety of premium, farm-fresh mutton cuts.</p>
    </motion.div>

    {/* Step 2 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-80 p-8 bg-gray-100 rounded-2xl shadow-lg border-l-4 border-yellow-500"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
        2
      </div>
      <Image src="/2.jpg" alt="Order" width={90} height={90} className="mx-auto rounded-full" />
      <h3 className="text-2xl font-semibold mt-6 text-gray-900">Place Your Order</h3>
      <p className="text-gray-600 mt-3">Add items to your cart and complete the secure checkout process.</p>
    </motion.div>

    {/* Step 3 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative w-80 p-8 bg-gray-100 rounded-2xl shadow-lg border-l-4 border-green-500"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
        3
      </div>
      <Image src="/3.jpg" alt="Delivery" width={90} height={90} className="mx-auto rounded-full" />
      <h3 className="text-2xl font-semibold mt-6 text-gray-900">Get It Delivered</h3>
      <p className="text-gray-600 mt-3">Enjoy fresh, hygienic mutton delivered to your doorstep!</p>
    </motion.div>
  </div>
</section>


{/* Our Special Cuts Section */}
<section className="py-20 bg-gray-50 text-center">
  <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Special Cuts</h2>
  <div className="flex flex-wrap justify-center gap-10">
    {/* Cut 1 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-80 p-6 bg-white rounded-xl shadow-md border hover:shadow-red-500/50"
    >
      <Image src="/1.jpeg" alt="Tenderloin" width={120} height={120} className="mx-auto rounded-full" />
      <h3 className="text-2xl font-semibold mt-4 text-red-500">Tenderloin</h3>
      <p className="text-gray-600 mt-2">Perfect for juicy, flavorful curries.</p>
    </motion.div>

    {/* Cut 2 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-80 p-6 bg-white rounded-xl shadow-md border hover:shadow-yellow-500/50"
    >
      <Image src="/5.jpeg" alt="Lamb Chops" width={120} height={120} className="mx-auto rounded-full" />
      <h3 className="text-2xl font-semibold mt-4 text-yellow-500">Lamb Chops</h3>
      <p className="text-gray-600 mt-2">Ideal for grilling and pan-frying.</p>
    </motion.div>

    {/* Cut 3 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-80 p-6 bg-white rounded-xl shadow-md border hover:shadow-green-500/50"
    >
      <Image src="/6.jpeg" alt="Ribs & Shank" width={120} height={120} className="mx-auto rounded-full" />
      <h3 className="text-2xl font-semibold mt-4 text-green-500">Ribs & Shank</h3>
      <p className="text-gray-600 mt-2">Great for slow-cooked stews and soups.</p>
    </motion.div>
  </div>
</section>

{/* Newsletter Signup */}
{/* Subscription Section */}
<section className="py-16 bg-gradient-to-r from-amber-500 to-red-600 text-white text-center">
  <h2 className="text-5xl font-extrabold tracking-wide">Get Exclusive Deals!</h2>
  <p className="text-lg mt-3 opacity-90">
    Subscribe now and get fresh mutton deals straight to your inbox.
  </p>
  <div className="mt-6 flex justify-center">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="px-4 py-3 rounded-l-full w-80 text-black outline-none shadow-md"
    />
    <button className="px-6 py-3 bg-gray-900 rounded-r-full font-bold hover:bg-gray-800 transition shadow-md">
      Subscribe
    </button>
  </div>
</section>

{/* Footer */}
<footer className="py-12 bg-gray-950 text-gray-300 text-center">
  <div className="max-w-7xl mx-auto px-6">
    <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Mutton Maamu. All Rights Reserved.</p>
    <div className="flex justify-center gap-8 mt-6 text-sm font-semibold">
      <Link href="/privacy-policy" className="hover:text-amber-500 transition">Privacy Policy</Link>
      <Link href="/terms" className="hover:text-amber-500 transition">Terms of Service</Link>
    </div>
    <div className="flex justify-center gap-6 mt-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
        Twitter
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
        Instagram
      </a>
    </div>
  </div>
</footer>



    </div>
  );
}
