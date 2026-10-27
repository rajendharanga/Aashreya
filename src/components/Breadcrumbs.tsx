import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp, RoutePath } from '../context/AppContext';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    path?: RoutePath;
  }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 md:px-8 max-w-[1260px] mx-auto w-full">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#FAF7F2]/60">
        <li className="flex items-center">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#D4AF37]/50 shrink-0" />
              {isLast || !item.path ? (
                <span className="text-[#D4AF37] font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => item.path && navigate(item.path)}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
