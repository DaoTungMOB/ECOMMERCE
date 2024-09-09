import { Col, Image, Row } from "antd";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import imageProduct from "../../assets/images/iphone-15-pro-max_3.webp";
import imageProductSmall from "../../assets/images/imagesmall1.webp";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperQuantityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = () => {};

  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col
        span={10}
        style={{
          borderRight: "1px solid #e5e5e5",
          paddingRight: "8px",
          borderRadius: "4px",
        }}
      >
        <Image
          src={imageProduct}
          alt="image product"
          preview={false}
          width="678px"
        />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          {[...Array(6)].map((_, index) => (
            <WrapperStyleColImage key={index} span={4}>
              <WrapperStyleImageSmall
                src={imageProductSmall}
                alt={`image product small ${index}`}
                preview={false}
              />
            </WrapperStyleColImage>
          ))}
        </Row>
      </Col>
      <Col span={14} style={{ padding: "10px" }}>
        <WrapperStyleNameProduct>
          iPhone 15 Pro Max 256GB | Chính hãng VN/A
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>2.000.000 VNĐ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address">
            Thành phố Việt Trì, Tỉnh Phú Thọ
          </span> - <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            Số lượng
          </div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />

            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            border={false}
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton={"Chọn mua"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>

          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px",
            }}
            textButton={" Mua trả sau"}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
