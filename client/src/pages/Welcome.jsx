// WelcomePage.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const WelcomePage = () => {
    const user = useSelector((state) => state.users.user);
    console.log(user);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200 text-center px-6">
      {/* Glass-like card */}
      <div className="bg-white/30 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4">
          Welcome, <span className="text-purple-700">{user?.name}</span>!
        </h1>
        <p className='text-xl'>Email : <span className='text-purple-800'>{user.email}</span></p>
        <p className="text-lg text-gray-700 max-w-md mx-auto">
          We're glad to have you here. Explore your dashboard, customize your profile, and enjoy the experience.
        </p>
        <button className="mt-8 px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-full text-lg shadow-md transition">
          Go to Dashboard
        </button>
      </div>

      {/* Optional Decoration */}
      <div className="absolute bottom-0 left-0 right-0 text-sm text-gray-500 pb-4">
        © 2025 MyApp — crafted with ❤️ by Team LNCT
      </div>
    </div>
  );
};

export default WelcomePage;
