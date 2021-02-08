import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, InputGroup, FormControl } from 'react-bootstrap'

import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [filter, setFilter] = useState("")

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        setPokemons(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  let content

  if (!pokemons) {
    content = (
      console.log("loading")
    );
  } else {
    content = (
      <React.Fragment>
        <Row>
          {
            pokemons.map(pokemon =>
              pokemon.name.includes(filter)
              &&
              <Col xs={3} style={{ marginTop: "1rem" }} key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                  url={pokemon.url}
                  filter={filter}
                />
              </Col>
            )
          }
        </Row>
      </React.Fragment>
    );
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleSearchChange}
        />
      </InputGroup>
      {content}
    </>
  );
}

export default PokemonList;