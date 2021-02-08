import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({ name, url }) => {
  const PokemonIndex = url.split('/')[url.split('/').length - 2];

  const [pokemonImg, setPokemonImg] = useState([])
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonIndex}`)
      .then(res => {
        setPokemonImg(res.data.sprites.front_default)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
        <Link to={'/' + name} className={styles.link}>
          <Card>
            <Card.Img variant="top" src={pokemonImg} alt={name} />
            <Card.Body>
              <Card.Title className={styles.title}>{name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
    </>
  );
}

export default PokemonCard;