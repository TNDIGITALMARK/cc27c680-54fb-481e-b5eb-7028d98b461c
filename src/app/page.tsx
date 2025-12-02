import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Sparkles, CheckCircle2, Clock, Shield, Flame, Heart, Gift, Star } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Gradient Background */}
      <section
        className="relative py-24 md:py-32 lg:py-40 px-4 overflow-hidden animated-gradient"
        style={{
          background: 'linear-gradient(135deg, hsl(280, 20%, 78%) 0%, hsl(340, 45%, 85%) 50%, hsl(280, 20%, 78%) 100%)',
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />

        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(280,35%,18%)] mb-6 leading-tight tracking-tight">
            Excellence in Every Detail
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-[hsl(280,28%,35%)] mb-12 max-w-3xl mx-auto leading-relaxed">
            From spotless commercial spaces to handcrafted candles,
            <br className="hidden md:block" />
            we bring quality and care to everything we do.
          </p>

          {/* Dual Call-to-Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            {/* Cleaning Card */}
            <Link
              href="/cleaning"
              className="group relative bg-white rounded-2xl p-10 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_16px_48px_rgba(107,76,122,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)] mb-4 group-hover:text-[hsl(280,24%,45%)] transition-colors duration-300">
                  Commercial Cleaning
                </h3>
                <p className="text-lg text-[hsl(280,28%,35%)] leading-relaxed mb-6">
                  Professional cleaning services for offices, retail spaces, and commercial properties.
                </p>
                <div className="inline-flex items-center text-[hsl(280,24%,45%)] font-semibold text-lg group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* Candles Card */}
            <Link
              href="/candles"
              className="group relative bg-white rounded-2xl p-10 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_16px_48px_rgba(107,76,122,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Flame className="w-10 h-10 text-[hsl(280,24%,45%)]" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)] mb-4 group-hover:text-[hsl(340,35%,75%)] transition-colors duration-300">
                  Handmade Candles
                </h3>
                <p className="text-lg text-[hsl(280,28%,35%)] leading-relaxed mb-6">
                  Artisan candles hand-poured with premium ingredients and delightful scents.
                </p>
                <div className="inline-flex items-center text-[hsl(340,35%,75%)] font-semibold text-lg group-hover:gap-3 transition-all duration-300">
                  <span>Shop Now</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <div className="inline-block mb-4">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[hsl(280,20%,95%)] to-[hsl(340,45%,95%)] text-[hsl(280,24%,45%)] rounded-full text-sm font-semibold tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(280,35%,18%)] mb-6 leading-tight">
              Two Businesses, One Commitment<br className="hidden md:block" /> to Excellence
            </h2>
            <p className="text-xl md:text-2xl text-[hsl(280,28%,35%)] max-w-3xl mx-auto leading-relaxed">
              Whether it's maintaining your commercial space or creating the perfect ambiance,
              we bring the same dedication to quality and personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trusted & Reliable',
                description: 'Years of experience serving our community with integrity.',
                color: 'from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)]',
              },
              {
                icon: CheckCircle2,
                title: 'Quality Guaranteed',
                description: 'We stand behind every service and product we deliver.',
                color: 'from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)]',
              },
              {
                icon: Heart,
                title: 'Personal Touch',
                description: 'Family-owned business that treats every customer like family.',
                color: 'from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)]',
              },
              {
                icon: Star,
                title: 'Exceptional Results',
                description: 'From spotless spaces to beautiful candles, we exceed expectations.',
                color: 'from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)]',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-[hsl(40,25%,95%)] rounded-2xl p-8 text-center hover:shadow-[0_12px_32px_rgba(107,76,122,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-3 group-hover:text-[hsl(280,24%,45%)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section
        className="section-spacing px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, hsl(280, 20%, 78%) 0%, hsl(280, 20%, 90%) 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cleaning Preview */}
            <div className="group bg-white rounded-3xl p-10 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_20px_48px_rgba(107,76,122,0.25)] transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] group-hover:text-[hsl(280,24%,45%)] transition-colors">
                  Commercial Cleaning
                </h2>
              </div>
              <p className="text-lg text-[hsl(280,28%,35%)] mb-8 leading-relaxed">
                Professional cleaning services tailored to your business needs. We handle everything
                from daily maintenance to deep sanitization.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Daily Office Cleaning',
                  'Deep Sanitization',
                  'Floor Care & Maintenance',
                  'Window Cleaning',
                  'Emergency Response Available',
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3 group/item">
                    <div className="w-6 h-6 bg-[hsl(280,20%,95%)] rounded-full flex items-center justify-center group-hover/item:bg-[hsl(280,24%,45%)] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(280,24%,45%)] group-hover/item:text-white flex-shrink-0 transition-colors" />
                    </div>
                    <span className="text-[hsl(280,28%,35%)] font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/cleaning"
                className="inline-flex items-center justify-center bg-[hsl(280,24%,45%)] text-white px-10 py-4 rounded-full hover:shadow-[0_8px_20px_rgba(107,76,122,0.4)] transition-all hover:-translate-y-1 font-semibold text-lg group/btn"
              >
                <span>View All Services</span>
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Candles Preview */}
            <div className="group bg-white rounded-3xl p-10 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_20px_48px_rgba(107,76,122,0.25)] transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] group-hover:text-[hsl(340,35%,75%)] transition-colors">
                  Handmade Candles
                </h2>
              </div>
              <p className="text-lg text-[hsl(280,28%,35%)] mb-8 leading-relaxed">
                Each candle is lovingly hand-poured with premium soy wax and carefully selected
                fragrances to bring warmth to your space.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium Soy Wax Blend',
                  'Long-Lasting Burn Time',
                  'Signature Scent Collection',
                  'Custom Orders Available',
                  'Perfect for Gifts & Events',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 group/item">
                    <div className="w-6 h-6 bg-[hsl(340,45%,95%)] rounded-full flex items-center justify-center group-hover/item:bg-[hsl(340,35%,75%)] transition-colors">
                      <Heart className="w-4 h-4 text-[hsl(340,35%,75%)] group-hover/item:text-white flex-shrink-0 transition-colors" />
                    </div>
                    <span className="text-[hsl(280,28%,35%)] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/candles"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] text-[hsl(280,35%,18%)] px-10 py-4 rounded-full hover:shadow-[0_8px_20px_rgba(212,165,184,0.5)] transition-all hover:-translate-y-1 font-semibold text-lg group/btn"
              >
                <span>Browse Collection</span>
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-[hsl(280,20%,95%)] to-[hsl(340,45%,95%)] text-[hsl(280,24%,45%)] rounded-full text-sm font-semibold tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(280,35%,18%)] mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-[hsl(280,28%,35%)] mb-16 max-w-3xl mx-auto leading-relaxed">
            Whether you need reliable commercial cleaning or beautiful handmade candles,
            we're here to help. Contact us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-gradient-to-br from-[hsl(280,20%,95%)] to-[hsl(280,20%,98%)] rounded-3xl p-10 hover:shadow-[0_12px_32px_rgba(107,76,122,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-3">
                  Cleaning Services
                </h3>
                <p className="text-[hsl(280,28%,35%)] mb-6 text-lg">Get a free quote for your business</p>
                <div className="space-y-3">
                  <a
                    href="tel:5551234567"
                    className="block text-[hsl(280,24%,45%)] font-semibold text-lg hover:text-[hsl(280,35%,18%)] transition-colors"
                  >
                    (555) 123-4567
                  </a>
                  <a
                    href="mailto:cleaning@grannys.com"
                    className="block text-[hsl(280,24%,45%)] font-semibold hover:text-[hsl(280,35%,18%)] transition-colors"
                  >
                    cleaning@grannys.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[hsl(340,45%,95%)] to-[hsl(340,45%,98%)] rounded-3xl p-10 hover:shadow-[0_12px_32px_rgba(212,165,184,0.3)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-3">
                  Candle Orders
                </h3>
                <p className="text-[hsl(280,28%,35%)] mb-6 text-lg">Place your custom order today</p>
                <div className="space-y-3">
                  <a
                    href="tel:5557654321"
                    className="block text-[hsl(340,35%,75%)] font-semibold text-lg hover:text-[hsl(280,35%,18%)] transition-colors"
                  >
                    (555) 765-4321
                  </a>
                  <a
                    href="mailto:candles@luckycharma.com"
                    className="block text-[hsl(340,35%,75%)] font-semibold hover:text-[hsl(280,35%,18%)] transition-colors"
                  >
                    candles@luckycharma.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center justify-center space-x-3 text-[hsl(280,28%,35%)] bg-[hsl(280,20%,98%)] px-8 py-4 rounded-full text-lg">
            <Clock className="w-5 h-5 text-[hsl(280,24%,45%)]" />
            <span className="font-medium">Available Monday through Sunday, 6 AM - 10 PM</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}