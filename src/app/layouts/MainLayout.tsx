// src/app/layouts/MainLayout.tsx

import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        asdf
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
