import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { Box } from '@mui/material';
import { MovieComponent } from './components/MovieComponent/MovieComponent';

const Films = [
  {
    name: 'Cars',
    description: 'Mama mega bongiorno!!',
  },
  {
    name: 'Aladin',
    description: 'alahabar',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
  {
    name: 'Aladin2',
    description: 'alahabar2',
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <Box
        sx={{
          justifyContent: 'center',
          mt: '24px',
          p: '0px 144px',
          display: 'flex',
          flexWrap: 'wrap', // Permite trecerea pe rânduri noi
          gap: 4, // Spațiu între carduri
        }}
      >
        {Films.map((Film, index) => {
          return (
            <Cards
              key={index}
              name={Film.name}
              description={Film.description}
            />
          );
        })}
      </Box> */}
      <MovieComponent />
    </>
  );
}

export default App;
