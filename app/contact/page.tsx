export const metadata = {
  title: "Contact Us - Masar Al Amana",
  description:
    "Get in touch with Masar Al Amana for all your government service needs in UAE. Visit our office, call us, or send an email.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Premium Header with Image */}
      <section className="relative h-[300px] lg:h-[350px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-header.jpg"
            alt="Contact Masar Al Amana"
            className="w-full h-full object-cover"
          />
          {/* Multi-layered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00732F]/95 via-[#00732F]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0A2316]/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[#C5A854] rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 bg-[#C5A854] rounded-full animate-pulse"></span>
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-black !text-white mb-4 tracking-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A854] to-[#D4AF37]">
                Masar Al Amana
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl">
              Dedicated support for all your government and business procedures
              across the UAE.
            </p>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </section>

      {/* Contact Info & Form */}
      <section className="lg:py-24 py-12 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute left-[-5%] top-10 w-[30%] h-[50%] bg-uae-green/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-[-5%] bottom-10 w-[30%] h-[50%] bg-gold-accent/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Contact Details */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-black/5 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-uae-green/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-black mb-8 text-text-dark">
                  Quick Contact
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-uae-green/10 rounded-2xl flex items-center justify-center text-uae-green flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-text-dark text-sm uppercase tracking-widest mb-1">
                        Our Office
                      </h4>
                      <p className="text-text-gray font-medium leading-relaxed">
                        Masar Al Amana,Building # 565 Fire station Road Behind
                        munawar Ansari supermarket Muweilah Commercial,Sharjah,UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gold-accent/10 rounded-2xl flex items-center justify-center text-gold-accent flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-text-dark text-sm uppercase tracking-widest mb-1">
                        Phone Inquiry
                      </h4>
                      <p className="text-text-gray font-black text-lg">
                        <a
                          href="tel:+971556541988"
                          className="hover:text-uae-green transition-colors"
                        >
                           +971 5661 57166
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-uae-green/10 rounded-2xl flex items-center justify-center text-uae-green flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-text-dark text-sm uppercase tracking-widest mb-1">
                        Email Support
                      </h4>
                      <p className="text-text-gray font-medium">
                        <a
                          href="mailto:info@masaralamana.ae"
                          className="hover:text-uae-green transition-colors"
                        >
                          info@masaralamana.ae
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-black text-text-dark uppercase tracking-widest">
                        Available Now
                      </span>
                    </div>
                    <p className="text-text-gray text-xs mt-2 font-medium">
                      Mon-Sat: 09:00AM - 06:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-6 lg:p-16 rounded-[40px] shadow-2xl shadow-black/5 border border-gray-100">
                <h3 className="text-4xl font-black mb-10 text-text-dark tracking-tight">
                  Send Us a <span className="text-uae-green">Message</span>
                </h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-black text-text-dark uppercase tracking-widest ml-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-uae-green/10 outline-none transition-all font-medium text-text-dark"
                        placeholder="e.g. Abdullah Ahmed"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-black text-text-dark uppercase tracking-widest ml-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-uae-green/10 outline-none transition-all font-medium text-text-dark"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-black text-text-dark uppercase tracking-widest ml-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-uae-green/10 outline-none transition-all font-medium text-text-dark"
                        placeholder=" +971 5661 57166"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-black text-text-dark uppercase tracking-widest ml-1"
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-uae-green/10 outline-none transition-all font-medium text-text-dark appearance-none cursor-pointer"
                      >
                        <option value="">Select a Service</option>
                        <option value="company-formation">
                          Company Formation
                        </option>
                        <option value="visa-immigration">
                          Visa & Immigration
                        </option>
                        <option value="pro-services">
                          Professional PRO Services
                        </option>
                        <option value="local-sponsor">
                          Local Sponsor Arrangement
                        </option>
                        <option value="real-estate">
                          Real Estate & Rental Advisory
                        </option>
                        <option value="municipality">
                          Municipality Services
                        </option>
                        <option value="medical">MOH, DHA & Medical</option>
                        <option value="legal-translation">
                          Legal Translation
                        </option>
                        <option value="medical-typing">
                          Medical Typing Service
                        </option>
                        <option value="emirates-id">
                          Emirates ID Application
                        </option>
                        <option value="attestation">
                          Attestation Services
                        </option>
                        <option value="utilities">Utilities Approvals</option>
                        <option value="trademark">
                          Trade Name & Trademark
                        </option>
                        <option value="notary">Notary Services</option>
                        <option value="media">Media Services</option>
                        <option value="accounting">Accounting & VAT</option>
                        <option value="value-added">
                          Value Added Services
                        </option>
                        <option value="autocad">AutoCAD Drawing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-black text-text-dark uppercase tracking-widest ml-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-uae-green/10 outline-none transition-all font-medium text-text-dark resize-none"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="group w-full md:w-auto bg-uae-green text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-uae-green/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                  >
                    Send Inquiry
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
