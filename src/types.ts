import React from 'react';

export interface Service {
  title: string;
  description: string;
  // Fix: Update the type for `icon` to be a ReactElement that accepts a `className` prop.
  // This resolves the TypeScript error in `ServicesSection.tsx` when using `React.cloneElement`.
  icon: React.ReactElement<{ className?: string }>;
}
