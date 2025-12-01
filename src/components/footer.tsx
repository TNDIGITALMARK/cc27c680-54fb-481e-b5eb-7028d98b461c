import { Sparkles, Flame, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(280,24%,45%)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cleaning Business */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-[hsl(340,45%,85%)]" />
              <h3 className="text-xl font-semibold">Grannys Commercial Cleaning</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Professional commercial cleaning services you can trust. Serving businesses with excellence since day one.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>cleaning@grannys.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Serving Metro Area</span>
              </div>
            </div>
          </div>

          {/* Candle Business */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="w-6 h-6 text-[hsl(340,45%,85%)]" />
              <h3 className="text-xl font-semibold">Lucky Charma Handmade Candles</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Artisan candles crafted with love. Each candle is hand-poured to bring warmth and ambiance to your space.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 765-4321</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>candles@luckycharma.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Online & Local Pickup</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-white/80">
                <strong>Hours:</strong>
              </p>
              <p className="text-white/70">
                Cleaning: Mon-Sun, 6 AM - 10 PM
              </p>
              <p className="text-white/70">
                Candle Orders: 24/7 Online
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Grannys Commercial Cleaning & Lucky Charma Handmade Candles. All rights reserved.
          </p>
          <p className="mt-2">
            Two trusted businesses, one family dedication to excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
