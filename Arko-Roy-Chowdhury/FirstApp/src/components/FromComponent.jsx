function fromComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, phone, password);
    }
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-[20vw] h-[40vh] bg-blue-200 rounded-lg flex flex-col justify-center items-center">
        <form action="">
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-solid"
          placeholder="Enter your name" 
          />
          <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-solid"
          placeholder="Enter your email" 
          />
          <input 
          type="number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 border-solid"
          placeholder="Enter your phone number" 
          />
          <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-solid"
          placeholder="Enter your password" 
          />
          <button 
          type = "submit"
          className="border-2 border-solid" 
          onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default fromComponent;
