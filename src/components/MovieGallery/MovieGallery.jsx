import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Container,
  Pagination,
} from '@mui/material';
import Header from '../Header/Header';

const movies = [
  {
    title: 'Deadpool vs Wolverine',
    image: '/images/movie_posters/deadpool_wolverine.jpg',
    category: 'Actiune',
  },
  {
    title: 'Edge of Darkness',
    image: '/images/movie_posters/Edge_of_Darkness.jpg',
    category: 'Triler',
  },
  {
    title: 'ForsaJ',
    image: '/images/movie_posters/forsaj.jpg',
    category: 'Actiune',
  },
  {
    title: 'Joker',
    image: '/images/movie_posters/joker.jpg',
    category: 'Drama',
  },
  {
    title: 'Kong',
    image: '/images/movie_posters/kong.jpg',
    category: 'Aventura',
  },
  {
    title: 'Megan',
    image: '/images/movie_posters/megan.jpg',
    category: 'Horror',
  },
  {
    title: 'Minions',
    image: '/images/movie_posters/minions.jpg',
    category: 'Desene Animate',
  },
  {
    title: 'Panda',
    image: '/images/movie_posters/panda.jpg',
    category: 'Desene Animate',
  },
];

const categories = [
  'Toate',
  'Actiune',
  'Triler',
  'Drama',
  'Aventura',
  'Horror',
  'Desene Animate',
];
const MOVIES_PER_PAGE = 6;

export const MovieGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMovies =
    selectedCategory === 'Toate'
      ? movies
      : movies.filter((m) => m.category === selectedCategory);

  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
  const currentMovies = filteredMovies.slice(
    (currentPage - 1) * MOVIES_PER_PAGE,
    currentPage * MOVIES_PER_PAGE
  );

  const handlePageChange = (_e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <Box sx={{ width: '100%', overflowX: 'hidden', pt: 0, pb: 4 }}>
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Movie Gallery
          </Typography>

          <ButtonGroup
            variant="contained"
            sx={{
              mb: 4,
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                sx={{
                  bgcolor: selectedCategory === cat ? '#00A878' : 'grey',
                  m: '5px',
                  '&:hover': { bgcolor: '#00A878' },
                }}
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {currentMovies.map((movie, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={movie.image}
                    alt={movie.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" align="center">
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {movie.category}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: '#00A878',
                        color: '#00A878',
                        '&:hover': {
                          bgcolor: '#00A878',
                          color: 'white',
                          borderColor: '#00A878',
                        },
                      }}
                    >
                      Vizionează
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#00A878',
                },
                '& .Mui-selected': {
                  bgcolor: '#00A878',
                  color: 'white',
                  '&:hover': { bgcolor: '#00A878' },
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
