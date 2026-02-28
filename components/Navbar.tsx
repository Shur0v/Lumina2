'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 ${
          isScrolled ? 'bg-white/80 py-4 backdrop-blur-md shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <a href="#" className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            LUMINA
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 hover:opacity-60 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking"
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                isScrolled 
                  ? 'bg-stone-900 text-white hover:bg-stone-800' 
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              Book Now
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden ${isScrolled ? 'text-stone-900' : 'text-white'}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-stone-900 p-8 text-white"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="mt-24 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl font-light tracking-tight hover:italic"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 inline-block w-fit border border-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
