'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles, Flame } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[hsl(280,20%,85%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 text-[hsl(280,24%,45%)] mr-1" />
              <Flame className="w-6 h-6 text-[hsl(340,35%,75%)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[hsl(280,35%,18%)] group-hover:text-[hsl(280,24%,45%)] transition-colors">
                Grannys & Lucky Charma
              </span>
              <span className="text-xs text-[hsl(280,28%,35%)]">
                Cleaning & Candles
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/cleaning"
              className="text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] transition-colors font-medium flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Commercial Cleaning</span>
            </Link>
            <Link
              href="/candles"
              className="text-[hsl(280,35%,18%)] hover:text-[hsl(340,35%,75%)] transition-colors font-medium flex items-center space-x-2"
            >
              <Flame className="w-4 h-4" />
              <span>Handmade Candles</span>
            </Link>
            <a
              href="#contact"
              className="bg-[hsl(280,24%,45%)] text-white px-6 py-2 rounded-full hover:shadow-[0_6px_16px_rgba(107,76,122,0.3)] transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[hsl(280,20%,95%)] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[hsl(280,35%,18%)]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(280,35%,18%)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(280,20%,85%)]">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/cleaning"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[hsl(280,35%,18%)] hover:text-[hsl(280,24%,45%)] transition-colors font-medium flex items-center space-x-2 py-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Commercial Cleaning</span>
              </Link>
              <Link
                href="/candles"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[hsl(280,35%,18%)] hover:text-[hsl(340,35%,75%)] transition-colors font-medium flex items-center space-x-2 py-2"
              >
                <Flame className="w-4 h-4" />
                <span>Handmade Candles</span>
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[hsl(280,24%,45%)] text-white px-6 py-3 rounded-full text-center hover:shadow-[0_6px_16px_rgba(107,76,122,0.3)] transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
