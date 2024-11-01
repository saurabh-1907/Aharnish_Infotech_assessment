'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Typography, Container, Box, Button } from '@mui/material';
import { calculateMonthlyPayment, calculateLoanSummary } from '../utils/calculations';

interface LoanSummary {
  totalPrincipal: number;
  totalInterest: number;
  totalPayment: number;
  payoffDate: string;
}

export default function LoanCalculatorForm() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(60);
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [loanSummary, setLoanSummary] = useState<LoanSummary | null>(null);

  useEffect(() => {
    const payment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    setMonthlyPayment(payment);

    const summary: LoanSummary = calculateLoanSummary(loanAmount, interestRate, loanTerm, startDate);
    setLoanSummary(summary);
  }, [loanAmount, interestRate, loanTerm, startDate]);

  return (
    <Container maxWidth="sm">
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
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {monthlyPayment !== null && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            Monthly Payment: ${monthlyPayment.toFixed(2)}
          </Typography>
        )}
        {loanSummary && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Total Principal: ${loanSummary.totalPrincipal}</Typography>
            <Typography variant="h6">Total Interest: ${loanSummary.totalInterest}</Typography>
            <Typography variant="h6">Total Payment: ${loanSummary.totalPayment}</Typography>
            <Typography variant="h6">Payoff Date: {loanSummary.payoffDate}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
