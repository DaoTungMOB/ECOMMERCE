import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style"; // Import kiểu nếu có
import "./CardComponent.css"; // Import file CSS
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 220 }}
      className="custom-card"
      cover={
        <div className="image-container">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            className="card-image"
          />
          <StyleNameProduct>Iphone</StyleNameProduct>
          <WrapperReportText>
            <span>
              <span style={{ marginRight: "4px" }}>4.96</span>
              <StarFilled
                style={{ fontSize: "12px", color: "rgb(253,216,54" }}
              />
            </span>
            <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
          </WrapperReportText>
          <WrapperPriceText>
            1.000.000 VND <WrapperDiscountText>-5%</WrapperDiscountText>{" "}
          </WrapperPriceText>
        </div>
      }
    ></WrapperCardStyle>
  );
};

export default CardComponent;
