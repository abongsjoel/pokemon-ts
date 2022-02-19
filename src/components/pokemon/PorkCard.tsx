import React from "react";

import { Card, Space, Tag } from "antd";
import { capitalize } from "lodash";
import { Pokemon } from "generated/graphql";

const { Meta } = Card;

interface Poke {
  poke: Pokemon;
  id: number;
}

const _colors = (type: string) => {
  switch (type) {
    case "Water":
      return "#2db7f5";
    case "Flying":
      return "#87d068";
    case "Fairy":
      return "#87d068";
    case "Bug":
      return "#2db7f5";
    case "Ghost":
      return "#f50";
    case "Ice":
      return "#f50672";
    case "Rock":
      return "#808487";
    case "Steel":
      return "#71797E";
    case "Dragon":
      return "#6AFB92";
    case "Fighting":
      return "#13294B";
    case "Poison":
      return "#40fd14";
    case "Psychic":
      return "#615981";
    default:
      return "default";
  }
};

// enum _colors {
//   Water = "#2db7f5",
//   Flying = "#87d068",
//   Fairy = "#87d068",
//   Bug = "#2db7f5",
//   Ghost = "#f50",
//   Ice = "#f50672",
//   Rock = "#808487",
//   Steel = "#71797E",
//   Dragon = "#6AFB92",
//   Fighting = "#13294B",
//   Poison = "#40fd14",
//   Psychic = "#615981",
//   default = "default",
// }

const PokeCard = ({ poke, id }: Poke) => {
  console.log({ poke, id });
  const zeropad = (val: string) => {
    if (val.length === 1) {
      return `00${val}`;
    }
    if (val.length === 2) {
      return `0${val}`;
    }
    return val;
  };

  return (
    <Card
      hoverable
      bordered={false}
      style={{ width: 240 }}
      cover={
        <img alt={poke.species} src={poke.sprite} style={{ height: 200 }} />
      }
    >
      <p>{`No. ${zeropad(id.toString())}`}</p>
      <Meta
        title={capitalize(poke.species)}
        description={
          <Space size="small">
            {poke.types.map((type: string) => (
              <Tag color={_colors(type)}>{type}</Tag>
            ))}
          </Space>
        }
      />
    </Card>
  );
};

export default PokeCard;
