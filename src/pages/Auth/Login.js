import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className=" bg-slate-300 mx-10">
        
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md  ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Login Form
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          
                placeholder="abc@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your password</span>
              <input
                type="password"
                name="name"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="*********"
              />
            </label>
          </div>
         <div className=" text-right my-3">
          <a href="/forgot-password" className="text-purple-600 font-semibold  ">Forget password?</a>
         </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Login
            </button>
          </div>
         
        </form>
      </div>
    </div>

      </div>
    </Layout>
  );
};

export default Login;
