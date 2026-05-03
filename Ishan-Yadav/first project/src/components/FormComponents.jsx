import {useState} from "react"

function FormComponent(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [num,setNum]=useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        console.log("Hi")
    }
    return(
        <>
        <div className="w-full h-screen flex justify-center items-center">
             <div className="w-1/2 bg-[#0B1B3B] text-white flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-4">
          stadia<span className="text-yellow-400">.</span>
        </h1>

        <p className="text-gray-300 mb-8">
          Your stadium. Your rules.
        </p>

        <ul className="space-y-4 text-gray-300">
          <li>• Real-time seat availability across all IPL venues</li>
          <li>• Queue-protected booking for high-demand matches</li>
          <li>• Instant e-ticket with QR code on confirmation</li>
          <li>• Zomato-linked dining & fan zone upgrades</li>
        </ul>
      </div>
        <div className="w-1/2 bg-black flex justify-center items-center">
        <div className="w-[380px]">
            <h2 className="text-white font-semibold mb-4 text-centre">Create Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" 
                placeholder="Enter your name here"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                className="p-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                />
                <input type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                className="p-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                />
                <input type="text"
                placeholder="Enter number"
                value={num}
                onChange={(event)=>setNum(event.target.value)}
                className="p-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                />
                <input type="password" 
                placeholder="Enter password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                className="p-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-500"/>
                <button type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded">Submit</button>
                <p className="text-gray-400 text-sm text-center mt-2">
              Already have an account?{" "}
              <span className="text-white cursor-pointer">Log in</span>
              </p>
            </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default FormComponent
