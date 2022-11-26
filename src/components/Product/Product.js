import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import StyledLink from "../StyledLink/StyledLink";

export default function Product({ imgURL, name, price, id, type }) {
	return (
		<StyledLink to={`/product/${id}`}>
			<ProductContainer>
				<img src={imgURL} alt={name} />
				<Title>{name}</Title>
				<span>${price}</span>
				<button>
					<BsCart4 />
					Add to cart
				</button>
			</ProductContainer>
		</StyledLink>
	);
}
const ProductContainer = styled.div`
	position: relative;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
		padding: 10px;
		margin-top: 20px;
		background-color: #000f21;
		border: none;
		outline: none;
		color: #ffffff;
		font-size: 18px;
		font-family: "Lora", serif;
	}
	img {
		margin-bottom: 35px;
	}
	span {
		font-size: 18px;
	}
`;

const Title = styled.h2`
	position: absolute;
	top: 275px;
	font-size: 20px;
	background-color: #000f21;
	color: #ffffff;
	border-radius: 1px;
	padding: 3px 7px;
	word-break: break-word;
	letter-spacing: 1px;
`;
