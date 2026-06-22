import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-white underline underline-offset-8 decoration-purple-500">Contact Me</h2>

        <div className="glass grid rounded-3xl p-8 md:grid-cols-2">
          <form className="space-y-5 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pr-8">
            <input
              placeholder="Your Name"
              className="w-full rounded-xl bg-slate-900 p-4 outline-none"
            />

            <input
              placeholder="Your Email"
              className="w-full rounded-xl bg-slate-900 p-4 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-xl bg-slate-900 p-4 outline-none"
            />

            <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 font-semibold">
              Send Message
            </button>
          </form>

          <div className="pt-8 md:pl-8 md:pt-0">
            <h3 className="text-3xl font-bold">Let's connect!</h3>

            <div className="mt-8 space-y-5 text-slate-300">
              <p className="flex items-center gap-4">
                <FaEnvelope />
                <a href="mailto:kavyaapatel1307@gmail.com">kavyaapatel1307@gmail.com</a>
              </p>

              

              <p className="flex items-center gap-4">
                <FaPhone />
                <a href="tel:+919824622616">+91 98246 22616</a>
              </p>

              <p className="flex items-center gap-4">
                <FaMapMarkerAlt /> Ahmedabad, India
              </p>
            </div>
            
            <div className="mt-8 flex gap-3">
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
            

            {/* <div className="mt-8 flex gap-4">
            {[FaGithub, FaLinkedin,].map((Icon, index) => (
                <div
                key={index}
                className="glass flex h-12 w-12 items-center justify-center rounded-full"
                >
                <Icon />
                </div>
            ))}
            </div> */}


        </div>
        </div>
    </div>
    </section>
);
}

export default Contact;