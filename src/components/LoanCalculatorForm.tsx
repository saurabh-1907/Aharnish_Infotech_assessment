// LoanCalculatorForm.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Typography, Container, Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';
import { calculateMonthlyPayment, calculateLoanSummary, calculateAmortizationSchedule } from '../utils/calculations';

interface LoanSummary {
  totalPrincipal: number;
  totalInterest: number;
  totalPayment: number;
  payoffDate: string;
}

export interface AmortizationRow {
  paymentDate: string;
  principal: number;
  interest: number;
  monthlyTotal: number;
  balance: number;
}

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

    const summary: LoanSummary = calculateLoanSummary(loanAmount, interestRate, loanTerm, startDate);
    setLoanSummary(summary);

    const schedule = calculateAmortizationSchedule(loanAmount, interestRate, loanTerm, startDate);
    setAmortizationSchedule(schedule);
  }, [loanAmount, interestRate, loanTerm, startDate]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6, bgcolor: '#f4f6f8', p: 4, borderRadius: 3 }}>
      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Personal Loan Calculator
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        {/* Loan Details Section */}
        <Grid item xs={12} md={4}>
          <Box component="form" noValidate autoComplete="off" sx={{ bgcolor: '#ffffff', p: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
              Loan Details
            </Typography>
            <TextField
              label="Loan Amount"
              type="number"
              fullWidth
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Interest Rate (%)"
              type="number"
              fullWidth
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Loan Term (months)"
              type="number"
              fullWidth
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>
        </Grid>

        {/* Loan Estimate Section */}
        <Grid item xs={12} md={8}>
          <Box sx={{ p: 3, bgcolor: '#ffffff', borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
              Your Loan Estimate
            </Typography>
            {monthlyPayment !== null && (
              <Typography variant="h4" color="green" sx={{ mb: 2, fontWeight: 'bold' }}>
                Monthly Payment: ${monthlyPayment.toFixed(2)}
              </Typography>
            )}
            {loanSummary && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" color="textSecondary">Total Principal: ${loanSummary.totalPrincipal.toFixed(2)}</Typography>
                <Typography variant="body1" color="textSecondary">Total Interest Payments: ${loanSummary.totalInterest.toFixed(2)}</Typography>
                <Typography variant="body1" color="textSecondary">Total Loan Payments: ${loanSummary.totalPayment.toFixed(2)}</Typography>
                <Typography variant="body1" color="textSecondary">Payoff Date: {loanSummary.payoffDate}</Typography>
              </Box>
            )}

            {/* Amortization Schedule Table */}
            {amortizationSchedule.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Amortization Schedule
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead sx={{ bgcolor: '#1976d2' }}>
                      <TableRow>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Payment Date</TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Principal</TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Interest</TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Monthly Total</TableCell>
                        <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Balance</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {amortizationSchedule.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.paymentDate}</TableCell>
                          <TableCell>${row.principal.toFixed(2)}</TableCell>
                          <TableCell>${row.interest.toFixed(2)}</TableCell>
                          <TableCell>${row.monthlyTotal.toFixed(2)}</TableCell>
                          <TableCell>${row.balance.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
