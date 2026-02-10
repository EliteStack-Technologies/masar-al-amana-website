'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <>
      {/* Top Bar - Premium Dark Theme */}
      <div className="hidden lg:block bg-[#0A2316] text-white/80 text-xs py-2 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-[80px] flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@masaralamana.ae" className="flex items-center gap-2 hover:text-gold-accent transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@masaralamana.ae
            </a>
            <a href="tel:+971556541988" className="flex items-center gap-2 hover:text-gold-accent transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +971 55 654 1988
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mon - Sat: 9:00 AM - 6:00 PM
            </span>
         
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed md:sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white backdrop-blur-lg shadow-lg py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-[80px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
               <img 
                 src="/logo.png" 
                 alt="Masar Al Amana Logo" 
                 className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`} 
               />
            
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`text-sm font-bold uppercase tracking-wide transition-colors relative group py-2 ${
                      pathname === link.href ? 'text-uae-green' : 'text-gray-600 hover:text-uae-green'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-accent transform origin-left transition-transform duration-300 ${
                      pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                ))}
              </nav>
              
              <Link href="/contact" className="group relative px-6 py-3 overflow-hidden rounded-xl bg-uae-green text-white shadow-lg transition-all duration-300 hover:shadow-uae-green/30 hover:-translate-y-0.5">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative flex items-center gap-2 font-bold text-sm">
                  Contact Us
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-30 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)} 
        />

        {/* Mobile Menu Sidebar */}
        <div className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden z-40 flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F8FAFC]">
              <span className="text-lg font-black text-uae-green">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-2 overflow-y-auto flex-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`text-lg font-bold p-4 rounded-xl transition-all ${
                    pathname === link.href 
                    ? 'bg-uae-green/5 text-uae-green translate-x-2' 
                    : 'text-gray-600 hover:bg-gray-50 hover:translate-x-2'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  className="w-full btn-primary justify-center py-4 text-base shadow-lg shadow-uae-green/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Support
                </Link>
              </div>

               {/* Mobile Contact Info */}
               <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-2xl">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Get in touch</h4>
                  
                  <a href="tel:+971556541988" className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-uae-green/10 flex items-center justify-center text-uae-green">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="font-bold">+971 55 654 1988</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-medium text-sm">Mon-Sat: 9AM - 6PM</span>
                  </div>
               </div>
            </div>
        </div>
      </header>
    </>
  );
}
