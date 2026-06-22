import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-4 pt-32 sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 text-center md:grid-cols-2 md:text-left">
        <motion.div
          // initial={{ opacity: 0, x: -40 }}
          // animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-2xl text-blue-400">Hello, I'm</p>

          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl">
            Kavya Patel
          </h1>

          <h2 className="mt-4 text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-2xl md:text-3xl">
            React Developer & UI Designer
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-400">
            I create modern, responsive, and interactive web experiences using
            React and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link to="/contact">
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold"
            </Link>
              Hire Me <FaArrowRight />

          </div>

          <div className="mt-10 flex justify-center gap-4 md:justify-start">
            <a
              href="https://github.com/kavyapatel13"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-14 w-14 items-center justify-center rounded-full text-2xl transition hover:scale-110 hover:text-blue-400">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kavya-patel13"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-14 w-14 items-center justify-center rounded-full text-2xl transition hover:scale-110 hover:text-blue-400">
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl" />

            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full border-4 border-blue-500 p-2">
              <img
                src={profile}
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;