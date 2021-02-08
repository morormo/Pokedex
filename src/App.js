import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './Components/MainLayout/MainLayout';
import HomePage from './Components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonPage from './Components/PokemonPage/PokemonPage';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route exact path='/' component={HomePage} />
        <Route path="/:pokemon_name" component={PokemonPage} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App