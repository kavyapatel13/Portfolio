// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl glass">
//       <div className="flex items-center justify-between px-8 py-5">
//         <h1 className="text-3xl font-bold">
//           Portfolio<span className="text-blue-500">.</span>
//         </h1>

//         <div className="flex gap-8"> 
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/education">Education</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl glass">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <h1 className="text-2xl font-bold md:text-3xl">
          Portfolio<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-slate-700 px-4 py-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link to="/education" onClick={() => setIsOpen(false)}>
            Education
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;