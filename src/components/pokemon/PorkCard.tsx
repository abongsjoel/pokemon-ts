import React from "react";

import { Card, Space, Tag } from "antd";
import { capitalize } from "lodash";
import { useHistory } from "react-router-dom";
import { Pokemon } from "generated/graphql";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const { Meta } = Card;

const zeropad = (val: string) => {
  if (val.length === 1) {
    return `00${val}`;
  }
  if (val.length === 2) {
    return `0${val}`;
  }
  return val;
};

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

interface Poke {
  poke: Pokemon;
  id: number;
}

const PokeCard = ({ poke, id }: Poke) => {
  console.log({ poke, id });

  const history = useHistory();

  const _onCardClick = () => {
    history.push(`${APP_PREFIX_PATH}/poke/${poke.key}`);
  };

  return (
    <Card
      hoverable
      bordered={false}
      style={{ width: 240 }}
      onClick={_onCardClick}
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
