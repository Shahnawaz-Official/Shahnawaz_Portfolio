import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/api/admin/login",
        { email, password },
        {
          withCredentials: true, // ✅ IMPORTANT
        }
      );

      localStorage.setItem("isAdminLoggedIn", "true"); // UI only
      alert("Login Successful ");
      navigate("/upload");

    } catch (error) {
      console.log(error.response?.data);
      alert("Invalid Credentials ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1117] text-white">
      <div className="bg-[#020613] p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl text-transparent bg-clip-text  bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8  font-bold text-center">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg bg-[#0F1117] border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg bg-[#0F1117] border border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;