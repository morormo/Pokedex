import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            Pokedex
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;