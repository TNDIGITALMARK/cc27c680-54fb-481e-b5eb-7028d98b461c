'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Flame } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[hsl(280,20%,85%)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-[hsl(280,20%,90%)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(280,24%,45%)] to-[hsl(340,35%,75%)] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <Sparkles className="w-7 h-7 text-[hsl(280,24%,45%)] mr-1 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <Flame className="w-7 h-7 text-[hsl(340,35%,75%)] relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-[hsl(280,35%,18%)] group-hover:text-[hsl(280,24%,45%)] transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
                Grannys & Lucky Charma
              </span>
              <span className="text-xs text-[hsl(280,28%,35%)] tracking-wide">
                Cleaning & Candles
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className="relative px-4 py-2 text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] transition-colors font-semibold group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-[hsl(280,20%,95%)] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
            <Link
              href="/cleaning"
              className="relative px-4 py-2 text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] transition-colors font-semibold flex items-center space-x-2 group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Cleaning</span>
              </span>
              <span className="absolute inset-0 bg-[hsl(280,20%,95%)] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
            <Link
              href="/candles"
              className="relative px-4 py-2 text-[hsl(280,35%,18%)] hover:text-[hsl(340,35%,75%)] transition-colors font-semibold flex items-center space-x-2 group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Flame className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Candles</span>
              </span>
              <span className="absolute inset-0 bg-[hsl(340,45%,95%)] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
            <a
              href="#contact"
              className="ml-4 relative overflow-hidden bg-gradient-to-r from-[hsl(280,24%,45%)] to-[hsl(280,24%,50%)] text-white px-8 py-3 rounded-full hover:shadow-[0_8px_20px_rgba(107,76,122,0.4)] transition-all hover:scale-105 font-semibold group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-[hsl(280,20%,95%)] transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[hsl(280,35%,18%)]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(280,35%,18%)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 border-t border-[hsl(280,20%,85%)]">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] hover:bg-[hsl(280,20%,95%)] transition-all font-semibold py-3 px-4 rounded-xl"
              >
                Home
              </Link>
              <Link
                href="/cleaning"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] hover:bg-[hsl(280,20%,95%)] transition-all font-semibold flex items-center space-x-2 py-3 px-4 rounded-xl"
              >
                <Sparkles className="w-5 h-5" />
                <span>Commercial Cleaning</span>
              </Link>
              <Link
                href="/candles"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[hsl(280,35%,18%)] hover:text-[hsl(340,35%,75%)] hover:bg-[hsl(340,45%,95%)] transition-all font-semibold flex items-center space-x-2 py-3 px-4 rounded-xl"
              >
                <Flame className="w-5 h-5" />
                <span>Handmade Candles</span>
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[hsl(280,24%,45%)] to-[hsl(280,24%,50%)] text-white px-6 py-4 rounded-2xl text-center hover:shadow-[0_8px_20px_rgba(107,76,122,0.4)] transition-all font-semibold text-lg mt-2"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
