import React from "react";

import { Typography } from "antd";
import { isNil } from "lodash";

const { Title, Text } = Typography;

interface TextDescriptionProps {
  /*
   *The title of the text
   */
  title: string;

  /*
   *The text itself
   */
  text?: string | number | null;
}

const TextDescription = ({ title, text }: TextDescriptionProps) => {
  return (
    <React.Fragment>
      <Title level={3} style={{ color: "white" }}>
        {title}
      </Title>
      {isNil(text) ? (
        <Text style={{ color: "#696969" }} italic>
          Not Defined
        </Text>
      ) : (
        <Text style={{ fontSize: "1.5em" }}>{text}</Text>
      )}
    </React.Fragment>
  );
};

export default TextDescription;
