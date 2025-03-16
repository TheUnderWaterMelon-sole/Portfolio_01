// src/styles/globalStyles.js
import { GlobalStyles } from '@mui/material';
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Syne:wght@400..800&display=swap');

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
        fontFamily: '"Syne", sans-serif',
        backgroundColor: '#ffffff',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      '*': {
        boxSizing: 'border-box',
      },

    
    }}
  />
);

export default globalStyles;
