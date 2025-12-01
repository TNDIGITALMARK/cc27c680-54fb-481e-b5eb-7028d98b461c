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
        className="relative py-20 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(280, 20%, 78%) 0%, hsl(340, 45%, 85%) 100%)',
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[hsl(280,35%,18%)] mb-6 leading-tight">
            Excellence in Every Detail
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(280,28%,35%)] mb-8 max-w-3xl mx-auto leading-relaxed">
            From spotless commercial spaces to handcrafted candles,
            <br className="hidden md:block" />
            we bring quality and care to everything we do.
          </p>

          {/* Dual Call-to-Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* Cleaning Card */}
            <Link
              href="/cleaning"
              className="bg-white rounded-lg p-8 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_12px_32px_rgba(107,76,122,0.2)] transition-all hover:-translate-y-1 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[hsl(280,35%,18%)] mb-3 group-hover:text-[hsl(280,24%,45%)] transition-colors">
                Commercial Cleaning
              </h3>
              <p className="text-[hsl(280,28%,35%)] leading-relaxed mb-4">
                Professional cleaning services for offices, retail spaces, and commercial properties.
              </p>
              <div className="inline-flex items-center text-[hsl(280,24%,45%)] font-medium group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Candles Card */}
            <Link
              href="/candles"
              className="bg-white rounded-lg p-8 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_12px_32px_rgba(107,76,122,0.2)] transition-all hover:-translate-y-1 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-full flex items-center justify-center">
                  <Flame className="w-8 h-8 text-[hsl(280,24%,45%)]" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[hsl(280,35%,18%)] mb-3 group-hover:text-[hsl(340,35%,75%)] transition-colors">
                Handmade Candles
              </h3>
              <p className="text-[hsl(280,28%,35%)] leading-relaxed mb-4">
                Artisan candles hand-poured with premium ingredients and delightful scents.
              </p>
              <div className="inline-flex items-center text-[hsl(340,35%,75%)] font-medium group-hover:gap-2 transition-all">
                <span>Shop Now</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Two Businesses, One Commitment to Excellence
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)] max-w-3xl mx-auto">
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
              },
              {
                icon: CheckCircle2,
                title: 'Quality Guaranteed',
                description: 'We stand behind every service and product we deliver.',
              },
              {
                icon: Heart,
                title: 'Personal Touch',
                description: 'Family-owned business that treats every customer like family.',
              },
              {
                icon: Star,
                title: 'Exceptional Results',
                description: 'From spotless spaces to beautiful candles, we exceed expectations.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[hsl(40,25%,95%)] rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <item.icon className="w-7 h-7 text-[hsl(280,24%,45%)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, hsl(280, 20%, 78%) 0%, hsl(280, 20%, 90%) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cleaning Preview */}
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_24px_rgba(107,76,122,0.15)]">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-[hsl(280,24%,45%)]" />
                <h2 className="text-3xl font-bold text-[hsl(280,35%,18%)]">
                  Commercial Cleaning
                </h2>
              </div>
              <p className="text-[hsl(280,28%,35%)] mb-6 leading-relaxed">
                Professional cleaning services tailored to your business needs. We handle everything
                from daily maintenance to deep sanitization.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Daily Office Cleaning',
                  'Deep Sanitization',
                  'Floor Care & Maintenance',
                  'Window Cleaning',
                  'Emergency Response Available',
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(280,24%,45%)] flex-shrink-0" />
                    <span className="text-[hsl(280,28%,35%)]">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/cleaning"
                className="inline-block bg-[hsl(280,24%,45%)] text-white px-8 py-3 rounded-full hover:shadow-[0_6px_16px_rgba(107,76,122,0.3)] transition-all hover:-translate-y-0.5 font-medium"
              >
                View All Services
              </Link>
            </div>

            {/* Candles Preview */}
            <div className="bg-white rounded-lg p-8 shadow-[0_8px_24px_rgba(107,76,122,0.15)]">
              <div className="flex items-center space-x-3 mb-6">
                <Flame className="w-8 h-8 text-[hsl(340,35%,75%)]" />
                <h2 className="text-3xl font-bold text-[hsl(280,35%,18%)]">
                  Handmade Candles
                </h2>
              </div>
              <p className="text-[hsl(280,28%,35%)] mb-6 leading-relaxed">
                Each candle is lovingly hand-poured with premium soy wax and carefully selected
                fragrances to bring warmth to your space.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Premium Soy Wax Blend',
                  'Long-Lasting Burn Time',
                  'Signature Scent Collection',
                  'Custom Orders Available',
                  'Perfect for Gifts & Events',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-[hsl(340,35%,75%)] flex-shrink-0" />
                    <span className="text-[hsl(280,28%,35%)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/candles"
                className="inline-block bg-gradient-to-r from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] text-[hsl(280,35%,18%)] px-8 py-3 rounded-full hover:shadow-[0_6px_16px_rgba(212,165,184,0.4)] transition-all hover:-translate-y-0.5 font-medium"
              >
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[hsl(280,28%,35%)] mb-12 max-w-2xl mx-auto">
            Whether you need reliable commercial cleaning or beautiful handmade candles,
            we're here to help. Contact us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[hsl(40,25%,95%)] rounded-lg p-6">
              <Sparkles className="w-8 h-8 text-[hsl(280,24%,45%)] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)] mb-2">
                Cleaning Services
              </h3>
              <p className="text-[hsl(280,28%,35%)] mb-3">Get a free quote for your business</p>
              <a
                href="tel:5551234567"
                className="text-[hsl(280,24%,45%)] font-medium hover:underline"
              >
                (555) 123-4567
              </a>
              <br />
              <a
                href="mailto:cleaning@grannys.com"
                className="text-[hsl(280,24%,45%)] font-medium hover:underline"
              >
                cleaning@grannys.com
              </a>
            </div>

            <div className="bg-[hsl(40,25%,95%)] rounded-lg p-6">
              <Flame className="w-8 h-8 text-[hsl(340,35%,75%)] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)] mb-2">
                Candle Orders
              </h3>
              <p className="text-[hsl(280,28%,35%)] mb-3">Place your custom order today</p>
              <a
                href="tel:5557654321"
                className="text-[hsl(340,35%,75%)] font-medium hover:underline"
              >
                (555) 765-4321
              </a>
              <br />
              <a
                href="mailto:candles@luckycharma.com"
                className="text-[hsl(340,35%,75%)] font-medium hover:underline"
              >
                candles@luckycharma.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 text-[hsl(280,28%,35%)]">
            <Clock className="w-5 h-5" />
            <span>Available Monday through Sunday, 6 AM - 10 PM</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}