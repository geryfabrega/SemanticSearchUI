import React from 'react';
import { Box } from '@mui/material';
import { WidthNormal } from '@mui/icons-material';
import './styles.css';

export default function ResultsBoxes() {
  return (
    <Box
      sx={{
        bgcolor: 'rgb(54, 69, 79)',
        borderRadius: '16px',
        color: 'white',
        p: 2,
        width: '90%',
        margin: 'auto',
        marginTop:5,
        animation: 'zoomInFromTop .5s ease',
      }}
    >
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    </Box>
  );
}