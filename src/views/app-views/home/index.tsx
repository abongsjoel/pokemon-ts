import React from "react";

import { Space } from "antd";
import { gql } from "@apollo/client";
import { Pokemon, useGetFuzzyPokemonQuery } from "generated/graphql";
import PokeCard from "components/pokemon/PorkCard";

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

  return (
    <Space wrap size="large">
      {data?.getFuzzyPokemon.map((poke, indx) => (
        <div>
          <PokeCard poke={poke as Pokemon} key={poke.key} id={indx + 1} />
        </div>
      ))}
    </Space>
  );
};

export default Home;
