import React from 'react';
import { CssBaseline, Container } from '@mui/material';
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
        <Container maxWidth="md">
          {children}
        </Container>
      </body>
    </html>
  );
}
