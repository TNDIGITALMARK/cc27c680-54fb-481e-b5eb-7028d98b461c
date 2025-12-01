import { Flame } from 'lucide-react';

interface CandlePlaceholderProps {
  scent?: string;
  className?: string;
}

export function CandlePlaceholder({ scent = "Candle", className = "" }: CandlePlaceholderProps) {
  return (
    <div
      className={`relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-[hsl(340,45%,85%)] to-[hsl(340,35%,75%)] shadow-[0_8px_24px_rgba(107,76,122,0.15)] ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(107,76,122,0.1)] to-transparent" />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Flame
          size={64}
          strokeWidth={1.5}
          className="text-[hsl(280,24%,45%)] opacity-30"
        />
      </div>

      {/* Scent label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent">
        <p className="text-sm font-medium text-[hsl(280,35%,18%)] text-center">
          {scent}
        </p>
      </div>
    </div>
  );
}
