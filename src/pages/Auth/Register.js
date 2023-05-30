import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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
          Registration 
        </h1>
        <form className="mt-6 mx-auto" onSubmit={handleSubmit}>
          
          <div className="mb-2">
            <label>
              <span className="text-gray-700">name</span>
              <input
                name="name"
                type="text"
                value={name}
              onChange={(e) => setName(e.target.value)}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="abc"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="abc@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your phone</span>
              <input
                type="password"
                name="text"
                value={phone}
              onChange={(e) => setPhone(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="123"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your address</span>
              <input
                type="text"
                name="address"
                value={address}
              onChange={(e) => setAddress(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="city, state , street"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Secret Answer</span>
              <input
                type="text"
                name="answer"
                value={answer}
              onChange={(e) => setAnswer(e.target.value)}
                className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="*********"
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
                placeholder="********"
              />
            </label>
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
              Register
            </button>
          </div>
         
        </form>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default Register;
