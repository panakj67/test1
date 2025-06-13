// HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="pt-28 pb-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6">
          Welcome to <span className="text-indigo-600">MyApp</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A modern, minimal and beautifully designed platform to explore creativity, productivity and innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full text-lg shadow-md transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gradient-to-br from-purple-100 to-white">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Fast Performance</h3>
              <p className="text-gray-600">Optimized for speed with minimal load times and seamless experience.</p>
            </div>
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gradient-to-br from-indigo-100 to-white">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Clean UI</h3>
              <p className="text-gray-600">A distraction-free, clean and user-friendly interface for everyone.</p>
            </div>
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gradient-to-br from-pink-100 to-white">
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Responsive Design</h3>
              <p className="text-gray-600">Looks great on all devices – mobile, tablet and desktop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-600">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
