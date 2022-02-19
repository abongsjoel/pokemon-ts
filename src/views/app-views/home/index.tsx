import React from "react";
import { gql, useQuery } from "@apollo/client";

export const POKES = gql`
  query GetFuzzyPokemon($pokemon: String!, $take: Int) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take) {
      species
      color
      backSprite
      types
      key
      shinySprite
      shinyBackSprite
      sprite
      weight
    }
  }
`;

const Home = () => {
  return <div>Home component works!</div>;
};

export default Home;
