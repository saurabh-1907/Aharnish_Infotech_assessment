// src/components/LoanCalculatorForm.tsx
import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { calculateMonthlyPayment, calculateLoanSummary, calculateAmortizationSchedule } from '../utils/calculations';
import LoanDetails from './LoanDetails';
import AmortizationTable from './AmortizationTable';
import { LoanSummary, AmortizationRow } from '../types/loan';

export default function LoanCalculatorForm() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(60);
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [loanSummary, setLoanSummary] = useState<LoanSummary | null>(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationRow[]>([]);

  useEffect(() => {
    const payment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    setMonthlyPayment(payment);

    const summary = calculateLoanSummary(loanAmount, interestRate, loanTerm, startDate);
    setLoanSummary(summary);

    const schedule = calculateAmortizationSchedule(loanAmount, interestRate, loanTerm, startDate);
    setAmortizationSchedule(schedule);
  }, [loanAmount, interestRate, loanTerm, startDate]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <LoanDetails
            loanAmount={loanAmount}
            interestRate={interestRate}
            loanTerm={loanTerm}
            startDate={startDate}
            onLoanAmountChange={setLoanAmount}
            onInterestRateChange={setInterestRate}
            onLoanTermChange={setLoanTerm}
            onStartDateChange={setStartDate}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Loan Estimate
            </Typography>
            {monthlyPayment !== null && (
              <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                Monthly Payment: ${monthlyPayment.toFixed(2)}
              </Typography>
            )}
            {loanSummary && (
              <Box>
                <Typography>Total Principal: ${loanSummary.totalPrincipal.toFixed(2)}</Typography>
                <Typography>Total Interest: ${loanSummary.totalInterest.toFixed(2)}</Typography>
                <Typography>Total Payment: ${loanSummary.totalPayment.toFixed(2)}</Typography>
                <Typography>Payoff Date: {loanSummary.payoffDate}</Typography>
              </Box>
            )}

            {amortizationSchedule.length > 0 && (
              <AmortizationTable schedule={amortizationSchedule} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}