import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import StyledLink from "../StyledLink/StyledLink";
import Swal from "sweetalert2";
import api from "../../services/api";

export default function Product({ imgURL, name, price, id, userData }) {
	async function addProductToCart() {
		if (!userData) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "In order to add this product to your cart you must be logged!",
			});
			return;
		}

		const body = { quantity: 1 };

		try {
			await api.postProduct(id, body, userData.token);

			Swal.fire({
				position: "center",
				icon: "success",
				title: "Product successfully added ",
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<ProductContainer>
			<StyledLink to={`/product/${id}`}>
				<img src={imgURL} alt={name} />
				<Title>{name}</Title>
				<span>
					{price.toLocaleString("en", {
						style: "currency",
						currency: "USD",
					})}
				</span>
			</StyledLink>
			<button onClick={addProductToCart}>
				<BsCart4 />
				Add to cart
			</button>
		</ProductContainer>
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
