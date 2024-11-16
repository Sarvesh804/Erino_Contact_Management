import React, { useState } from 'react';
import { useContactContext } from '../Context/ContactContext';
import { Box, TextField, Button, Grid2, Typography, Paper } from '@mui/material';

const ContactForm = ({ onSubmit,theme,id }) => {
  const { formData, setFormData, resetFormData } = useContactContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    id? onSubmit(id,formData) : onSubmit(formData);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 1, margin: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add New Contact
      </Typography>
      <Grid2 container spacing={5}>
        {['firstName', 'lastName', 'email', 'phoneNumber', 'company', 'jobTitle'].map((field) => (
          <Grid2 item xs={12} sm={6} key={field}>
            <TextField
              label={field.replace(/([A-Z])/g, ' $1').trim()}
              variant="outlined"
              fullWidth
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          </Grid2>
        ))}
      </Grid2>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" sx={{color:theme === 'light'?"#fff":"#000", background: theme === 'light'? "rgba(10, 10, 10, 1)" : "rgba(250, 250, 250, 1)"}} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
