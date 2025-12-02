import { Sparkles, Building2, Home } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServicePlaceholderProps {
  service?: string;
  icon?: 'sparkles' | 'building' | 'home';
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  building: Building2,
  home: Home,
};

export function ServicePlaceholder({
  service = "Service",
  icon = 'sparkles',
  className = ""
}: ServicePlaceholderProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className={`relative aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-[hsl(280,20%,78%)] to-[hsl(280,24%,45%)] shadow-[0_8px_24px_rgba(107,76,122,0.15)] ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(107,76,122,0.1)] to-transparent" />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          size={64}
          strokeWidth={1.5}
          className="text-light-primary opacity-40"
        />
      </div>

      {/* Service label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(107,76,122,0.9)] to-transparent">
        <p className="text-sm font-medium text-light-primary text-center">
          {service}
        </p>
      </div>
    </div>
  );
}
