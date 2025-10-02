'use client';

import { ReactNode } from 'react';

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function CollapsibleSection({ title, isExpanded, onToggle, children }: CollapsibleSectionProps) {
  return (
    <div className="space-y-4">
      <h2
        className="cursor-pointer flex items-center text-sm sm:text-base"
        style={{ color: '#000000' }}
        onClick={onToggle}
      >
        <svg
          className="mr-2 transition-transform"
          width="10"
          height="10"
          viewBox="0 0 9 9"
          fill="none"
          style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }}
        >
          <path
            d="M1 1L5 4.5L1 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        [<span>{title}</span>]
      </h2>
      {isExpanded && <div className="mt-8 sm:mt-12">{children}</div>}
    </div>
  );
}