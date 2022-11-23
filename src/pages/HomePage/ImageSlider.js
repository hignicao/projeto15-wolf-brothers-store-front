import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import images from "./images";

export default function ImageSlider() {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((item) => (
          <ImageContainer>
            <img src={item.src} />
          </ImageContainer>
        ))}
      </Slider>
    </SliderContainer>
  );
}
const SliderContainer = styled.section`
  width: 50vw;
`;

const ImageContainer = styled.div`
  img {
    width: 10vw;
    height: auto;
  }
`;
