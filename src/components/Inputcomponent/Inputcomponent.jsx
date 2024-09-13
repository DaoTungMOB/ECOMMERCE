import { Input } from "antd";
import React from "react";

const Inputcomponent = ({ size, placeholder, bordered, style, ...rests }) => {
  return (
    <Input size={size} placeholder={placeholder} style={style} {...rests} />
  );
};

export default Inputcomponent;
