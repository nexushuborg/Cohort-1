import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate validation logic
    if (email !== 'ash@example.com' || password !== 'password123') {
      setError(true);
    } else {
      setError(false);
      console.log('Logging in...');
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-2/5 bg-blue-900 p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">stad<span className="text-yellow-500">ia</span></h1>
        <p className="text-gray-300 mb-8">Good to have you back.</p>
        
        <div className="bg-blue-800 p-6 rounded-lg border border-blue-700">
          <p className="text-yellow-500 font-bold mb-2">MI vs CSK tonight</p>
          <p className="text-sm text-gray-200">Only 340 premium seats left. Log in to hold yours before the queue fills up.</p>
        </div>
      </div>

      {/* Login Form Area */}
      <div className="w-3/5 flex flex-col justify-center items-center bg-zinc-900">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-400 mb-8">Log in to your Stadia account</p>

          {error && (
            <div className="bg-red-900/30 border border-red-500 text-red-200 p-3 rounded mb-6 text-sm">
              ✕ Invalid login credentials
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input 
                type="email" 
                placeholder="ash@example.com"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
                <a href="#" className="text-xs text-gray-400 hover:text-white">Forgot password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="w-full py-3 bg-blue-700 hover:bg-blue-600 rounded font-bold transition">
              Log in
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-400">
            New to Stadia? <a href="#" className="text-white font-bold">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
