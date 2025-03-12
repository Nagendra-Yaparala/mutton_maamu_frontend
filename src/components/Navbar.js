"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { SignInButton, UserButton, useUser, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, user } = useUser(); // Get authentication state
  const { signOut } = useAuth(); // Clerk signOut function

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-black tracking-wide">
          Mutton <span className="text-amber-500">Maamu</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-lg font-semibold text-black">
          {["/", "/products", "/cart", "/contact"].map((path) => (
            <Link 
              key={path} 
              href={path}
              className={`transition duration-300 ${
                pathname === path ? "text-amber-500 font-bold" : "hover:text-amber-500"
              }`}
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </Link>
          ))}
        </div>

        {/* Order Button, Cart Icon & Authentication */}
        <div className="hidden md:flex items-center gap-6">
          <button className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            Order Now
          </button>
          
          <Link href="/cart">
            <ShoppingCart 
              className={`transition duration-300 cursor-pointer ${
                pathname === "/cart" ? "text-amber-500" : "text-black hover:text-amber-500"
              }`} 
              size={28} 
            />
          </Link>

          {/* User Authentication Section */}
          {isSignedIn ? (
            <div className="relative group">
              <UserButton />
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link href="/orders" className="block px-4 py-2 text-black hover:bg-gray-100 rounded">My Orders</Link>
                <button 
                  onClick={() => signOut()} // Properly logs out
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Sign In</button>
            </SignInButton>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg p-6 absolute top-16 w-full text-center text-black shadow-md">
          {["/", "/products", "/cart", "/contact"].map((path) => (
            <Link 
              key={path} 
              href={path} 
              className={`block py-2 text-lg ${
                pathname === path ? "text-amber-500 font-bold" : "hover:text-amber-500"
              }`}
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </Link>
          ))}

          {/* Authentication in Mobile Menu */}
          {isSignedIn ? (
            <div className="flex flex-col items-center gap-3 mt-4">
              <div className="flex justify-center items-center gap-3">
              <UserButton />
              <span className="text-lg font-semibold">{user?.firstName}</span>
              </div>

              <button 
                onClick={() => signOut()} // Properly logs out in mobile view
                className="mt-2 w-full bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <SignInButton mode="modal">
                <button className="block w-full bg-black text-white px-5 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition">Sign In</button>
              </SignInButton>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
