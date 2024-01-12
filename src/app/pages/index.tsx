// src/app/pages/index.tsx

import * as React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Box sx={{ flexGrow: 1, mt: 8 }}> {/* Adjust margin as needed */}
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        {/* Add your dashboard content here */}
      </Box>
    </MainLayout>
  );
};

export default Index;
