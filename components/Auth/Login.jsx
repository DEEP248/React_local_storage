import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle login logic here
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-800">
      <div className="bg-gray-900/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700 w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Welcome Back 👋
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-5"
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-800 text-gray-200 placeholder:text-gray-500 border border-gray-700 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full bg-gray-800 text-gray-200 placeholder:text-gray-500 border border-gray-700 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
          <button
            type="submit"
            className=" cursor-pointer w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full py-3 mt-2 transition-all duration-300 shadow-md hover:shadow-emerald-800/50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
