import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../Header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default MainLayout;