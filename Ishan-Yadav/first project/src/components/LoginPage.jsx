import {useState} from "react"

function LoginPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        if (email==="admin@gmail.com" && password===admin1234)
            alert("Succesful")
        else{
            setError("Invalid credentials");
        }
    }
    return(
        <>
        <div className="flex h-screen">
            <div>
            <div className="w-1/2 bg-[#0B1B3B] text-white flex flex-col justify-center px-16">
                <h2 className="text-2xl">stad<span className="text-yellow-400">ia</span></h2>
                <p>Good to have you back</p>
            </div>
            <div className="bg-grey-700 border border-yellow-500 rounded-x1 p-5">
                <h2 className="text-yellow-400 font-semibold mb-2" >
                    MI vs CSK
                </h2>
                <p className="text-gray-300">
                    Only 330 preimium seats left.Log in to hold yours before queue fills up
                </p>
            </div>
            </div>
            <div className="w-3/5 p-10 flex items-centre flex-col bg-gray-900 text-white">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <p>Log in to your Stadia account</p>
                <form >
                    <input type="email" placeholder="Enter your Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"/>
                    <input type="password" placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"/>
                    <span className='text-sm text-grey hover:text-white cursor-pointer justify'>Forgot Password?</span>
                    <button onClick={handleSubmit}
                    className="w-full p-2 bg-blue-600 text-white rounded">Log In</button>
                    {error && <p style={{color:'red'}}>{error}</p>}
                </form>
                <p>New to Stadia? <a href="#">Create Account</a></p>

            </div>
        </div>
 

        </>

    )
}

export default LoginPage