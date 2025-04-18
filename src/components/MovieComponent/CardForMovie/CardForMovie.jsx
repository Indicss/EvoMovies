import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  CardActionArea,
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
        justifyContent: 'space-between',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ height: '100%', flexGrow: 1 }}>
        <Typography variant="h5" component="div" sx={{ marginBottom: '16px' }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{ flexGrow: 1 }}
        >
          {description}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 'auto' }}>
          Vizionează
        </Button>
      </CardContent>
    </Card>
  );
};
