
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import LogoPlaceholder from '@mui/icons-material/Casino'; // Placeholder icon for logo
import "../css/main.css";
function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LogoPlaceholder sx={{ mr: 1 }} />
              <Typography variant='h4'>Logo</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to ="/" color="inherit" sx={{ mx: 1 }}>Home</Link>
              <Link to="/about"color="inherit" sx={{ mx: 1 }}>About</Link>
              <Link to="/projects"  color="inherit" sx={{ mx: 1 }}>Projects</Link>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h4" align="center" gutterBottom>
          My Website
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          © {new Date().getFullYear()} Your Company Name
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="#">Privacy Policy</Link>
          {' | '}
          <Link color="inherit" href="#">Terms of Service</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
