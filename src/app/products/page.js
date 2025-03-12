"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Star, ShoppingCart } from "lucide-react";
import { addToCart } from "@/utils/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Manage button loading state

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  
  // ✅ Add to Cart Functionality
  const handleAddToCart = async (product) => {
    try {
      setLoading(true);
  
      await addToCart(product);
  
      alert(`🛒 ${product.name} added to cart successfully!`);
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      alert(`❌ Failed to add item to cart: ${error.response?.data?.message || "Please try again."}`);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <Head>
        <title>Products | Mutton Maamu</title>
      </Head>
      <div className="min-h-screen px-6 py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-red-600 mt-10">
          Our Fresh Mutton Collection
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              {/* Product Details */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-lg text-gray-600 mt-1">₹{product.price}/kg</p>

                {/* Rating & Delivery */}
                <div className="flex justify-center items-center gap-4 mt-2">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">Delivery in 2-5 days</span>
                </div>

                {/* ✅ Add to Cart Button */}
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="mt-4 flex items-center justify-center bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 w-full disabled:opacity-50 cursor-pointer"
                  disabled={loading}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  {loading ? "Adding..." : "Add to Cart"}
                </button>
              </div>

              {/* Sale Tag */}
              <span className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
                Best Seller
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
