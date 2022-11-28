import styled from "styled-components";
import Loader from "../Loader/Loader";
import StyledLink from "../StyledLink/StyledLink";

export default function ProductsFiltered({ filteredItens }) {

	if (!filteredItens) {
		return (
			<Container filteredItens={filteredItens}>
				<Loader />
			</Container>
		);
	} else if (filteredItens.length === 0) {
		return (
			<Container filteredItens={filteredItens}>
				<div>Product not found</div>
			</Container>
		);
	}

	return (
		<Container filteredItens={filteredItens}>
			{filteredItens.map((product) => (
				<StyledLink key={product._id} to={`/product/${product._id}`}>
					<Product>
						<Image>
							<img src={product.imgURL} alt="product" />
						</Image>
						<p>{product.name}</p>
					</Product>
				</StyledLink>
			))}
		</Container>
	);
}

const Container = styled.ul`
	border-top: 1px solid black;
	width: 100%;
	height: 400px;
	overflow-y: auto;
	background-color: #ffffff;
	height: 400px;
	position: absolute;
	top: 40px;
	left: 0;
	padding: 15px;
	${(props) => (props.filteredItens === null || props.filteredItens.length === 0 ? " display: flex;" : "")};
	${(props) => (props.filteredItens === null || props.filteredItens.length === 0 ? " align-items: center;" : "")}
	${(props) => (props.filteredItens === null || props.filteredItens.length === 0 ? " justify-content: center;" : "")}
`;

const Product = styled.div`
	width: 100%;
	height: 67px;
	display: flex;
	align-items: center;
	margin-top: 3px;
	p {
		color: #a3a3a3;
		font-family: "Lora", serif;
		font-size: 16px;
	}
`;

const Image = styled.figure`
	height: 60px;
	width: 60px;
	img {
		width: 100%;
		height: 100%;
	}
	margin-right: 20px;
`;
