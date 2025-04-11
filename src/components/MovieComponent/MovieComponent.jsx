import { Container } from '@mui/material';
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
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.47)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 2,
        }}
      >
        <Box
          sx={{
            border: '3px solid', // Grosime + stil (solid/dashed/dotted)
            borderColor: 'primary.main',
            gridColumn: 'span 8',
            display: 'flex',
          }}
        >
          <PhotoCamera fontSize="large" />
          <Item>xs=8</Item>
        </Box>
        <Box sx={{ gridColumn: 'span 4' }}>
          <Item>xs=4</Item>
        </Box>
        <Box sx={{ gridColumn: 'span 4' }}>
          <Item>xs=4</Item>
        </Box>
        <Box sx={{ gridColumn: 'span 8' }}>
          <Item>xs=8</Item>
        </Box>
      </Box>
    </Container>
  );
};
