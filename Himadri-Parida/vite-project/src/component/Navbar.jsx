import Logo from "./logo";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-base-100">
        <Logo />

        <div>
          <span className="p-2 m-2">IPL 2026</span>
          <span className="p-2 m-2">Movies</span>
          <span className="p-2 m-2">Events</span>
          <span className="p-2 m-2">Dining</span>
        </div>

        <div>
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-secondary">Sign Up</button>
        </div>
      </nav>
    </>
  );
}