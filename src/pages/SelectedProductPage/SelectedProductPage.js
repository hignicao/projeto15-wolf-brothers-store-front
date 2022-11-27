import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";
import ButtonsContainer from "./ButtonsContainer";

export default function SelectedProductPage() {
	const [product, setProduct] = useState(null);
	const { productId } = useParams();

	useEffect(() => {
		api
			.getSelectedProduct(productId)
			.then((res) => setProduct(res.data.product))
			.catch((err) => console.log(err));
	}, [productId]);

	if (!product) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	return (
		<Container>
			<ProductContainer>
				<Left>
					<img src={product.imgURL} alt="Product" />
				</Left>
				<Right>
					<h1>{product.name}</h1>
					<Description>{product.type}</Description>
					<span>
						{product.price.toLocaleString("en", {
							style: "currency",
							currency: "USD",
						})}
					</span>
					<ButtonsContainer productId={productId} />
				</Right>
			</ProductContainer>
		</Container>
	);
}

const Container = styled.main`
	height: calc(100vh - 100px);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProductContainer = styled.section`
	height: 70%;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`;

const Left = styled.div`
	height: 100%;
	width: 50%;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	img {
		width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
`;

const Right = styled.div`
	width: 50%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	h1 {
		font-size: 40px;
		font-weight: bold;
		letter-spacing: 1px;
	}
	span {
		font-size: 30px;
		font-weight: bold;
	}
`;

const Description = styled.div`
	font-size: 18px;
	letter-spacing: 1px;
`;
