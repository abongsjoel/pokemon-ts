import React from "react";

import { RouteComponentProps } from "react-router-dom";

const Poke = (prop: RouteComponentProps) => {
  //@ts-ignore
  const id = prop?.match.params.id;
  console.log({ id });
  return <div>I am a single poke page and i am very nice fellow</div>;
};

export default Poke;
