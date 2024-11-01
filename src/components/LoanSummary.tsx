import React from 'react';
import { Typography, Box } from '@mui/material';

interface LoanSummaryProps {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  payoffDate: string;
}

function LoanSummary({ monthlyPayment, totalInterest, totalPayment, payoffDate }: LoanSummaryProps) {
  return (
    <Box mt={4}>
      <Typography variant="h6">Monthly Payment: ${monthlyPayment.toFixed(2)}</Typography>
      <Typography variant="h6">Total Interest: ${totalInterest.toFixed(2)}</Typography>
      <Typography variant="h6">Total Payment: ${totalPayment.toFixed(2)}</Typography>
      <Typography variant="h6">Payoff Date: {payoffDate}</Typography>
    </Box>
  );
}

export default LoanSummary;
