"use client";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCart } from "@/utils/api";
import Head from "next/head";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import axios from "axios"; // ✅ Import axios for delete request

// ✅ Fix API instance to use the correct base URL
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // ✅ Use correct env variable
});

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Prevent multiple clicks

  useEffect(() => {
    const loadData = async () => {
      try {
        const productsData = await fetchProducts();
        const cartData = await fetchCart();
        setProducts(productsData);
        setCart(cartData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, []);

  // ✅ Delete Item from Cart
  const handleDeleteItem = async (itemId) => {
    if (loading) return;
    setLoading(true); // Prevent multiple clicks

    try {
      await API.delete(`/api/cart/${itemId}`); // ✅ Fix API route
      setCart(cart.filter((item) => item._id !== itemId)); // ✅ Remove from UI
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to remove item from cart");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Default Images for Lamb & Goat Leg
  const defaultImages = {
    lamb: "https://i.imgur.com/3fX1U5b.png",
    goatLeg: "https://i.imgur.com/2m2b0pQ.png",
  };

  return (
    <div>
      <Head>
        <title>Cart | Mutton Maamu</title>
      </Head>

      {/* Cart Section */}
      <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
        <h1 className="text-4xl font-extrabold text-red-600 mb-6 mt-20">🛒 Your Cart</h1>

        {/* Empty Cart State */}
        {cart.length === 0 ? (
          <div className="text-center mt-6">
            <p className="text-gray-600 text-lg">Your cart is empty. Add some delicious mutton!</p>
            <Link href="/products">
              <button className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
                Explore Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
            {/* Cart Items */}
            <ul>
              {cart.map((item) => (
                <li key={item._id} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || defaultImages.lamb}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-red-700">{item.name}</h2>
                      <p className="text-gray-700 font-medium">₹{item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="text-red-500 hover:text-red-700 transition"
                    disabled={loading} // ✅ Prevent multiple clicks
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>

            {/* Cart Total */}
            <div className="flex justify-between mt-6 text-xl font-bold">
              <span>Total:</span>
              <span className="text-red-600">₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-amber-500 text-white py-3 rounded-lg shadow-lg hover:scale-105 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
