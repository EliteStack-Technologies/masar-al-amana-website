import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Responsive & Centered */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-[120px] lg:pt-[80px] pb-20 overflow-hidden">
        
        {/* Advanced Background Design */}
        <div className="absolute inset-0 z-0">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
            style={{ 
              backgroundImage: 'url("/hero-bg.jpg")',
              filter: 'brightness(0.95) contrast(1.05)'
            }}
          ></div>
          
          {/* Sophisticated Overlays */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          
          {/* Subtle Gradients */}
          <div className="absolute top-0 right-0 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-uae-green/5 rounded-full blur-[80px] lg:blur-[120px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-gold-accent/10 rounded-full blur-[60px] lg:blur-[100px] -ml-20 -mb-20"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ backgroundImage: 'radial-gradient(#00732F 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="container mx-auto px-0 lg:px-6 xl:px-[100px] relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
            
            {/* Left Side: Text Content - Stronger Visual Hierarchy */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-uae-green/10 text-uae-green rounded-full text-xs lg:text-sm font-bold tracking-widest uppercase mb-6 lg:mb-8 border border-uae-green/20 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-uae-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-uae-green"></span>
                </span>
                Your Trusted Government Service Partner
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-text-dark mb-6 lg:mb-8 leading-[1.1] lg:leading-[1.05] tracking-tight">
                Expert Solutions for your <br className="hidden md:block" />
                <span className="text-uae-green relative inline-block">
                  UAE Business
                  <svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-2 lg:h-3 text-gold-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" fill="currentColor"/>
                  </svg>
                </span> Services
              </h1>
              
              <p className="text-text-gray px-6 md:px-0 text-base md:text-lg lg:text-xl mb-8 lg:mb-10 leading-relaxed max-w-xl font-medium">
                From visa processing to company formation, we provide seamless documentation and PRO services to get your business running.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 px-6 md:px-0 lg:gap-6 w-full sm:w-auto">
                <a href="tel:+971566157166" className="group flex items-center justify-center lg:justify-start gap-4 bg-white border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.08)] px-6 lg:px-8 py-4 lg:py-5 rounded-2xl hover:border-uae-green/30 hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-text-gray text-[10px] lg:text-xs font-bold uppercase tracking-widest">Call Consultant</div>
                    <div className="font-extrabold text-text-dark text-lg lg:text-xl">+971 5661 57166</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right Side: Consultation Form - Fixed Visibility */}
            <div className="w-full lg:w-1/2 xl:w-[450px] fade-in-up md:delay-150 mt-10 lg:mt-0">
              <div className="bg-[#1A4D2E] p-8 rounded-[32px] shadow-[0_25px_60px_-15px_rgba(26,77,46,0.3)] text-white relative border border-white/5">
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-black mb-2">Let's Talk</h2>
                    <p className="text-green-100/60 text-sm font-medium">Free Initial Consultation</p>
                  </div>
                  
                  <form className="space-y-4 lg:space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Full Name" 
                        className="w-full h-12 lg:h-14 px-5 rounded-2xl bg-white/10 border border-white/10 focus:border-gold-accent text-white placeholder-white/20 focus:outline-none transition-all font-medium"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Contact</label>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        className="w-full h-12 lg:h-14 px-5 rounded-2xl bg-white/10 border border-white/10 focus:border-gold-accent text-white placeholder-white/20 focus:outline-none transition-all font-medium"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 ml-1">Service Type</label>
                      <div className="relative">
                        <select className="w-full h-12 lg:h-14 px-5 rounded-2xl bg-white/10 border border-white/10 focus:border-gold-accent text-white focus:outline-none transition-all font-medium appearance-none cursor-pointer">
                          <option value="" className="bg-[#1A4D2E]">Select Service</option>
                          <option value="company-formation" className="bg-[#1A4D2E]">Company Formation</option>
                          <option value="visa-immigration" className="bg-[#1A4D2E]">Visa & Immigration</option>
                          <option value="pro-services" className="bg-[#1A4D2E]">Professional PRO Services</option>
                          <option value="local-sponsor" className="bg-[#1A4D2E]">Local Sponsor Arrangement</option>
                          <option value="real-estate" className="bg-[#1A4D2E]">Real Estate & Rental Advisory</option>
                          <option value="municipality" className="bg-[#1A4D2E]">Municipality Services</option>
                          <option value="medical" className="bg-[#1A4D2E]">MOH, DHA & Medical</option>
                          <option value="legal-translation" className="bg-[#1A4D2E]">Legal Translation</option>
                          <option value="medical-typing" className="bg-[#1A4D2E]">Medical Typing Service</option>
                          <option value="emirates-id" className="bg-[#1A4D2E]">Emirates ID Application</option>
                          <option value="attestation" className="bg-[#1A4D2E]">Attestation Services</option>
                          <option value="utilities" className="bg-[#1A4D2E]">Utilities Approvals</option>
                          <option value="trademark" className="bg-[#1A4D2E]">Trade Name & Trademark</option>
                          <option value="notary" className="bg-[#1A4D2E]">Notary Services</option>
                          <option value="media" className="bg-[#1A4D2E]">Media Services</option>
                          <option value="accounting" className="bg-[#1A4D2E]">Accounting & VAT</option>
                          <option value="value-added" className="bg-[#1A4D2E]">Value Added Services</option>
                          <option value="autocad" className="bg-[#1A4D2E]">AutoCAD Drawing</option>
                        </select>
                        <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    
                    <button type="button" className="w-full bg-gold-accent hover:bg-[#D4B684] text-[#1A4D2E] font-black h-14 lg:h-16 rounded-2xl transition-all mt-4 lg:mt-6 shadow-xl shadow-gold-accent/10 transform hover:-translate-y-1 uppercase tracking-widest text-sm">
                      Request Call Back
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

  {/* Business Setup / About Section - New! */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Geometric Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#00732F 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
            
            {/* Left Column: Image Collage */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative grid grid-cols-12 gap-4 items-center">
                
                {/* Image 1: Large Main Image (Shield Style) */}
                <div className="col-span-7 relative z-20">
                  <div className="rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <img 
                      src="/about-1.jpg" 
                      alt="Business Consultation" 
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </div>

                {/* Right Side Images Stack */}
                <div className="col-span-5 flex flex-col gap-4 relative z-10">
                  {/* Image 2: Top Small */}
                  <div className="rounded-tl-[60px] rounded-br-[60px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src="/about-2.jpg" 
                      alt="Meeting" 
                      className="w-full h-[180px] md:h-[240px] object-cover"
                    />
                  </div>
                  
                  {/* Image 3: Bottom Small with Experience Badge */}
                  <div className="relative rounded-bl-[60px] rounded-tr-[60px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src="/about-3.jpg" 
                      alt="Consultant" 
                      className="w-full h-[180px] md:h-[240px] object-cover"
                    />
                    
                    {/* Experience Badge Overlay */}
                    <div className="absolute bottom-0 right-0 bg-uae-green text-white p-4 md:p-6 rounded-tl-[40px] shadow-lg text-center min-w-[120px]">
                      <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Years Of</div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Experience</div>
                      <div className="text-3xl md:text-4xl font-black">5+</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-uae-green/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>
              
              {/* Geometric Floating Shapes */}
              <div className="absolute -right-6 bottom-1/4 w-12 h-12 flex flex-wrap gap-1 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-uae-green rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-1/2">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-accent/10 text-gold-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-gold-accent/20">
                  WE ARE Masar Al Amana
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-8 leading-tight tracking-tight">
                  Your <span className="text-uae-green relative inline-block">
                    Trusted
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gold-accent rounded-full opacity-50"></div>
                  </span> Partner For Hassle-Free Business Setup!
                </h2>
                
                <p className="text-text-gray text-lg font-medium leading-relaxed mb-10">
                  We are a trusted business setup consultancy, dedicated to helping entrepreneurs and companies establish and grow their businesses with ease. From company formation to tax registration and compliance, we provide expert guidance and end-to-end solutions tailored to your needs.
                </p>

                {/* Feature List Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-uae-green/5 text-uae-green border border-uae-green/20 flex items-center justify-center group-hover:bg-uae-green group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-text-dark font-bold text-base">Company Formation</span>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-uae-green/5 text-uae-green border border-uae-green/20 flex items-center justify-center group-hover:bg-uae-green group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-text-dark font-bold text-base">PRO Services</span>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-uae-green/5 text-uae-green border border-uae-green/20 flex items-center justify-center group-hover:bg-uae-green group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-text-dark font-bold text-base">Tax Registration</span>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-uae-green/5 text-uae-green border border-uae-green/20 flex items-center justify-center group-hover:bg-uae-green group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-text-dark font-bold text-base">Banking Assistance</span>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1A3C2A] text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-uae-green/10 hover:bg-uae-green transform hover:-translate-y-1 group">
                  Contact Us
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-gray-50/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-uae-green/5 rounded-full blur-[100px] -mr-40 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-accent/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-uae-green/10 text-uae-green rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6 tracking-tight">Comprehensive Government Solutions</h2>
            <div className="w-20 h-1.5 bg-uae-green mx-auto rounded-full mb-8"></div>
            <p className="text-text-gray text-lg font-medium leading-relaxed">
              We streamline your documentation process across all UAE platforms with precision and speed, ensuring a hassle-free experience for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1: Business Setup */}
            <div className="service-card group bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 p-10 rounded-[40px] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-uae-green transition-colors">Business Setup</h3>
              <p className="text-text-gray font-medium leading-relaxed mb-8 flex-grow">Expert guidance on Mainland, Free Zone, and Offshore company formation with full legal support.</p>
              <Link href="/services" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                View Details 
                <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>

            {/* Service 2: Visa Processing */}
            <div className="service-card group bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 p-10 rounded-[40px] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-uae-green transition-colors">Visa Services</h3>
              <p className="text-text-gray font-medium leading-relaxed mb-8 flex-grow">Golden Visa, Family, Employment, and Investor visas processed with maximum efficiency and speed.</p>
              <Link href="/services" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                View Details 
                <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>

            {/* Service 3: PRO Services */}
            <div className="service-card group bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 p-10 rounded-[40px] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-uae-green transition-colors">PRO Services</h3>
              <p className="text-text-gray font-medium leading-relaxed mb-8 flex-grow">Liaison with MOHRE, GDRFA, and Dubai Municipality for all corporate government dependencies.</p>
              <Link href="/services" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                View Details 
                <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>

            {/* Service 4: Emirates ID & Medical */}
            <div className="service-card group bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 p-10 rounded-[40px] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-uae-green transition-colors">Emirates ID & Medical</h3>
              <p className="text-text-gray font-medium leading-relaxed mb-8 flex-grow">Hassle-free Emirates ID fingerprinting scheduling and medical fitness test assistance.</p>
              <Link href="/services" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                View Details 
                <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>

            {/* Service 5: Legal Translation */}
            <div className="service-card group bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 p-10 rounded-[40px] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c1.111 2.51 2.766 4.793 4.876 6.645" /></svg>
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-uae-green transition-colors">Legal Translation</h3>
              <p className="text-text-gray font-medium leading-relaxed mb-8 flex-grow">Certified legal translation of certificates, contracts, and power of attorney documents.</p>
              <Link href="/services" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                View Details 
                <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>

            {/* Service 6: VAT & Tax */}
            <div className="service-card group bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-uae-green/10 p-10 rounded-[40px] border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 bg-uae-green/5 text-uae-green group-hover:bg-uae-green group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 group-hover:text-uae-green transition-colors">VAT & Tax Services</h3>
              <p className="text-text-gray font-medium leading-relaxed mb-6 flex-grow">Registration, tax planning, and compliance for Corporate Tax and Federal Tax Authority (FTA).</p>
              <Link href="/services" className="text-uae-green font-bold text-sm inline-flex items-center gap-2 group/link">
                View Details 
                <span className="w-8 h-8 bg-uae-green/10 rounded-full flex items-center justify-center group-hover/link:bg-uae-green group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-4 bg-uae-green hover:bg-[#005a24] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-uae-green/20 transform hover:-translate-y-1 group">
              View All Services
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Stats / Achievement Section - New! */}
      <section className="py-20  relative overflow-hidden border-y border-gold-accent/10">
        {/* Background Decorative Patterns */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
          {/* Hex Grid / Cubes (Left) */}
          <div className="absolute top-10 left-[-50px] w-64 h-64 opacity-20 transform -rotate-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-gold-accent" fill="currentColor">
              <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 0 L50 50 M50 50 L93.3 25 M50 50 L6.7 25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          
          {/* Concentric Circles (Right) */}
          <div className="absolute top-10 right-10 w-48 h-48 opacity-10">
            <div className="absolute inset-0 border-2 border-uae-green rounded-full scale-100"></div>
            <div className="absolute inset-0 border-2 border-uae-green rounded-full scale-75"></div>
            <div className="absolute inset-0 border-2 border-uae-green rounded-full scale-50"></div>
            <div className="absolute inset-0 border-2 border-uae-green rounded-full scale-25"></div>
          </div>

          {/* Diagonal Lines (Bottom Right) */}
          <div className="absolute bottom-10 right-20 space-y-3 opacity-20 rotate-45">
            <div className="w-32 h-2 bg-uae-green rounded-full"></div>
            <div className="w-48 h-2 bg-gold-accent rounded-full"></div>
            <div className="w-40 h-2 bg-uae-green rounded-full"></div>
          </div>

          {/* Dots Pattern (Left Center) */}
          <div className="absolute left-20 bottom-1/4 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#C5A854 2px, transparent 2px)', backgroundSize: '15px 15px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Central Badge */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-xl shadow-gold-accent/5 border border-gold-accent/10">
              <span className="text-text-gray font-bold text-sm lg:text-base">We Are Proudly Operating</span>
              <div className="w-12 h-12 bg-white rounded-full border-4 border-[#F0FFF4] shadow-inner flex items-center justify-center relative scale-125 mx-2">
                <span className="text-uae-green font-black text-xl">5+</span>
                <div className="absolute inset-0 bg-uae-green/5 rounded-full animate-ping opacity-50"></div>
              </div>
              <span className="text-text-gray font-bold text-sm lg:text-base">Years In The UAE Market</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Stat 1 */}
            <div className="text-center relative group">
              <div className="text-5xl lg:text-6xl font-black text-text-dark mb-3 tracking-tighter relative inline-block">
                2000+
                <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-gold-accent/20 rounded-full group-hover:bg-gold-accent/40 transition-colors"></div>
              </div>
              <p className="text-text-gray font-extrabold uppercase tracking-[0.2em] text-xs lg:text-sm">Business Setup</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center relative group">
              <div className="text-5xl lg:text-6xl font-black text-text-dark mb-3 tracking-tighter relative inline-block">
                5000+
                <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-gold-accent/20 rounded-full group-hover:bg-gold-accent/40 transition-colors"></div>
              </div>
              <p className="text-text-gray font-extrabold uppercase tracking-[0.2em] text-xs lg:text-sm">Visa Applications</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center relative group">
              <div className="text-5xl lg:text-6xl font-black text-text-dark mb-3 tracking-tighter relative inline-block">
                11+
                <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-gold-accent/20 rounded-full group-hover:bg-gold-accent/40 transition-colors"></div>
              </div>
              <p className="text-text-gray font-extrabold uppercase tracking-[0.2em] text-xs lg:text-sm">Expert Consultants</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center relative group">
              <div className="text-5xl lg:text-6xl font-black text-text-dark mb-3 tracking-tighter relative inline-block">
                100%
                <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-gold-accent/20 rounded-full group-hover:bg-gold-accent/40 transition-colors"></div>
              </div>
              <p className="text-text-gray font-extrabold uppercase tracking-[0.2em] text-xs lg:text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Small Decorative Elements */}
        <div className="absolute left-10 bottom-10">
          <svg className="w-12 h-12 text-uae-green opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        </div>
      </section>

      {/* Consultation CTA Section - Refined! */}
      <section className="py-20 bg-white relative overflow-hidden">
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
            <div className="w-full lg:w-1/2 p-10 lg:pr-16 relative z-40 text-center lg:text-right">
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

      {/* Why Choose Us & Contact Section - Enhanced! */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        {/* Dynamic Premium Background */}
        <div className="absolute inset-0 bg-[#0A2316]">
          {/* Subtle Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-uae-green/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-gold-accent/5 to-transparent"></div>
          
          {/* Abstract Floating Shapes */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-uae-green/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold-accent/5 rounded-full blur-[120px]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 xl:gap-32 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="w-full lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-gold-accent rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-2 h-2 bg-gold-accent rounded-full animate-pulse"></span>
                The Advantage
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold !text-white mb-10 tracking-tight leading-[1.1]">
                Experience The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-[#D4AF37]">Masar Al Amana</span> Excellence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="group p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-uae-green/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-1">
                  <div className="w-14 h-14 bg-uae-green/20 text-uae-green rounded-2xl flex items-center justify-center mb-6 border border-uae-green/20 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="text-xl font-bold !text-white mb-3">Maximum Efficiency</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">Streamlined digital processing through official UAE portals with direct government channel access.</p>
                </div>

                {/* Feature 2 */}
                <div className="group p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-uae-green/30 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gold-accent/20 text-gold-accent rounded-2xl flex items-center justify-center mb-6 border border-gold-accent/20 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h4 className="text-xl font-bold !text-white mb-3">Legal Compliance</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">Expert consultants stay ahead of UAE labor and immigration laws to ensure your business stays protected.</p>
                </div>

                {/* Feature 3: Long Card */}
                <div className="md:col-span-2 group p-8 rounded-[32px] bg-gradient-to-r from-uae-green/20 to-transparent backdrop-blur-xl border border-white/10 hover:border-uae-green/30 transition-all duration-500 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center flex-shrink-0 text-gold-accent border border-white/10 group-hover:rotate-6 transition-transform">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold !text-white mb-2">Transparent Pricing</h4>
                    <p className="text-white/70 text-base leading-relaxed max-w-lg">We maintain absolute honesty with no hidden fees or surprise costs. Every AED is detailed in our standard service reporting.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div className="w-full lg:w-2/5">
              <div className="relative">
                {/* Decorative Elements around form */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-uae-green/20 rounded-full blur-3xl"></div>
                
                {/* Main Form Card */}
                <div className="relative bg-white rounded-[40px] p-10 lg:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Subtle Top Accent */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-uae-green via-gold-accent to-uae-green"></div>
                  
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <svg className="w-8 h-8 text-uae-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <h3 className="text-3xl font-black text-text-dark mb-3 tracking-tight">Need Urgent Help?</h3>
                    <p className="text-text-gray font-medium">Leave your details and our experts will contact you within <span className="text-uae-green font-bold">5 minutes</span>.</p>
                  </div>

                  <form className="space-y-5">
                    <div className="group">
                      <label className="block text-xs font-bold text-text-gray uppercase tracking-widest mb-2 ml-1 group-focus-within:text-uae-green transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Abdullah Ahmed" 
                        className="w-full h-15 px-6 rounded-2xl bg-gray-50 border-2 border-transparent text-text-dark font-semibold focus:bg-white focus:border-uae-green/20 focus:ring-4 focus:ring-uae-green/5 outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-xs font-bold text-text-gray uppercase tracking-widest mb-2 ml-1 group-focus-within:text-uae-green transition-colors">Mobile Number</label>
                      <input 
                        type="tel" 
                        placeholder="+971 -- --- ----" 
                        className="w-full h-15 px-6 rounded-2xl bg-gray-50 border-2 border-transparent text-text-dark font-semibold focus:bg-white focus:border-uae-green/20 focus:ring-4 focus:ring-uae-green/5 outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>

                    <button className="w-full h-16 bg-uae-green hover:bg-[#005a24] text-white font-black text-lg rounded-2xl shadow-xl shadow-uae-green/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mt-4">
                      Connect Now
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </button>
                    
                    <p className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-6">
                      Trusted by 5000+ Businesses in the UAE
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
