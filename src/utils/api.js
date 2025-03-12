import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api",
});

// ✅ Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await API.get("api/products");
    console.log("✅ Products fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching products:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch products");
  }
};

// ✅ Fetch all cart items
export const fetchCart = async () => {
  try {
    const response = await API.get("api/cart");
    console.log("✅ Cart items fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching cart:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch cart");
  }
};

// ✅ Add product to cart
export const addToCart = async (product) => {
  try {
    const response = await API.post("api/cart", {
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    console.log("✅ Product added to cart successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error adding to cart:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to add product to cart");
  }
};

// ✅ Remove item from cart
export const removeFromCart = async (itemId) => {
  try {
    await API.delete(`api/cart/${itemId}`);
    console.log("✅ Item removed from cart successfully");
  } catch (error) {
    console.error("❌ Error removing item from cart:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to remove item from cart");
  }
};
