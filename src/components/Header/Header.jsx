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
import { useNavigate } from 'react-router-dom'; // 🔥 Importă hookul de navigare

const Header = () => {
  const navigate = useNavigate(); // 🔥 Inițializează navigarea

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
                color: 'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '& .MuiInputLabel-root': {
                color: 'white',
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

          <IconButton
            sx={{ marginLeft: 'auto' }}
            onClick={() => navigate('/UserProfile')}
          >
            <AccountCircleIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
