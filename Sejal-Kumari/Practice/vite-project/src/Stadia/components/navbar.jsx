 
 import logo from "../components/logo";
 export default function navbar(){
    return (
        <>
        <nav className="flex justify-between items-center p-4 bg-base-100">
            <logo />
            <div>
                <a href="#">IPL 2026</a>
                <a href="#">Movies</a>
                <a href="#">Dining</a>
                <a href="#">Movies</a>
            </div>

            <div>
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-secondary">Sign Up</button>
            </div>
        </nav>
        </>
    );
}