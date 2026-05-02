import React, { useState } from 'react'
 function LoginPage(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email==="admin@gmail.com" && password==="admin123"){
            setError("");
            alert("Login Successfull");
        }
        else
        {
            setError("Invalid email or password ");
        }
    }
    return(
        <div className='flex h-screen'>
            {/* Left side*/}
            <div className='w-2/5 bg-blue-900 text-white p-10'>
            <h2 className='text-2xl'>stad <span className='text-yellow-400'>ia</span></h2>
            <p>Good to have you back</p>
            </div>
            {/* Card*/}
            <div className='bg-gray-700 border border-yellow-500 rounded-xl p-5'>
                <h3 className='text-yellow-400 font-semibold mb-2'>
                    MI VS CSK tonight 
                </h3>
                <p className='text-gray-300 text-sm'>
                    Only 340 premium seats left . Log in to hold your before your queue fills up.
                </p>
            </div>
            {/* Right side*/}
            <div className='w-3/5 p-10 flex items-center justify-center flex-col bg-neutral-900 text-white'>
            <h2 className='text-2xl font-bold'>Welcome Back</h2>
            <p>Login to your stadia Account</p>
            <form action="">
                <input type="email"
                 placeholder='Enter email'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 className='w-full p-2 mb-3 border rounded'
                 />
                 <input type="password" 
                 placeholder='Enter password'
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 />
                 <button onClick={handleSubmit}>Log in </button>
                 {error && <p style={{color: 'red' }}>{error}</p>}
            </form>
            </div>
        </div>
    )
 }