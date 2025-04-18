import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { CardSlider } from './CardForMovie/CardSlider';

export const MovieComponent = () => {
  return (
    <Container sx={{ marginTop: '24px', padding: '0px 144px' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
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
          }}
        >
          <h1>Title Movie</h1>
          <Typography>Description Movie</Typography>
          <Typography>Authors</Typography>
          <Typography>Regizors</Typography>
        </Box>

        {/* Video Player */}
        <Box sx={{ gridColumn: 'span 12' }}>
          <Box
            sx={{ margin: '12px', border: '1px solid', borderColor: 'black' }}
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

        {/* Slider cu carduri */}
        <Box sx={{ gridColumn: 'span 12' }}>
          <CardSlider />
        </Box>
      </Box>
    </Container>
  );
};
