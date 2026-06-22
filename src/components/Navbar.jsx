import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl glass">
      <div className="flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold">
          Portfolio<span className="text-blue-500">.</span>
        </h1>

        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;