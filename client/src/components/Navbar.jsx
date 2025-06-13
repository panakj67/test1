import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { setLogin, setUser } from '../Store/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const logout = async () => {
    try {
      await axios.get('/user/api/logout');
      toast.success("Logged out successfully");
      dispatch(setUser(null));
      dispatch(setLogin(false));
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>

        {user ? (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            {isHovered && (
              <div className="absolute top-10 right-0 w-48 bg-white text-gray-800 rounded-md shadow-lg z-20">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => dispatch(setLogin(true))}
            className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl hover:bg-gray-200 transition-all duration-200"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
