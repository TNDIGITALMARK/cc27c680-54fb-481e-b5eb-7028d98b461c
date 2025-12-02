import Image from 'next/image';

interface CandlePlaceholderProps {
  scent?: string;
  className?: string;
}

// Map scent names to their corresponding image filenames
const scentImageMap: Record<string, string> = {
  'Vanilla Dreams': '/generated/vanilla-dreams.png',
  'Lavender Sunset': '/generated/lavender-sunset.png',
  'Cinnamon Spice': '/generated/cinnamon-spice.png',
  'Ocean Breeze': '/generated/ocean-breeze.png',
  'Coffee House': '/generated/coffee-house.png',
  'Fresh Linen': '/generated/fresh-linen.png',
  'Amber & Sandalwood': '/generated/amber-sandalwood.png',
  'Rose Garden': '/generated/rose-garden.png',
  'Cedar & Sage': '/generated/cedar-sage.png',
  'Midnight Jasmine': '/generated/midnight-jasmine.png',
};

export function CandlePlaceholder({ scent = "Candle", className = "" }: CandlePlaceholderProps) {
  const imageSrc = scentImageMap[scent];

  return (
    <div
      className={`relative aspect-[3/4] rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(107,76,122,0.15)] ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${scent} candle`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
        />
      ) : (
        <>
          {/* Fallback gradient for unmapped scents */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(107,76,122,0.1)] to-transparent" />
        </>
      )}

      {/* Scent label overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
        <p className="text-sm font-medium text-white text-center drop-shadow-md">
          {scent}
        </p>
      </div>
    </div>
  );
}
