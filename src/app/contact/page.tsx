import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, Flame, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Grannys Commercial Cleaning & Lucky Charma Candles',
  description: 'Get in touch with us for commercial cleaning services or custom candle orders. We\'re here to help!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] w-full flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(280, 20%, 78%) 0%, hsl(340, 45%, 85%) 50%, hsl(280, 24%, 45%) 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center fade-in">
          <div className="inline-block mb-6">
            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-[hsl(280,24%,45%)] rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
              Get In Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(280,35%,18%)] mb-6 leading-[1.1] tracking-tight">
            We'd Love to<br className="hidden md:block" /> Hear From You
          </h1>

          <p className="text-xl md:text-2xl text-[hsl(280,28%,35%)] max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you need professional cleaning services or beautiful handmade candles,<br className="hidden md:block" />
            we're here to help make it happen.
          </p>

          {/* Quick Contact Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
              <Clock className="w-6 h-6 text-[hsl(280,24%,45%)]" />
              <div className="text-left">
                <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Response Time</p>
                <p className="text-lg font-bold text-[hsl(280,35%,18%)]">Within 24 Hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
              <MessageSquare className="w-6 h-6 text-[hsl(340,35%,75%)]" />
              <div className="text-left">
                <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Available</p>
                <p className="text-lg font-bold text-[hsl(280,35%,18%)]">7 Days a Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section-spacing px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(280,35%,18%)] mb-6">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)] max-w-3xl mx-auto">
              Select the business you'd like to contact and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Cleaning Services Contact */}
            <div className="group relative bg-gradient-to-br from-[hsl(280,20%,95%)] to-white rounded-3xl p-10 shadow-[0_8px_24px_rgba(107,76,122,0.15)] hover:shadow-[0_20px_48px_rgba(107,76,122,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Sparkles className="w-8 h-8 text-light-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)] group-hover:text-[hsl(280,24%,45%)] transition-colors">
                      Commercial Cleaning
                    </h3>
                    <p className="text-[hsl(280,28%,35%)]">Grannys Cleaning Services</p>
                  </div>
                </div>

                <p className="text-lg text-[hsl(280,28%,35%)] mb-8 leading-relaxed">
                  Need a quote for your commercial space? Looking for regular cleaning services or a one-time deep clean?
                  We're here to provide professional solutions tailored to your business needs.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:5551234567"
                    className="group/link flex items-center space-x-4 p-4 bg-white rounded-xl hover:bg-[hsl(280,20%,98%)] transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-[hsl(280,20%,95%)] rounded-lg flex items-center justify-center group-hover/link:bg-[hsl(280,24%,45%)] transition-colors">
                      <Phone className="w-6 h-6 text-[hsl(280,24%,45%)] group-hover/link:text-light-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Call Us</p>
                      <p className="text-lg font-bold text-[hsl(280,35%,18%)]">(555) 123-4567</p>
                    </div>
                  </a>

                  <a
                    href="mailto:cleaning@grannys.com"
                    className="group/link flex items-center space-x-4 p-4 bg-white rounded-xl hover:bg-[hsl(280,20%,98%)] transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-[hsl(280,20%,95%)] rounded-lg flex items-center justify-center group-hover/link:bg-[hsl(280,24%,45%)] transition-colors">
                      <Mail className="w-6 h-6 text-[hsl(280,24%,45%)] group-hover/link:text-light-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Email Us</p>
                      <p className="text-lg font-bold text-[hsl(280,35%,18%)]">cleaning@grannys.com</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-[hsl(280,20%,95%)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[hsl(280,24%,45%)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Service Area</p>
                      <p className="text-lg font-bold text-[hsl(280,35%,18%)]">Serving Metro Area</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/cleaning"
                  className="inline-flex items-center justify-center w-full bg-[hsl(280,24%,45%)] text-light-primary px-8 py-4 rounded-full hover:shadow-[0_8px_20px_rgba(107,76,122,0.4)] transition-all hover:-translate-y-1 font-semibold text-lg group/btn"
                >
                  <span>View Cleaning Services</span>
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Candle Orders Contact */}
            <div className="group relative bg-gradient-to-br from-[hsl(340,45%,95%)] to-white rounded-3xl p-10 shadow-[0_8px_24px_rgba(212,165,184,0.15)] hover:shadow-[0_20px_48px_rgba(212,165,184,0.3)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Flame className="w-8 h-8 text-light-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)] group-hover:text-[hsl(340,35%,75%)] transition-colors">
                      Handmade Candles
                    </h3>
                    <p className="text-[hsl(280,28%,35%)]">Lucky Charma Candles</p>
                  </div>
                </div>

                <p className="text-lg text-[hsl(280,28%,35%)] mb-8 leading-relaxed">
                  Interested in custom candle orders? Need a special scent for an event? Want to learn more about our collection?
                  We'd love to help you find the perfect candles for any occasion.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:5557654321"
                    className="group/link flex items-center space-x-4 p-4 bg-white rounded-xl hover:bg-[hsl(340,45%,98%)] transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-[hsl(340,45%,95%)] rounded-lg flex items-center justify-center group-hover/link:bg-[hsl(340,35%,75%)] transition-colors">
                      <Phone className="w-6 h-6 text-[hsl(340,35%,75%)] group-hover/link:text-light-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Call Us</p>
                      <p className="text-lg font-bold text-[hsl(280,35%,18%)]">(555) 765-4321</p>
                    </div>
                  </a>

                  <a
                    href="mailto:candles@luckycharma.com"
                    className="group/link flex items-center space-x-4 p-4 bg-white rounded-xl hover:bg-[hsl(340,45%,98%)] transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-[hsl(340,45%,95%)] rounded-lg flex items-center justify-center group-hover/link:bg-[hsl(340,35%,75%)] transition-colors">
                      <Mail className="w-6 h-6 text-[hsl(340,35%,75%)] group-hover/link:text-light-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Email Us</p>
                      <p className="text-lg font-bold text-[hsl(280,35%,18%)]">candles@luckycharma.com</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-[hsl(340,45%,95%)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[hsl(340,35%,75%)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(280,28%,35%)] font-medium">Availability</p>
                      <p className="text-lg font-bold text-[hsl(280,35%,18%)]">Online & Local Pickup</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/candles"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] text-[hsl(280,35%,18%)] px-8 py-4 rounded-full hover:shadow-[0_8px_20px_rgba(212,165,184,0.5)] transition-all hover:-translate-y-1 font-semibold text-lg group/btn"
                >
                  <span>Browse Candle Collection</span>
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[hsl(280,20%,78%)] to-[hsl(340,45%,85%)] rounded-3xl p-10 shadow-[0_12px_32px_rgba(107,76,122,0.2)]">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Clock className="w-8 h-8 text-[hsl(280,35%,18%)]" />
              <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)]">Business Hours</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-light-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-[hsl(280,35%,18%)]">Commercial Cleaning</h4>
                </div>
                <p className="text-[hsl(280,28%,35%)] text-lg leading-relaxed">
                  <span className="font-semibold text-[hsl(280,35%,18%)]">Monday - Sunday</span><br />
                  6:00 AM - 10:00 PM
                </p>
                <p className="text-[hsl(280,28%,35%)] mt-2 text-sm">
                  Emergency services available 24/7
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-xl flex items-center justify-center">
                    <Flame className="w-6 h-6 text-light-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-[hsl(280,35%,18%)]">Candle Orders</h4>
                </div>
                <p className="text-[hsl(280,28%,35%)] text-lg leading-relaxed">
                  <span className="font-semibold text-[hsl(280,35%,18%)]">Online Orders</span><br />
                  24/7 Available
                </p>
                <p className="text-[hsl(280,28%,35%)] mt-2 text-sm">
                  Local pickup by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-spacing px-4 bg-[hsl(280,20%,98%)]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="inline-block px-6 py-3 bg-white text-[hsl(280,24%,45%)] rounded-full text-sm font-semibold tracking-wide uppercase shadow-md">
              What to Expect
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(280,35%,18%)] mb-6">
            Here's What Happens Next
          </h2>

          <p className="text-xl text-[hsl(280,28%,35%)] mb-16 max-w-3xl mx-auto">
            We believe in providing exceptional customer service from the very first contact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(107,76,122,0.1)] hover:shadow-[0_12px_32px_rgba(107,76,122,0.15)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-light-primary">
                1
              </div>
              <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-4">Reach Out</h3>
              <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                Contact us via phone, email, or visit our locations. We're ready to listen to your needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(107,76,122,0.1)] hover:shadow-[0_12px_32px_rgba(107,76,122,0.15)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[hsl(280,35%,18%)]">
                2
              </div>
              <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-4">Quick Response</h3>
              <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                We'll respond within 24 hours with answers to your questions or schedule a consultation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(107,76,122,0.1)] hover:shadow-[0_12px_32px_rgba(107,76,122,0.15)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-light-primary">
                3
              </div>
              <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-4">Get Started</h3>
              <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                Begin your journey to a cleaner space or discover your perfect candle collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(280,35%,18%)] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-[hsl(280,28%,35%)] mb-12 max-w-2xl mx-auto">
            Don't hesitate to reach out. We're here to help you find the perfect solution for your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:5551234567"
              className="group inline-flex items-center justify-center bg-[hsl(280,24%,45%)] text-light-primary px-10 py-5 rounded-full hover:shadow-[0_12px_32px_rgba(107,76,122,0.4)] transition-all hover:-translate-y-1 font-semibold text-lg min-w-[240px]"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Cleaning</span>
            </a>

            <a
              href="tel:5557654321"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] text-[hsl(280,35%,18%)] px-10 py-5 rounded-full hover:shadow-[0_12px_32px_rgba(212,165,184,0.5)] transition-all hover:-translate-y-1 font-semibold text-lg min-w-[240px]"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Candles</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
