import React from "react";

import { RouteComponentProps } from "react-router-dom";
import { Card, Col, Row, Space, Tag, Typography } from "antd";
import { gql } from "@apollo/client";
import { capitalize } from "lodash";

import { useGetPokemonQuery } from "generated/graphql";
import { zeropad, _colors } from "components/pokemon/PorkCard";
import TextDescription from "components/pokemon/TextDescription";

const { Text, Title } = Typography;

export const POKE = gql`
  query GetPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      abilities {
        first
        hidden
        second
      }
      gender {
        female
        male
      }
      height
      types
      weight
      species
      baseForme
      num
      sprite
      flavorTexts {
        flavor
      }
    }
  }
`;

const Poke = (prop: RouteComponentProps) => {
  //@ts-ignore
  const pokemon = prop?.match.params.pokemon;

  const { data, loading, error } = useGetPokemonQuery({
    variables: {
      pokemon,
    },
  });

  const poke = React.useMemo(() => data?.getPokemon, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Row gutter={[0, 24]} style={{ padding: "0 50px" }}>
      <Col xs={24}>
        <Row justify="center">
          <Title level={1}>{`${capitalize(poke?.species)} #${zeropad(
            Math.abs(poke!.num).toString()
          )}`}</Title>
        </Row>
      </Col>
      <Col xs={24} md={12}>
        <Card
          bordered={false}
          style={{ background: "#e3e3e3" }}
          cover={<img alt={poke!.species} src={poke!.sprite} />}
        ></Card>
      </Col>
      <Col xs={24} md={12}>
        <Row gutter={[0, 20]} style={{ padding: "10px 20px" }}>
          <Col xs={24}>
            <Text style={{ fontSize: "1.2em" }}>
              {poke!.flavorTexts[0].flavor}
            </Text>
          </Col>
          <Col xs={24}>
            <Card bordered={false} style={{ background: "#30a7d7" }}>
              <Row>
                <Col xs={12}>
                  <TextDescription title="Height" text={`${poke?.height}"`} />
                </Col>
                <Col xs={12}>
                  <TextDescription title="Category" text={poke?.baseForme} />
                </Col>
                <Col xs={12}>
                  <TextDescription title="Weight" text={poke?.weight} />
                </Col>
                <Col xs={12}>
                  <TextDescription
                    title="Abilities"
                    text={poke?.abilities.first}
                  />
                </Col>
                <Col xs={12}>
                  <TextDescription
                    title="Gender"
                    text={`${poke?.gender.male} ${poke?.gender.female}`}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24}>
            <Title level={2}>Type</Title>
            <Space size="small">
              {poke?.types.map((type: string) => (
                <Tag color={_colors(type)}>{type}</Tag>
              ))}
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Poke;
