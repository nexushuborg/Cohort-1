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
    <div className="flex flex-col md:flex-row h-screen bg-primary text-white overflow-hidden">
      {/* Left side */}
      <div className="hidden md:flex w-2/5 bg-secondary p-12 flex-col justify-center border-r border-border">
        <div>
          <h2 className="text-4xl font-bold">
            stad<span className="text-accent">ia</span>
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            Good to have you back
          </p>
        </div>

        <div className="bg-card border border-accent/30 rounded-2xl p-6 mt-12 shadow-xl">
          <h3 className="text-accent font-bold text-xl mb-3">
            MI vs CSK tonight
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            Only 340 premium seats left. Log in to hold yours before the queue fills up.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-3/5 flex items-center justify-center bg-primary p-6">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">Welcome back</h2>
            <p className="text-text-secondary text-lg">
              Log in to your Stadia account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="ash@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-secondary border border-border rounded-xl text-white focus:outline-none focus:border-accent transition-all duration-200 placeholder:text-gray-600"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-secondary border border-border rounded-xl text-white focus:outline-none focus:border-accent transition-all duration-200 placeholder:text-gray-600"
              />
            </div>

            <div className="flex justify-end">
              <span className="text-sm text-text-secondary hover:text-white cursor-pointer transition">
                Forgot Password?
              </span>
            </div>

            {error && (
              <div className="bg-error/10 border border-error/20 text-error text-sm p-4 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full p-4 bg-button hover:bg-button-hover transition rounded-xl text-white font-bold text-lg shadow-lg active:scale-95"
            >
              Log In
            </button>
          </form>

          <p className="text-text-secondary text-base mt-8 text-center">
            New to Stadia?{" "}
            <span className="text-white hover:underline cursor-pointer font-bold ml-1">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
