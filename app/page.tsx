// app/page.tsx
'use client';

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMonthlyPayment = () => {
    const monthlyInterest = interestRate / 100 / 12;
    const payment = loanAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) / (Math.pow(1 + monthlyInterest, loanTerm) - 1);
    setMonthlyPayment(payment);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Personal Loan Calculator
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Loan Amount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        <TextField
          label="Loan Term (months)"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
        
      </Box>
    </Container>
  );
}
