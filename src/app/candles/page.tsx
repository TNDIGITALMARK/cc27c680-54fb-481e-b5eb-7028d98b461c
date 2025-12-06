import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CandlePlaceholder } from '@/components/candle-placeholder';
import { Flame, Heart, Gift, ShoppingBag, Star, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

// Mock data for candle products
const candleCollections = [
  {
    name: 'Gift Basket',
    price: '$45.00',
    size: 'Complete Set',
    burnTime: 'Multi-item set',
    items: ['Candle', 'Face mask', 'Wax melts', 'Lotion', 'Hotel size shampoo & conditioner', 'Puff'],
    scents: [],
    isBasket: true,
  },
  {
    name: 'Candle Two-Pack Special',
    price: '$35.00',
    size: '8oz jars (2 pack)',
    burnTime: '45 hours each',
    priceNote: 'plus tax',
    scents: [
      'Bee-wax Snicker doodler',
      'Creamy vanilla',
      'Sweet raccoon & pine',
      'Pumpkin pie',
      'Coffee',
      'Cafe latte',
      'Vanilla',
      'Janine',
      'American organic coconut',
      'Jasmine Rosa',
      'Lavender gingerbread',
      'Creamy vanilla'
    ],
  },
  {
    name: 'Wax Melts - 3 Pack',
    price: '$25.00',
    size: '3 packs',
    burnTime: '24+ hours per pack',
    priceNote: 'plus tax',
    scents: [
      'Bee-wax Snicker doodler',
      'Creamy vanilla',
      'Sweet raccoon & pine',
      'Pumpkin pie',
      'Coffee',
      'Cafe latte',
      'Vanilla',
      'Janine',
    ],
  },
  {
    name: 'Wax Melts - 2 Pack',
    price: '$10.00',
    size: '2 packs',
    burnTime: '24+ hours per pack',
    priceNote: 'plus tax',
    scents: [
      'Bee-wax Snicker doodler',
      'Creamy vanilla',
      'Sweet raccoon & pine',
      'Pumpkin pie',
      'Coffee',
      'Cafe latte',
      'Vanilla',
      'Janine',
    ],
  },
];

// Signature scents details
const signatureScents = [
  {
    name: 'Bee-wax Snicker doodler',
    description: 'Sweet snickerdoodle cookie scent made with natural bee wax',
    notes: ['Cinnamon sugar', 'Butter cookie', 'Natural honey'],
  },
  {
    name: 'Creamy vanilla',
    description: 'Rich, smooth vanilla that fills your space with warmth',
    notes: ['Madagascar vanilla', 'Sweet cream', 'Soft musk'],
  },
  {
    name: 'Sweet raccoon & pine',
    description: 'Unique blend of sweet woodland notes with fresh pine',
    notes: ['Pine needles', 'Sweet woods', 'Forest floor'],
  },
  {
    name: 'Pumpkin pie',
    description: 'Classic autumn favorite with warm spices and pumpkin',
    notes: ['Pumpkin puree', 'Cinnamon', 'Nutmeg'],
  },
  {
    name: 'Coffee',
    description: 'Bold, fresh coffee aroma perfect for morning ambiance',
    notes: ['Fresh coffee', 'Dark roast', 'Espresso'],
  },
  {
    name: 'Cafe latte',
    description: 'Smooth espresso blended with steamed milk sweetness',
    notes: ['Espresso', 'Steamed milk', 'Vanilla cream'],
  },
  {
    name: 'Vanilla',
    description: 'Classic pure vanilla - timeless and comforting',
    notes: ['Pure vanilla', 'Warm sugar', 'Creamy base'],
  },
  {
    name: 'Janine',
    description: 'Signature custom blend - floral and sophisticated',
    notes: ['White florals', 'Soft musk', 'Light citrus'],
  },
  {
    name: 'American organic coconut',
    description: 'Tropical coconut scent made with organic ingredients',
    notes: ['Fresh coconut', 'Coconut cream', 'Tropical breeze'],
  },
  {
    name: 'Jasmine Rosa',
    description: 'Elegant blend of jasmine and rose petals',
    notes: ['Jasmine flowers', 'Rose petals', 'Green leaves'],
  },
  {
    name: 'Lavender gingerbread',
    description: 'Unique pairing of calming lavender with spicy gingerbread',
    notes: ['French lavender', 'Ginger spice', 'Molasses'],
  },
];

// Customer testimonials
const testimonials = [
  {
    quote: 'The Vanilla Dreams candle is absolutely divine! Burns evenly and fills my entire living room with the most amazing scent.',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    quote: 'I ordered custom candles for our wedding favors and they were perfect! Guests are still raving about them.',
    author: 'Jennifer & Mark',
    rating: 5,
  },
  {
    quote: 'Quality is incredible. These are true artisan candles - you can tell they\'re made with love and care.',
    author: 'David R.',
    rating: 5,
  },
];

export default function CandlesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(340, 45%, 85%) 0%, hsl(340, 35%, 75%) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Flame className="w-12 h-12 text-[hsl(280,24%,45%)]" />
              <h1 className="text-5xl md:text-6xl font-bold text-[hsl(280,35%,18%)]">
                Lucky Charma Handmade Candles
              </h1>
            </div>
            <p className="text-2xl text-[hsl(280,28%,35%)] mb-8 leading-relaxed">
              Artisan candles lovingly hand-poured with premium bee wax and organic soy wax, both available with beautiful fragrances.
              Each candle brings warmth, beauty, and ambiance to your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#shop"
                className="bg-[hsl(280,24%,45%)] text-light-primary px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
              >
                Shop Collection
              </a>
              <a
                href="#custom"
                className="bg-white/80 backdrop-blur-sm border-2 border-[hsl(280,24%,45%)] text-[hsl(280,24%,45%)] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all text-center"
              >
                Custom Orders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Schedule */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-[hsl(280,24%,45%)] mr-3" />
              <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)]">
                Available Every Day
              </h3>
            </div>
            <p className="text-xl text-[hsl(280,28%,35%)] mb-6">
              Shop our handmade candles Monday through Sunday
            </p>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 max-w-4xl mx-auto">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div
                  key={day}
                  className="bg-white border border-[hsl(280,24%,45%)]/30 rounded-lg py-3 px-2 text-[hsl(280,24%,45%)] font-medium text-sm md:text-base"
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="text-[hsl(280,28%,35%)] mt-6 text-lg">
              Contact us anytime to place your candle order or schedule a pickup
            </p>
          </div>
        </div>
      </section>

      {/* Wax Types Section */}
      <section
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, hsl(340, 45%, 95%) 0%, hsl(340, 45%, 88%) 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Premium Wax Options
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Choose your preferred wax type - all available with beautiful fragrances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bee Wax */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(45,85%,75%)] to-[hsl(40,80%,65%)] rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)]">
                  Bee Wax Candles
                </h3>
              </div>
              <p className="text-[hsl(280,28%,35%)] mb-4 leading-relaxed">
                Natural bee wax candles that purify the air as they burn. Rich, golden color with a subtle honey aroma that complements any fragrance.
              </p>
              <ul className="space-y-2">
                {[
                  ' 100% natural bee wax',
                  'Air-purifying properties',
                  'Long, clean burn',
                  'Available with fragrance oils',
                  'Golden, natural appearance',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-[hsl(280,28%,35%)]">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(45,85%,55%)] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organic Soy Wax */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[hsl(280,24%,45%)]" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)]">
                  Organic Soy Wax Candles
                </h3>
              </div>
              <p className="text-[hsl(280,28%,35%)] mb-4 leading-relaxed">
                Premium organic soy wax that burns cleaner and longer. Eco-friendly and sustainable, perfect for carrying our signature fragrances.
              </p>
              <ul className="space-y-2">
                {[
                  '100% organic soy wax',
                  'Eco-friendly & biodegradable',
                  'Excellent scent throw',
                  'Available with fragrance oils',
                  'Creamy, smooth appearance',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-[hsl(280,28%,35%)]">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(340,35%,75%)] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-[hsl(280,28%,35%)] bg-white rounded-full px-8 py-4 inline-block shadow-md">
              <strong className="text-[hsl(280,35%,18%)]">Both wax types</strong> are available with our complete range of signature fragrances
            </p>
          </div>
        </div>
      </section>

      {/* Featured Qualities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Why Choose Lucky Charma?
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Quality ingredients, artisan craftsmanship, and love in every candle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Premium Wax Options', description: 'Choose from bee wax or organic soy wax, both with fragrance' },
              { icon: Clock, title: 'Long Burn Time', description: 'Up to 65 hours of beautiful fragrance' },
              { icon: Heart, title: 'Hand-Poured', description: 'Each candle crafted with care and attention' },
              { icon: Gift, title: 'Perfect Gifts', description: 'Beautiful packaging for any occasion' },
            ].map((quality, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-lg p-6 text-center shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <quality.icon className="w-8 h-8 text-[hsl(280,24%,45%)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)] mb-2">
                  {quality.title}
                </h3>
                <p className="text-[hsl(280,28%,35%)] leading-relaxed">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Collections */}
      <section
        id="shop"
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(180deg, hsl(340, 45%, 95%) 0%, hsl(340, 45%, 88%) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Choose from our carefully curated candle collections.
            </p>
          </div>

          {candleCollections.map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-16">
              <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[hsl(280,35%,18%)] mb-2">
                      {collection.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-[hsl(280,28%,35%)]">
                      <span className="flex items-center space-x-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>{collection.size}</span>
                      </span>
                      {!collection.isBasket && (
                        <span className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{collection.burnTime}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-4xl font-bold text-[hsl(280,24%,45%)]">
                      {collection.price}
                    </p>
                    {collection.priceNote && (
                      <p className="text-sm text-[hsl(280,28%,35%)]">{collection.priceNote}</p>
                    )}
                    {!collection.priceNote && !collection.isBasket && (
                      <p className="text-sm text-[hsl(280,28%,35%)]">per item</p>
                    )}
                  </div>
                </div>

                {collection.isBasket && collection.items && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[hsl(280,35%,18%)] mb-3">
                      Basket Includes:
                    </h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {collection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(340,35%,75%)] flex-shrink-0" />
                          <span className="text-[hsl(280,28%,35%)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!collection.isBasket && collection.scents.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-[hsl(280,35%,18%)] mb-4">
                      Available Scents:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {collection.scents.map((scent, scentIndex) => (
                        <div key={scentIndex} className="group cursor-pointer">
                          <div className="bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-lg p-4 hover:shadow-md transition-all">
                            <p className="text-sm text-[hsl(280,35%,18%)] font-medium text-center">
                              {scent}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Scents Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Signature Scent Collection
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Explore our carefully crafted fragrance profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureScents.map((scent, index) => (
              <div
                key={index}
                className="bg-[hsl(40,25%,95%)] rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Flame className="w-6 h-6 text-[hsl(340,35%,75%)]" />
                  <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)]">
                    {scent.name}
                  </h3>
                </div>
                <p className="text-[hsl(280,28%,35%)] mb-4 leading-relaxed">
                  {scent.description}
                </p>
                <div>
                  <p className="text-sm font-medium text-[hsl(280,35%,18%)] mb-2">
                    Fragrance Notes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scent.notes.map((note, noteIndex) => (
                      <span
                        key={noteIndex}
                        className="text-xs bg-white px-3 py-1 rounded-full text-[hsl(280,28%,35%)] border border-[hsl(280,20%,85%)]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, hsl(340, 45%, 85%) 0%, hsl(340, 35%, 75%) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Join thousands of happy candle lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[hsl(340,35%,75%)] text-[hsl(340,35%,75%)]"
                    />
                  ))}
                </div>
                <p className="text-[hsl(280,28%,35%)] mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-[hsl(280,35%,18%)]">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section id="custom" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[hsl(280,35%,18%)] mb-4">
              Custom Orders & Gifts
            </h2>
            <p className="text-xl text-[hsl(280,28%,35%)]">
              Create personalized candles for weddings, events, or corporate gifts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Gift,
                title: 'Wedding Favors',
                description: 'Custom labels and scents for your special day',
                minOrder: '12 pieces',
              },
              {
                icon: ShoppingBag,
                title: 'Corporate Gifts',
                description: 'Branded candles with your company logo',
                minOrder: '24 pieces',
              },
              {
                icon: Heart,
                title: 'Special Events',
                description: 'Personalized candles for any celebration',
                minOrder: '12 pieces',
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <option.icon className="w-7 h-7 text-[hsl(280,24%,45%)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(280,35%,18%)] mb-2">
                  {option.title}
                </h3>
                <p className="text-[hsl(280,28%,35%)] mb-3 leading-relaxed">
                  {option.description}
                </p>
                <p className="text-sm font-medium text-[hsl(280,35%,18%)]">
                  Minimum: {option.minOrder}
                </p>
              </div>
            ))}
          </div>

          {/* Custom Order Form */}
          <div className="bg-[hsl(40,25%,95%)] rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[hsl(280,35%,18%)] mb-6 text-center">
              Request Custom Order Quote
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Event Date (if applicable)
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Order Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all">
                    <option>Wedding Favors</option>
                    <option>Corporate Gifts</option>
                    <option>Special Event</option>
                    <option>Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                    Quantity Needed
                  </label>
                  <input
                    type="number"
                    placeholder="Minimum 12"
                    min="12"
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[hsl(280,35%,18%)] font-medium mb-2">
                  Customization Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your custom order: preferred scents, custom labels, colors, special packaging, etc."
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(280,20%,85%)] focus:border-[hsl(280,24%,45%)] focus:ring-2 focus:ring-[hsl(280,24%,45%)]/20 outline-none transition-all resize-none"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] text-[hsl(280,35%,18%)] py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5">
                Request Custom Quote
              </button>

              <p className="text-center text-sm text-[hsl(280,28%,35%)]">
                Or email us at{' '}
                <a href="mailto:candles@luckycharma.com" className="text-[hsl(340,35%,75%)] font-medium hover:underline">
                  candles@luckycharma.com
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
