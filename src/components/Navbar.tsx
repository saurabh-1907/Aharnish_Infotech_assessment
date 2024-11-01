// src/components/Navbar.tsx
import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  IconButton,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  const navItems = [
    'Credit cards',
    'Banking',
    'Home',
    'Loans',
    'Insurance',
    'Personal finance',
    'Investing',
    'Small business',
    'Taxes'
  ];

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: 'white', 
      color: 'black',
      boxShadow: 1
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'inherit',
              fontWeight: 700,
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <span style={{ color: '#00A500' }}>nerd</span>
            <span style={{ color: 'black' }}>wallet</span>
          </Typography>

          {/* Navigation Items */}
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center',
            gap: 3
          }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'text.secondary'
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Right side items */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <Button
              sx={{
                color: '#00A500',
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#008000'
                }
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00A500',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#008000'
                }
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}