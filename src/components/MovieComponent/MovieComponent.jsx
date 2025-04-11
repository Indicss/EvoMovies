import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { PhotoCamera } from '@mui/icons-material';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const MovieComponent = () => {
  return (
    <Container
      sx={{
        marginTop: '24px',
        padding: '0px 144px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
        }}
      >
        <Box
          sx={{
            border: '1px solid', // Grosime + stil (solid/dashed/dotted)
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
            border: '1px solid', // Grosime + stil (solid/dashed/dotted)
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
        <Box
          sx={{
            gridColumn: 'span 12',
          }}
        >
          <Box
            sx={{
              margin: '12px',
              border: '1px solid',
              borderColor: 'black',
              minHeight: '400px',
              minWidth: '400px',
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
        <Box
          sx={{
            gridColumn: 'span 12',
            border: '1px solid',
            borderColor: 'black',
            minHeight: '400px',
            minWidth: '400px',
          }}
        ></Box>
      </Box>
    </Container>
  );
};
