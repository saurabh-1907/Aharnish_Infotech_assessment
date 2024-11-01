// app/layout.tsx
import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Personal Loan Calculator',
  description: 'A simple personal loan calculator using Next.js and Material-UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
