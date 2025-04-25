import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { CardSlider } from './CardForMovie/CardSlider';
import Header from '../Header/Header';

export const MovieComponent = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
          minHeight: '100vh',
          paddingTop: '24px',
          paddingBottom: '24px',
        }}
      >
        <Container sx={{ padding: '0px 144px' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 2,
            }}
          >
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'primary.main',
                gridColumn: 'span 8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '300px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
              }}
            >
              <PhotoCamera fontSize="large" />
            </Box>
            <Box
              sx={{
                gridColumn: 'span 4',
                border: '1px solid',
                borderColor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
              }}
            >
              <h1>Title Movie</h1>
              <Typography>Description Movie</Typography>
              <Typography>Authors</Typography>
              <Typography>Regizors</Typography>
            </Box>

            <Box sx={{ gridColumn: 'span 12' }}>
              <Box
                sx={{
                  margin: '12px 0',
                  border: '1px solid',
                  borderColor: 'black',
                }}
              >
                <video
                  controls
                  width="100%"
                  style={{ borderRadius: '12px', border: '1px solid #ccc' }}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Box>

            <Box sx={{ gridColumn: 'span 12' }}>
              <CardSlider />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
