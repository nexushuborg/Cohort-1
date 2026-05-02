import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      setError("");
      alert("Login successful");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-2/5 bg-blue-900 text-white p-10 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl">
            Stadi<span className="text-yellow-400">a</span>
          </h2>
          <p>Good to have you back</p>
        </div>

        {/* Card */}
        <div className="bg-gray-700 border border-yellow-500 rounded-xl p-5">
          <h3 className="text-yellow-400 font-semibold mb-2">
            MI vs CSK tonight
          </h3>
          <p className="text-gray-300 text-sm">
            Only 340 premium seats left. Log in to hold your before the queue
            fills up.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-3/5 p-10 flex items-center justify-center flex-col bg-neutral-900 text-white">
        <h2 className="text-3xl font-bold">Welcome back</h2>
        <p>Login to your Stadia account</p>

        <form onSubmit={handleSubmit} className="mt-5 w-full max-w-sm">
          <input
            type="email"
            placeholder="ash@example.com"
            className="w-full p-2 mb-3 rounded bg-gray-800 border border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

         <input
  type="password"
  placeholder="********"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-2 mb-3 border rounded"
/>

<div className="text-right mb-4">
  <span className="text-sm text-gray-500 hover:text-white cursor-pointer">
    Forgot Password?
  </span>
</div>

<button
  onClick={handleSubmit}
  className="w-full p-2 bg-blue-800 text-white rounded"
>
  Log In
</button>

{error && <p style={{ color: "red" }}>{error}</p>}
</form>

<p className="text-gray-500">
  New to Stadia?{" "}
  <span className="text-gray-300 font-bold">
    <a href="#">Create Account</a>
  </span>
</p>


  </div>
</div>
  );
}

export default LoginPage;