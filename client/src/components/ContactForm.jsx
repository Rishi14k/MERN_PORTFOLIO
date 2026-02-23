import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {RiMailSendLine} from "react-icons/ri";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef();
  const [loading,setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_jymouah",
        "template_zaem0qy",
        formRef.current,
        "fLb2j_s25N0s-w-_D",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message.");
          setLoading(false);
        },
      );
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <RiMailSendLine className="text-yellow-300" /> Send a Message
      </h3>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-indigo-200 uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-indigo-200 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-indigo-200 uppercase tracking-widest">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Project Inquiry"
            className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-indigo-200 uppercase tracking-widest">
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            required
            placeholder="Tell me about your project..."
            className="bg-white/5 border border-white/10 rounded-xl p-3 text-white resize-none focus:outline-none focus:border-yellow-300"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`
    w-full py-4 rounded-xl font-bold
    transition-all transform
    ${
      loading
        ? "bg-yellow-300/70 cursor-not-allowed"
        : "bg-yellow-300 hover:bg-yellow-400 hover:scale-[1.02] active:scale-95"
    }
    text-indigo-900 shadow-lg shadow-yellow-300/20
  `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
