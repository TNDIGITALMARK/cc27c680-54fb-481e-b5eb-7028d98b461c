import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServicePlaceholder } from '@/components/service-placeholder';
import {
  Sparkles,
  Building2,
  Home,
  Droplets,
  Wind,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Phone,
  Mail,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

// Mock data for services
const services = [
  {
    icon: 'building',
    title: 'Daily Office Cleaning',
    description: 'Keep your workspace spotless with our comprehensive daily cleaning service.',
    features: ['Dusting & vacuuming', 'Trash removal', 'Surface sanitization', 'Restroom cleaning'],
  },
  {
    icon: 'sparkles',
    title: 'Deep Sanitization',
    description: 'Thorough deep cleaning and sanitization for a healthy work environment.',
    features: ['High-touch surface cleaning', 'Disinfection protocols', 'Floor deep cleaning', 'Air quality improvement'],
  },
  {
    icon: 'home',
    title: 'Floor Care & Maintenance',
    description: 'Professional floor care including stripping, waxing, and polishing.',
    features: ['Floor stripping & waxing', 'Carpet cleaning', 'Tile & grout cleaning', 'Hardwood maintenance'],
  },
];

// Mock testimonials
const testimonials = [
  {
    quote: 'Grannys has kept our office spotless for three years running - truly reliable service.',
    author: 'Tech Startup Manager',
    company: 'Downtown Business District',
    rating: 5,
  },
  {
    quote: 'Professional service that never misses a detail. Our medical facility has never looked better.',
    author: 'Facilities Director',
    company: 'Medical Plaza',
    rating: 5,
  },
  {
    quote: 'Emergency cleaning response was incredible. They saved us when we needed it most.',
    author: 'Retail Manager',
    company: 'Shopping Center',
    rating: 5,
  },
];

// Service areas
const serviceAreas = [
  'Downtown Business District',
  'Industrial Park',
  'Medical Plaza',
  'Retail Centers',
  'Office Complexes',
  'Restaurant & Hospitality',
];

export default function CleaningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(280, 20%, 78%) 0%, hsl(280, 24%, 45%) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-12 h-12 text-white" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Grannys Commercial Cleaning
              </h1>
            </div>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Professional cleaning services you can trust. We maintain spotless commercial spaces
              with dedication and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="bg-white text-[hsl(280,24%,45%)] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
              >
                Get Free Quote
              </a>
              <a
                href="tel:5551234567"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all text-center"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)] max-w-3xl mx-auto">
              Comprehensive commercial cleaning solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-[hsl(280,20%,85%)] rounded-lg p-8 hover:shadow-[0_12px_32px_rgba(107,76,122,0.2)] transition-all hover:-translate-y-1"
              >
                <ServicePlaceholder
                  service={service.title}
                  icon={service.icon as 'sparkles' | 'building' | 'home'}
                  className="mb-6"
                />
                <h3 className="text-2xl font-semibold text-[hsl(280,35%,18%)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[hsl(280,28%,35%)] mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-[hsl(280,28%,35%)]">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(280,24%,45%)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Droplets, title: 'Window Cleaning', description: 'Crystal clear windows inside and out' },
              { icon: Wind, title: 'Restroom Maintenance', description: 'Daily sanitization and restocking' },
              { icon: Building2, title: 'Kitchen & Break Rooms', description: 'Complete kitchen cleaning and maintenance' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[hsl(40,25%,95%)] rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <service.icon className="w-10 h-10 text-[hsl(280,24%,45%)]" />
                </div>
                <h4 className="text-lg font-semibold text-[hsl(280,35%,18%)] mb-2">
                  {service.title}
                </h4>
                <p className="text-[hsl(280,28%,35%)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, hsl(280, 20%, 95%) 0%, hsl(280, 20%, 88%) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Why Choose Grannys?
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              We set the standard for commercial cleaning excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '24-Hour Response', description: 'Quick quote turnaround, emergency cleaning within 4 hours' },
              { icon: Shield, title: 'Fully Insured', description: 'Comprehensive insurance and bonded staff for your peace of mind' },
              { icon: CheckCircle2, title: 'Quality Guaranteed', description: '100% satisfaction guarantee on every service' },
              { icon: Star, title: 'Experienced Team', description: 'Professional staff with years of commercial cleaning expertise' },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Trusted by businesses throughout the metro area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[hsl(40,25%,95%)] rounded-lg p-8 shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[hsl(280,24%,45%)] text-[hsl(280,24%,45%)]"
                    />
                  ))}
                </div>
                <p className="text-[hsl(280,28%,35%)] mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-[hsl(280,35%,18%)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[hsl(280,28%,35%)]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, hsl(280, 20%, 78%) 0%, hsl(280, 24%, 45%) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Proudly serving businesses throughout the metro area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white font-medium hover:bg-white/20 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Tell us about your cleaning needs and we'll respond within 24 hours.
            </p>
          </div>

          <div className="bg-[hsl(40,25%,95%)] rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your business name"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                  Services Needed
                </label>
                <div className="space-y-2">
                  {['Daily Office Cleaning', 'Deep Sanitization', 'Floor Care', 'Window Cleaning', 'Restroom Maintenance', 'Kitchen Cleaning'].map((service) => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-[hsl(280,20%,85%)] text-[hsl(280,24%,45%)] focus:ring-[hsl(280,24%,45%)]"
                      />
                      <span className="text-[hsl(280,28%,35%)]">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your facility size, cleaning frequency preferences, and any specific requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all resize-none"
                />
              </div>

              <button className="w-full bg-[hsl(280,24%,45%)] text-white py-4 rounded-full font-semibold hover:shadow-[0_6px_16px_rgba(107,76,122,0.3)] transition-all hover:-translate-y-0.5">
                Request Free Quote
              </button>

              <p className="text-center text-sm text-[hsl(280,28%,35%)]">
                Or call us directly at{' '}
                <a href="tel:5551234567" className="text-[hsl(280,24%,45%)] font-medium hover:underline">
                  (555) 123-4567
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
