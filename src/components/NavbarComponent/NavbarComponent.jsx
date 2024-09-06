import React from "react";
import {
  WrapperContent,
  WrapperLabelText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd"; // Thêm Rate từ Ant Design

const NavbarComponent = () => {
  const onChange = () => {};

  const renderContent = (type, options) => {
    switch (type) {
      case "Text":
        return options.map((option) => {
          return <WrapperTextValue key={option}>{option}</WrapperTextValue>;
        });

      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => (
              <Checkbox
                key={option.value}
                style={{ marginLeft: 0 }}
                value={option.value}
              >
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );

      case "star":
        return options.map((option, index) => (
          <div style={{ display: "flex" }}>
            <Rate
              style={{ fontSize: "12px" }}
              key={index}
              disabled
              defaultValue={option}
            />
            <span>{`Tu ${option} sao`}</span>
          </div>
        ));
      case "price":
        return options.map((option, index) => (
          <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
        ));

      default:
        return null;
    }
  };

  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("Text", [
          "smartphone",
          "laptop",
          "tablet",
          "smartwatch",
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["duoi 400000 VND", "tren 500000VND"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
