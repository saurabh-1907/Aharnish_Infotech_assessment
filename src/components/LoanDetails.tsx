import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface Props {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  startDate: string;
  onLoanAmountChange: (value: number) => void;
  onInterestRateChange: (value: number) => void;
  onLoanTermChange: (value: number) => void;
  onStartDateChange: (value: string) => void;
}

const LoanDetails: React.FC<Props> = ({
  loanAmount,
  interestRate,
  loanTerm,
  startDate,
  onLoanAmountChange,
  onInterestRateChange,
  onLoanTermChange,
  onStartDateChange,
}) => {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ bgcolor: '#f0f0f0', p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Loan Details
      </Typography>
      <TextField 
        label="Loan Amount" 
        type="number" 
        fullWidth 
        value={loanAmount} 
        onChange={(e) => onLoanAmountChange(Number(e.target.value))} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        label="Interest Rate (%)" 
        type="number" 
        fullWidth 
        value={interestRate} 
        onChange={(e) => onInterestRateChange(Number(e.target.value))} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        label="Loan Term (months)" 
        type="number" 
        fullWidth 
        value={loanTerm} 
        onChange={(e) => onLoanTermChange(Number(e.target.value))} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        label="Start Date" 
        type="date" 
        fullWidth 
        value={startDate} 
        onChange={(e) => onStartDateChange(e.target.value)} 
        sx={{ mb: 2 }} 
      />
    </Box>
  );
};

export default LoanDetails;