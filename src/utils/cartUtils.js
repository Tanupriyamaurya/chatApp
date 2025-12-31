export const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
