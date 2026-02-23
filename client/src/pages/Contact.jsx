import React, {useEffect, useRef} from "react";
import FloatingNav from "@/components/FloatingNav";
import {NAV_ITEMS} from "@/config/navigation";
import {useNavigate} from "react-router-dom";
import Footer from "@/components/Footer";
import {SOCIALS} from "@/config/contactSocial";
import {RiMailSendLine} from "react-icons/ri";
import {contactAnimation} from "@/animation/contactAni";
import HeaderText from "@/components/HeaderText";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const pageRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    contactAnimation({pageRef, leftRef, rightRef});
  }, []);

  return (
    <>
      <section
        ref={pageRef}
        className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12
    py-10 sm:py-14 md:py-20 bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900"
      >
        <div className="max-w-7xl mx-auto px-6 pt-12">
          {/* Header */}

          <HeaderText
            title1="Get in"
            title2="Touch"
            desc="  Have a project in mind or just want to say hi? My inbox is always
            open."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Contact Form */}
            <div
              ref={leftRef}
              className="contact-card bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl"
            >
              <ContactForm/>
            </div>

            {/* RIGHT: Online Profiles */}
            <div ref={rightRef} className="space-y-6">
              <h3 className="contact-animate text-2xl font-bold text-white mb-2">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIALS.map((social, idx) => (
                  <a
                    href={social.link}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-animate group bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-yellow-300/50 transition-all duration-500 opacity-1"
                  >
                    <div
                      className={`text-4xl text-white/50 group-hover:scale-110 transition-all duration-500 ${social.color}`}
                    >
                      {social.icon}
                    </div>
                    <span className="text-sm font-mono text-indigo-100 uppercase tracking-tighter">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Availability Card */}
              <div className="ava-card bg-linear-to-br from-yellow-300/10 to-transparent border border-yellow-300/20 p-8 mt-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300/20 blur-3xl rounded-full group-hover:bg-yellow-300/20 transition-all" />
                <h4 className="text-yellow-300 font-bold text-xl mb-2">
                  Current Availability
                </h4>
                <p className="text-indigo-50/70 leading-relaxed">
                  I'm currently taking on new freelance projects and full-time
                  opportunities. Let's build something extraordinary together.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-sm uppercase">
                    Ready to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer title="Contact" />
    </>
  );
};

export default Contact;
