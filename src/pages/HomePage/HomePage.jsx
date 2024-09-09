import React from "react";
import Typeproduct from "../../components/TypeProduct/Typeproduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./Style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";

const Homepage = () => {
  const arr = ["Laptop", "Mobile", "Tablet", "Smartwatch"];
  return (
    <>
      <div style={{ width: "1270px", margin: " 0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <Typeproduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#efefef" }}
      >
        <div
          id="container"
          style={{
            margin: "0 auto",
            height: "1000px",
            width: "1270px",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229",
                width: "240px",
                height: "38px",
                borderRadius: "10px",
              }}
              styleTextButton={{
                fontWeight: 500,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
