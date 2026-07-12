import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              Discover Amazing Products at the Best Prices
            </h1>

            <p className="mt-6 text-lg text-green-100">
              Shop from thousands of products with fast delivery, secure
              payments, and exciting offers.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/product"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Shop Now
              </Link>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900"
              alt="Shopping"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <div className="text-5xl">🚚</div>
              <h3 className="text-xl font-bold mt-4">Free Delivery</h3>
              <p className="text-gray-600 mt-2">
                Fast and reliable shipping on selected orders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <div className="text-5xl">💳</div>
              <h3 className="text-xl font-bold mt-4">Secure Payment</h3>
              <p className="text-gray-600 mt-2">
                100% secure payment with trusted gateways.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <div className="text-5xl">🎁</div>
              <h3 className="text-xl font-bold mt-4">Best Offers</h3>
              <p className="text-gray-600 mt-2">
                Get exclusive discounts every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Beauty 💄",
              "Fragrances 🌸",
              "Furniture 🛋️",
              "Groceries 🛒",
              "Electronics 💻",
              "Fashion 👕",
              "Shoes 👟",
              "Accessories ⌚",
            ].map((category) => (
              <div
                key={category}
                className="bg-green-500 text-white text-center py-10 rounded-xl text-xl font-bold hover:bg-green-600 cursor-pointer transition"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Start Shopping?
          </h2>

          <p className="mt-4 text-lg">
            Browse hundreds of products and grab today's best deals.
          </p>

          <Link
            to="/product"
            className="inline-block mt-8 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;