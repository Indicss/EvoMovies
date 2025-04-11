import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const options = [
    { title: 'The Shawshank Redemption', firstLetter: 'T' },
    { title: 'The Godfather', firstLetter: 'T' },
  ];

  return (
    <div>
      <AppBar position="sticky" sx={{ bgcolor: '#00A878' }}>
        <Toolbar sx={{ display: 'flex' }}>
          <IconButton sx={{ mr: 2, color: 'white' }}>
            <MenuIcon />
          </IconButton>

          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.title}
            sx={{
              width: 300,
              '& .MuiInputBase-root': {
                color: 'white', // Text alb
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Bordură albă
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Bordură albă la hover
              },
              '& .MuiInputLabel-root': {
                color: 'white', // Eticheta "Search movies" albă
              },
              position: 'absolute',
              left: '100px',
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search movies" />
            )}
          />

          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            EvoMovies
          </Typography>

          <IconButton sx={{ marginLeft: 'auto' }}>
            <AccountCircleIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
