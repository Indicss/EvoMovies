import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import { CardForMovie } from './CardForMovie';

export const CardSlider = () => {
  const settings = {
    dots: false, // eliminăm punctele
    arrows: true, // activăm săgețile
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      title: 'Card 1',
      description: 'Descriere card 1',
      imageUrl: '/images/movie_posters/megan.jpg',
    },
    {
      title: 'Card 2',
      description: 'Descriere card 2',
      imageUrl: '/images/movie_posters/forsaj.jpg',
    },
    {
      title: 'Card 3',
      description: 'Descriere card 3',
      imageUrl: '/images/movie_posters/minions.jpg',
    },
    {
      title: 'Card 4',
      description: 'Descriere card 4',
      imageUrl: '/images/movie_posters/panda.jpg',
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <CardForMovie {...card} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};
