import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#F3F3E0', color: '#181C14', py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Finance Smarter
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="#181C14" underline="hover">
                Download the app
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Banking
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="#" color="#181C14" underline="hover">
                Checking
              </Link>
              <br />
              <Link href="#" color="#181C14" underline="hover">
                Savings
              </Link>
              {/* Add more banking-related links here */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Financial Planning
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="#" color="#181C14" underline="hover">
                Paying off debt
              </Link>
              <br />
              <Link href="#" color="#181C14" underline="hover">
                College Savings
              </Link>
              {/* Add more financial planning-related links here */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Mortgages
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="#" color="#181C14" underline="hover">
                Mortgage Rates
              </Link>
              <br />
              <Link href="#" color="#181C14" underline="hover">
                Mortgage Process
              </Link>
              {/* Add more mortgage-related links here */}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Finance Smarter. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}