import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  // Increase Quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, q: item.q + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, q: item.q - 1 }
          : item
      )
      .filter((item) => item.q > 0);

    setCart(updatedCart);
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Order Summary
  const totalItems = cart.reduce((sum, item) => sum + item.q, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.q,
    0
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-4xl font-bold">🛒 Cart is Empty</h1>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart
        </h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-5 mb-5 flex flex-col md:flex-row gap-5"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-40 h-40 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500 capitalize mt-2">
                {item.category}
              </p>

              <p className="text-green-600 text-xl font-bold mt-3">
                ${item.price}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-9 h-9 bg-gray-200 rounded-full text-xl hover:bg-gray-300"
                >
                  -
                </button>

                <span className="text-lg font-bold">
                  {item.q}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-9 h-9 bg-green-600 text-white rounded-full text-xl hover:bg-green-700"
                >
                  +
                </button>
              </div>

              <p className="mt-4 font-semibold text-lg">
                Total: $
                {(item.price * item.q).toFixed(2)}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-lg rounded-xl p-6 h-fit sticky top-24">
        <h2 className="text-2xl font-bold mb-5">
          Order Summary
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>
              {shipping === 0 ? (
                <span className="text-green-600 font-bold">
                  Free
                </span>
              ) : (
                `$${shipping}`
              )}
            </span>
          </div>

          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>

            <span className="text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={() => navigate("/products")}
            className="w-full mt-3 border border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;