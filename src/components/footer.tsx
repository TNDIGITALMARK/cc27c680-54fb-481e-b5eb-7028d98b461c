import { Sparkles, Flame, Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[hsl(280,24%,45%)] via-[hsl(280,24%,40%)] to-[hsl(280,24%,35%)] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(340,45%,85%)]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Cleaning Business */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6 text-[hsl(340,45%,85%)]" />
              </div>
              <h3 className="text-2xl font-bold">Grannys Commercial Cleaning</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed text-lg">
              Professional commercial cleaning services you can trust. Serving businesses with excellence since day one.
            </p>
            <div className="space-y-3">
              <a
                href="tel:5551234567"
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group/link"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">(555) 123-4567</span>
              </a>
              <a
                href="mailto:cleaning@grannys.com"
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group/link"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">cleaning@grannys.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Serving Metro Area</span>
              </div>
            </div>
          </div>

          {/* Candle Business */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Flame className="w-6 h-6 text-[hsl(340,45%,85%)]" />
              </div>
              <h3 className="text-2xl font-bold">Lucky Charma Handmade Candles</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed text-lg">
              Artisan candles crafted with love. Each candle is hand-poured to bring warmth and ambiance to your space.
            </p>
            <div className="space-y-3">
              <a
                href="tel:5557654321"
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group/link"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">(555) 765-4321</span>
              </a>
              <a
                href="mailto:candles@luckycharma.com"
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group/link"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">candles@luckycharma.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Online & Local Pickup</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              <a
                href="#facebook"
                className="group/social w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-[hsl(280,24%,45%)] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#instagram"
                className="group/social w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-[hsl(280,24%,45%)] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#twitter"
                className="group/social w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-[hsl(280,24%,45%)] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
              <p className="text-white font-semibold text-lg flex items-center space-x-2">
                <span className="w-2 h-2 bg-[hsl(340,45%,85%)] rounded-full animate-pulse" />
                <span>Business Hours</span>
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">Cleaning:</strong> Mon-Sun, 6 AM - 10 PM
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">Candle Orders:</strong> 24/7 Online
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/90 font-medium">
                &copy; {new Date().getFullYear()} Grannys Commercial Cleaning & Lucky Charma Handmade Candles
              </p>
              <p className="text-white/70 mt-1">
                Two trusted businesses, one family dedication to excellence.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[hsl(280,24%,45%)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
