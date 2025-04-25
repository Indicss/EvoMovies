import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Avatar,
  Divider,
  Container,
} from '@mui/material';
import Header from '../Header/Header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
}));

export const UserProfile = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Profilul utilizatorului
          </Typography>

          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              mb: 4,
              borderRadius: 2,
            }}
          >
            <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
              <AccountCircleIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h6">Exemplu@gmail.com</Typography>
              <Typography variant="body2" color="text.secondary">
                Membru din ianuarie 2024
              </Typography>
            </Box>
          </Paper>

          <Grid container spacing={3}>
            {[
              {
                title: 'Categorie Horror',
                movies: ['Megan', 'Astral', 'Alone'],
              },
              {
                title: 'Categorie Comedie',
                movies: ['Despicable Me', 'Tom & Jerry', 'Sponge Bob'],
              },
              {
                title: 'Categorie Dramă',
                movies: ['Gone with the Wind', 'Forrest Gump', 'Citizen Kane'],
              },
              {
                title: 'Categorie Acțiune',
                movies: [
                  'The Accountant 2',
                  'William Tell',
                  'Den of Thieves 2: Pantera',
                ],
              },
            ].map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Item>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {category.movies.map((movie, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>
                        {movie}
                      </li>
                    ))}
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
