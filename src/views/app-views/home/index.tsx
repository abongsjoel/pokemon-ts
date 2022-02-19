import React from "react";
import { gql } from "@apollo/client";
import { useGetFuzzyPokemonQuery } from "generated/graphql";

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
  const { loading, error, data } = useGetFuzzyPokemonQuery({
    variables: {
      pokemon: "Syclar",
      take: 20,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log({ data });

  return <div>hello</div>;
};

export default Home;
