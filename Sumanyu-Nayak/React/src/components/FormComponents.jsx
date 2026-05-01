function FormComponents() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault() //prevent the default form submission behavior, which would cause the page to reload
        console.log("Form Submitted") 
    }
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-[25vh] h-[70vh] bg-red-500 flex justify-center items-column gap-5">
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} //onChange event handler to update the name state variable whenever the input value changes
                            className="border-2 border-solid" //className to add a border to the input field
                            placeholder='Enter your name'
                        />
                        <input type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} //onChange event handler to update the email state variable whenever the input value changes
                            className="border-2 border-solid" 
                            placeholder='Enter your email'
                        />
                        <input type="number" 
                            value={number} 
                            onChange={(e) => setNumber(e.target.value)} //onChange event handler to update the number state variable whenever the input value changes
                            className="border-2 border-solid" 
                            placeholder='Enter your number'
                        />
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-solid"
                            placeholder='Enter your password'
                        />
                        <button type='submit' className="border-2 border-solid">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default FormComponents