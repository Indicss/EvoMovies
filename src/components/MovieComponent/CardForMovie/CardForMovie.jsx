import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from '@mui/material';

export const CardForMovie = ({
  title,
  description,
  imageUrl,
  onButtonClick,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '0 auto',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onButtonClick}
          >
            Vizionează
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
