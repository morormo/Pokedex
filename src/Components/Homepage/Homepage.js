import React from 'react';
import PokemonList from '../PokemonList/PokemonList';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <PokemonList />
    </Container>
  );
}

export default HomePage;