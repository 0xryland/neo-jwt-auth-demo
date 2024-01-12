// src/app/components/Footer.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 3, mt: 4, bgcolor: 'background.paper' }}>
      <Typography variant="body1">
        Ryland Koopus - State of Maine DAFS © {new Date().getFullYear()}
      </Typography>
      {/* Additional footer content */}
    </Box>
  );
};

export default Footer;
