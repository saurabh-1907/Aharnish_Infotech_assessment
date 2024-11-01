import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';
import { AmortizationRow } from '../types/loan';

interface Props {
  schedule: AmortizationRow[];
}

const AmortizationTable: React.FC<Props> = ({ schedule }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <TableContainer 
        component={Paper} 
        sx={{ 
          maxHeight: 400,
          '& .MuiTableContainer-root': {
            overflow: 'auto'
          }
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Payment Date</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Monthly Total</TableCell>
              <TableCell>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row, index) => (
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
  );
};

export default AmortizationTable;
