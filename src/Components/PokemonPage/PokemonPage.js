import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import PokemonPageContent from './PokemonPageContent';

const PokemonPage = ({ match, pokemonImg }) => {

  console.log(pokemonImg)

  const [data, setData] = useState([])
  const [pokemonStats, setPokemonStats] = useState([])
  const [pokemonImage, setPokemonImg] = useState([])
  const PokemonName = match.params.pokemon_name;

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + PokemonName)
      .then(res => {
        setData(res.data);
        setPokemonStats(res.data.stats);
        setPokemonImg(res.data.sprites.front_default);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  let content;

  if (!data || !pokemonStats || !pokemonImage) {
    content = (
      console.log("loading")
    );
  } else {
    content = (
      <PokemonPageContent data={data} pokemonStats={pokemonStats} pokemonImage={pokemonImage} />
    )
  }

  return (
    <Container> 
      {content}
    </Container >
  );
}

export default PokemonPage;