import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './PokemonPageContent.module.scss';

const PokemonPageContent = ({ data, pokemonStats, pokemonImage }) => {

  return (
    <>
      <Row>
        <Card className={`text-center ${styles.PokemonStats}`}>
          <Card.Header className={styles.header}><h1>{data.name}<img src={pokemonImage} alt={data.name}/></h1></Card.Header>
          <Card.Body>
            <Card.Title>Statistic</Card.Title>
            <Card.Text>
              {
                pokemonStats.map(pokemonStat =>
                  <Row className={styles.stats} key={pokemonStat.stat.name}>
                    <Col xs={6} className={styles.statsName}>{pokemonStat.stat.name}</Col>
                    <Col xs={6}>
                      <div className={styles.baseStat}>
                        <div className={styles.statsBar}
                          style={{
                            width: `${pokemonStat.base_stat / 1.3}%`
                          }}
                        >
                          {pokemonStat.base_stat}
                        </div>
                      </div>
                    </Col>
                  </Row>
                )
              }
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

export default PokemonPageContent;