// src/components/Footer.tsx

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#2e3b55', color: '#fff', py: 3, mt: 4 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Loan Calculator. All rights reserved.</Typography>
      </Container>
    </Box>
  );
}
