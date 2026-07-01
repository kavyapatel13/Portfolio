import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

// Validation Schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-white underline underline-offset-8 decoration-purple-500">
          Contact Me
        </h2>

        <div className="glass grid rounded-3xl p-8 md:grid-cols-2">

          {/* Contact Form */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              emailjs
                .send(
                  import.meta.env.VITE_EMAILJS_SERVICE_ID,
                  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                  {
                    from_name: values.name,
                    from_email: values.email,
                    message: values.message,
                  },
                  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then((result) => {
                  console.log("SUCCESS:", result);
                  alert("Message Sent Successfully!");
                  resetForm();
                })
                .catch((error) => {
                  console.error("FAILED:", error);
                  alert("Failed to send message!");
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            <Form className="space-y-5 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pr-8">

            {/* Name */}
            <div>
              <label className="block mb-1">Your Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl bg-slate-900 p-4 outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">Email ID</label>
              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-slate-900 p-4 outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1">Message</label>
              <Field
                as="textarea"
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full rounded-xl bg-slate-900 p-4 outline-none"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Send Message
            </button>
          </Form>
        </Formik>

        {/* Contact Information */}
        <div className="pt-8 md:pl-8 md:pt-0">
          <h3 className="text-3xl font-bold text-white">
            Let's Connect!
          </h3>

          <div className="mt-8 space-y-5 text-slate-300">

            <p className="flex items-center gap-4">
              <FaEnvelope />
              <a href="mailto:kavyaapatel1307@gmail.com">
                kavyaapatel1307@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-4">
              <FaPhone />
              <a href="tel:+919824622616">
                +91 98246 22616
              </a>
            </p>

            <p className="flex items-center gap-4">
              <FaMapMarkerAlt />
              Ahmedabad, India
            </p>

          </div>

          <div className="mt-8 flex gap-3">

            <a
              href="https://github.com/kavyapatel13"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-14 w-14 items-center justify-center rounded-full text-2xl transition hover:scale-110 hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kavya-patel13"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-14 w-14 items-center justify-center rounded-full text-2xl transition hover:scale-110 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>
    </div>
    </section >
  );
}

export default Contact;


