import { useState } from "react";
import Head from "next/head";
import { Container, FormControl, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import CardComponent from "../components/Card"

const getPokemon = async (key, q) => {
  const { data } = await axios.get(`/api/search?q=${escape(q)}`);
  return data.map((pokemon) => ({
    ...pokemon,
    image: `/pokemon/${pokemon.name.english
      .toLowerCase()
      .replace(" ", "-")}.jpg`,
  }));
};

const Home = () => {
  const [query, setQuery] = useState("");
  const { data } = useQuery(["q", query], getPokemon);

  return (
    <div className="container">
      <Head>
        <title>Pokemon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <FormControl
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
        />
        {data && (
          <Row>
            {data.map(({ id, name, type, image }) => (
              <Col xs={4} key={id} style={{ padding: 5 }}>
                
                  <CardComponent 
                  image= {image}
                  name={name.english}
                  type = {type} />
                
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
