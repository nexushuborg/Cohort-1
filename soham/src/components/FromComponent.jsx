import { useState } from "react"

function FormComponent() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        console.log("Form submitted");
    }
    
  return (
    <>
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[25vw] h-[70vh] bg-red-700 flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        className="border-2 border-solid"
                        placeholder="Enter your Name"
                    />
                    <input type="email"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        placeholder="Enter Your Email"
                        className="border-2 border-solid"
                    />
                    <input type="text"
                        value={number}
                        onChange={(event)=>setNumber(event.target.value)}
                        placeholder="Enter Your Number"
                        className="border-2 border-solid"
                    />
                    <input type="password"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        placeholder="Enter Your Password"
                        className="border-2 border-solid"
                    />
                    <button type="submit" className="border-2 border-solid">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormComponent

// H.W
//need to dig a bit more on what event is actually in react
//replicate the form page
//toggle between password visibility and in-visibility