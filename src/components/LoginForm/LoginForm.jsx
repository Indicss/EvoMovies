import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ro } from 'date-fns/locale';

export const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    birthDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (newDate) => {
    setFormData((prev) => ({
      ...prev,
      birthDate: newDate,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Resetare
    setFormData({
      email: '',
      password: '',
      birthDate: null,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ro}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          background: 'linear-gradient(to right, #141e30, #243b55)',
          padding: 2,
        }}
      >
        <Paper elevation={6} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
          <Typography variant="h5" gutterBottom textAlign="center">
            {isRegistering ? 'Înregistrare' : 'Autentificare'}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              required
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              label="Parolă"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              margin="normal"
            />
            {isRegistering && (
              <DatePicker
                label="Data nașterii"
                value={formData.birthDate}
                onChange={handleDateChange}
                inputFormat="dd-MM-yyyy"
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" />
                )}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {isRegistering ? 'Înregistrează-te' : 'Autentifică-te'}
            </Button>
          </form>

          <FormControlLabel
            control={
              <Switch
                checked={isRegistering}
                onChange={() => setIsRegistering((prev) => !prev)}
                color="primary"
              />
            }
            label={
              isRegistering
                ? 'Comută pe autentificare'
                : 'Comută pe înregistrare'
            }
            sx={{ marginTop: 2 }}
          />
        </Paper>
      </Box>
    </LocalizationProvider>
  );
};
