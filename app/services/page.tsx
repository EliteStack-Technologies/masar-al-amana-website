import Link from 'next/link';

export const metadata = {
  title: "Our Services - Masar Al Amana",
  description: "Explore our comprehensive range of government and business services including visa processing, company formation, PRO services, and document attestation in the UAE.",
};

const servicesList = [
  {
    title: "Company Formation",
    subtitle: "(All Emirates)",
    description: "Expert guidance for Mainland, Free Zone, and Offshore company setup across the UAE.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    title: "Visa & Immigration",
    subtitle: "(All Emirates)",
    description: "Full assistance for Golden Visas, Employment, Residency, and Family visas in all Emirates.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
    )
  },
  {
    title: "Professional PRO Services",
    description: "Corporate and personal PRO services for all government departments (MOHRE, GDRFA, DED).",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  {
    title: "Local Sponsor Arrangement",
    description: "Connecting you with reliable UAE National partners for Mainland businesses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    title: "Real Estate & Rental Advisory",
    description: "Guidance on Ejari, shop/office rentals, and commercial real estate investments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    title: "Municipality Services",
    description: "Approvals for Planning, Signage, Modifcations and Food Control from Dubai Municipality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    title: "MOH, DHA & Medical",
    description: "Complete medical fitness test assistance and health card registrations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    )
  },
  {
    title: "Legal Translation",
    description: "Professional translation of legal documents, certificates, and contracts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c1.111 2.51 2.766 4.793 4.876 6.645" /></svg>
    )
  },
  {
    title: "Medical Typing Service",
    description: "Instant medical form typing for Visa and Residency applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    )
  },
  {
    title: "Emirates ID Application",
    description: "New application, renewal, and replacement processing for Emirates ID.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
    )
  },
  {
    title: "Attestation Services",
    description: "MOFA, Embassy, and educational certificate attestation for use in the UAE.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Utilities Approvals",
    description: "DEWA, SEWA, and FEWA approvals for new shop and office connections.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "Trade Name & Trademark",
    description: "Registration and protection of your brand, logo, and trademark in the UAE.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
    )
  },
  {
    title: "Notary Services",
    description: "Assistance with private and government notary tasks, POAs, and MOAs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
    )
  },
  {
    title: "Media Services",
    subtitle: "(All Emirates)",
    description: "NMRA approvals and media-related licenses for all Emirates.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: "Accounting & VAT",
    description: "Tax registration, auditing, and bookkeeping services for small and large businesses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: "Value Added Services",
    description: "Customized business support including office search and insurance assistance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
    )
  },
  {
    title: "AutoCAD Drawing",
    description: "Floor plans, shop layouts, and 2D technical drawings for municipality approvals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
    )
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Premium Header with Image */}
      <section className="relative h-[300px] lg:h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/services-header.jpg" 
            alt="Corporate Services" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00732F]/95 via-[#00732F]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0A2316]/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[#C5A854] rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-[#C5A854] rounded-full animate-pulse"></span>
              Expert Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-black !text-white mb-6 tracking-tight leading-[1.1]">
              Our <br className="lg:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A854] to-[#D4AF37]">Premium Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed">
              Comprehensive government and business document solutions tailored for the UAE market.
            </p>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-y-8">
            {servicesList.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-uae-green/5 to-transparent rounded-[40px] transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white p-10 rounded-[40px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 transition-all duration-500 flex flex-col h-full transform group-hover:-translate-y-2 overflow-hidden">
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-black text-text-dark mb-2 group-hover:text-uae-green transition-colors">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <span className="text-gold-accent font-bold text-xs uppercase tracking-widest mb-4 block">
                      {service.subtitle}
                    </span>
                  )}

                  {/* Description */}
                  <p className="text-text-gray font-medium leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <Link href="/contact" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                    Inquire Now 
                    <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Banner */}
   <section className="py-10 md:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute left-[-5%] top-[-10%] w-[30%] h-[120%] bg-uae-green/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-[-5%] bottom-[-10%] w-[30%] h-[120%] bg-gold-accent/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="relative bg-gradient-to-r from-uae-green via-[#062413] to-[#041a0e] rounded-[50px] overflow-hidden shadow-[0_30px_70px_rgba(0,115,47,0.15)] flex flex-col lg:flex-row items-center min-h-[320px]">
            
            {/* 1. Speech Bubbles Icon (Far Left) */}
            <div className="hidden xl:flex items-center justify-center pl-16 py-12">
              <div className="relative w-28 h-20">
                {/* Large Green Bubble */}
                <div className="absolute top-0 right-0 w-20 h-16 bg-[#00D084] rounded-[24px] shadow-lg flex items-center justify-center gap-1.5 border-b-4 border-black/10">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute -bottom-2 right-4 w-5 h-5 bg-[#00D084] rotate-45 rounded-sm"></div>
                </div>
                {/* Smaller Yellow Bubble */}
                <div className="absolute bottom-0 left-0 w-16 h-12 bg-[#FFB800] rounded-[20px] shadow-lg flex items-center justify-center gap-1 border-b-4 border-black/10 z-10">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute -bottom-1.5 left-4 w-4 h-4 bg-[#FFB800] rotate-45 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* 2. Text Content */}
            <div className="w-full lg:w-1/2 p-10 lg:pl-12 lg:py-16 relative z-20 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-black !text-white leading-[1.2] mb-0 tracking-tight">
                Let&apos;s Request A Schedule <br className="hidden xl:block" />
                For <span className="text-gold-accent">Free Consultation</span>
              </h2>
            </div>

      

  

            {/* 5. Phone Number Section (Far Right) */}
            <div className="w-full  lg:w-1/2 p-10 lg:pr-16 relative z-40 text-center lg:text-right">
              <div className="inline-block relative">
                <div className="absolute -top-6 right-0 w-full h-px bg-gradient-to-l from-gold-accent/50 to-transparent hidden lg:block"></div>
                <div className="text-white/60 font-bold uppercase tracking-[0.3em] text-xs mb-3">
                  Direct Line
                </div>
                <Link 
                  href="tel:+971566157166" 
                  className="group flex items-center justify-center lg:justify-end gap-3 transition-transform hover:scale-105"
                >
                  <span className="text-4xl lg:text-6xl font-black text-white group-hover:text-gold-accent transition-colors">
                    <span className="text-gold-accent opacity-50 text-2xl lg:text-4xl align-top mr-1"></span>
                   +971 5661 57166
                  </span>
                </Link>
                <div className="mt-4 flex items-center justify-center lg:justify-end gap-2">
                  <div className="w-2 h-2 bg-gold-accent rounded-full animate-pulse"></div>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">Available Now</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
