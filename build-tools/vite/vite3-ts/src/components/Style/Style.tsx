import React, { type CSSProperties, type FC } from "react";

export interface IContainerProps {
  style: CSSProperties;
}

const css: CSSProperties = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

const Style: FC<IContainerProps> = ({ style }: IContainerProps) => {
  return <p style={style}>Hello Style!</p>;
};

export default Style;
