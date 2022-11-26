import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

export default function ImageSlider() {
	const settings = {
		className: "slider variable-width",
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		centerMode: true,
		autoplaySpeed: 5000,
		variableWidth: true,
	};

	return (
		<SliderContainer>
			<Slider {...settings}>
				<div>
					<img src={banner1} alt="banner12" />
				</div>
				<div>
					<img src={banner2} alt="banner12" />
				</div>
				<div>
					<img src={banner3} alt="banner12" />
				</div>
			</Slider>
		</SliderContainer>
	);
}

const SliderContainer = styled.section`
	width: 100vw;
	div {
		width: 100vw;
		height: 200px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;
