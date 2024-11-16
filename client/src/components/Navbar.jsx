import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(35deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))', // Blurred transparent background
        backdropFilter: 'blur(15px)',
        boxShadow: '0 1px 10px 0 rgba(30, 30, 10, 0.37)', // Smooth shadow for the glass effect
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600}}>
          Contact Manager
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={toggleTheme}>
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button color="inherit">Sign In</Button>
          <Button variant="outlined" color="white">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
