import React, { useState } from "react";
import { technoLogo } from "../../image";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let valid = true;

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setLoading(true);
      setError("");

      try {
        const response = await axios.post(
          "https://soal.staging.id/oauth/token",
          {
            grant_type: "password",
            client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
            client_id: "e78869f77986684a",
            username: email,
            password: password,
          }
        );

        const { token_type, access_token } = response.data;
        localStorage.setItem("authToken", `${token_type} ${access_token}`);

        setLoading(false);
        navigate("/dashboard");
      } catch (err) {
        setLoading(false);
        setError("Invalid login credentials. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-[#F8F9FB]">
        <div className="w-full max-w-xs">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={technoLogo} alt="" />
          </div>
          {/* Form */}
          <form
            className="rounded px-8 pt-6 pb-8 mb-4 bg-[#F8F9FB]"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <div className="w-full my-2 text-center">
                <p className="text-gray-400">Email</p>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>
            <div className="mb-6">
              <div className="w-full my-2 text-center">
                <p className="text-gray-400">Password</p>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-center text-xs mt-1">{error}</p>
            )}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#FFFFFF] shadow-md hover:bg-white text-black font-bold py-2 px-14 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
