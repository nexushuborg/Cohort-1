import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if(formData.password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }
    console.log('Account created:', formData);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-2/5 bg-blue-900 p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">stad<span className="text-yellow-500">ia</span></h1>
        <p className="text-gray-300 mb-10">Your stadium. Your rules.</p>
        
        <ul className="space-y-6 text-sm text-gray-200">
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3">•</span> Real-time seat availability across all IPL venues
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3">•</span> Queue-protected booking for high-demand matches
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3">•</span> Instant e-ticket with QR code on confirmation
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-3">•</span> Zomato-linked dining & fan zone upgrades
          </li>
        </ul>
      </div>

      {/* Registration Form Area */}
      <div className="w-3/5 flex flex-col justify-center items-center bg-zinc-900">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2">Create your account</h2>
          <p className="text-gray-400 mb-8">Join Stadia and never miss a match</p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm mb-2">Full name</label>
              <input 
                name="fullName"
                type="text" 
                placeholder="Ash Patel"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input 
                name="email"
                type="email" 
                placeholder="ash@example.com"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Mobile</label>
              <input 
                name="mobile"
                type="tel" 
                placeholder="+91 98765 43210"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Password</label>
              <input 
                name="password"
                type="password" 
                placeholder="••••••••"
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
              <p className="text-[10px] text-gray-500 mt-1">Must contain at least 8 characters</p>
            </div>
            <button className="w-full py-3 bg-blue-700 hover:bg-blue-600 rounded font-bold transition">
              Create account
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account? <a href="#" className="text-white font-bold">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
