export const metadata = {
  title: "About Us - Masar Al Amana",
  description: "Learn about Masar Al Amana, your trusted partner for government services in UAE. Our mission, vision, and team of experts.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Premium Header with Image */}
      <section className="relative h-[300px] lg:h-[350px] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about-header.jpg" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Multi-layered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00732F]/90 via-[#00732F]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0A2316]/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[#C5A854] rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-2 h-2 bg-[#C5A854] rounded-full animate-pulse"></span>
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-black !text-white mb-6 tracking-tight leading-[1.1]">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A854] to-[#D4AF37]">Masar Al Amana</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed">
              Leading the way in simplified government procedures and business solutions across the UAE since 2019.
            </p>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <div className="w-full lg:w-1/2 relative">
               {/* Decorative background element for image */}
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-uae-green/5 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold-accent/5 rounded-full blur-3xl"></div>
               
               <div className="relative group">
                 <div className="absolute inset-0 bg-uae-green/10 rounded-[40px] transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
                 <div className="relative bg-white p-4 rounded-[40px] shadow-2xl shadow-black/5 z-10 overflow-hidden">
                   <img 
                    src="/about-1.jpg" 
                    alt="Our Office" 
                    className="w-full lg:h-[500px] md:h-[400px] h-[300px] object-cover rounded-[32px] transform group-hover:scale-105 transition-transform duration-700" 
                   />
                 </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-uae-green font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-text-dark tracking-tight leading-[1.2]">Your Gateway to Seamless Government Services</h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed font-semibold">
                Masar Al Amana is a premier business setup and government services provider in the UAE. We specialize in helping entrepreneurs, establishing companies, and managing all related government documentation with precision and speed.
              </p>
              <p className="text-text-gray text-base mb-10 leading-relaxed font-medium">
                With years of experience and a deep understanding of UAE laws and regulations, our team ensures 100% compliance for all your visa, licensing, and legal document needs. We pride ourselves on our transparency, efficiency, and customer-centric approach.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-[#00732F] pl-4">
                  <h4 className="font-bold text-lg text-gray-900">Our Mission</h4>
                  <p className="text-sm text-gray-600 mt-1">To simplify complex government processes and empower businesses to thrive in the UAE.</p>
                </div>
                <div className="border-l-4 border-[#C5A572] pl-4">
                  <h4 className="font-bold text-lg text-gray-900">Our Vision</h4>
                  <p className="text-sm text-gray-600 mt-1">To be the most trusted and efficient typing center and business consultancy in the region.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#00732F]">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#00732F] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">We operate with complete transparency and honesty in all our dealings, ensuring you are always informed.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#00732F]">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#00732F] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p className="text-gray-600">We understand the value of time. Our streamlined processes ensure the fastest turnaround times.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#00732F]">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#00732F] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600">Your satisfaction is our priority. We provide personalized support tailored to your specific needs.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
