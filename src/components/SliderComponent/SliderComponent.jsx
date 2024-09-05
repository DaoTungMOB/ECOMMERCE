import { Image, Slider as AntSlider } from "antd"; // Đổi tên Slider từ antd thành AntSlider
import React from "react";
import Slider from "react-slick"; // Slider từ react-slick

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image) => (
        <div key={image}>
          <Image
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="350px"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
