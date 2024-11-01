// app/page.tsx

'use client';

import React from 'react';
import LoanCalculatorForm from '../src/components/LoanCalculatorForm';
import { Typography, Container } from '@mui/material';

export default function Page() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Personal Loan Calculator
      </Typography>
      <LoanCalculatorForm />
    </Container>
  );
}
