import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLogin, setUser } from "../Store/reducers/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const validate = () => {
    if (isLogin) return true; // Skip validation in login mode

    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be 6+ chars, 1 uppercase & 1 number");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const endpoint = isLogin ? "/user/api/login" : "/user/api/register";

    try {
      const { data } = await axios.post(endpoint, { name, email, password });

      if (data.success) {
        toast.success(data.message);
        dispatch(setUser(data.user));
        dispatch(setLogin(false));
        navigate("/welcome");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={() => dispatch(setLogin(false))}
      className="h-screen inset-0 fixed z-20 flex items-center justify-center p-4 bg-black/30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#732FF8]">
          {isLogin ? "Login to MyApp" : "Register to MyApp"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-xl"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
            {!isLogin && emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
            {!isLogin && passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#732ff8] text-white py-2 px-4 rounded-xl transition-all duration-300 hover:bg-gray-800"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={handleToggle}
              className="text-gray-950 cursor-pointer hover:underline font-medium"
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
