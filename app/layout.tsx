// app/layout.tsx

import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Personal Loan Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="md">
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
