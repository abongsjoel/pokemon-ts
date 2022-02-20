import React from "react";

import { Space } from "antd";
import { gql } from "@apollo/client";
import { Pokemon, useGetFuzzyPokemonQuery } from "generated/graphql";
import PokeCard from "components/pokemon/PorkCard";

export const POKES = gql`
  query GetFuzzyPokemon($pokemon: String!, $take: Int) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take) {
      key
      species
      sprite
      types
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

  return (
    <Space wrap size="large">
      {data?.getFuzzyPokemon.map((poke, indx) => (
        <PokeCard poke={poke as Pokemon} key={poke.key} id={indx + 1} />
      ))}
    </Space>
  );
};

export default Home;
