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

const CardComponent = (props) => {
  const {
    countInStock,
    description,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
  } = props;

  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 242 }}
      className="custom-card"
      cover={
        <div className="image-container">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            className="card-image"
          />
          <StyleNameProduct>{name}</StyleNameProduct>
          <WrapperReportText>
            <span>
              <span style={{ marginRight: "4px" }}>{rating}</span>
              <StarFilled
                style={{ fontSize: "12px", color: "rgb(253,216,54" }}
              />
            </span>
            <WrapperStyleTextSell>
              {" "}
              | Da ban {selled || 1000} +
            </WrapperStyleTextSell>
          </WrapperReportText>
          <WrapperPriceText>
            <span style={{ marginRight: "8px" }}>{price}</span>
            <WrapperDiscountText>{discount || 5} %</WrapperDiscountText>{" "}
          </WrapperPriceText>
        </div>
      }
    ></WrapperCardStyle>
  );
};

export default CardComponent;
