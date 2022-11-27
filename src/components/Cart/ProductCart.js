import styled from "styled-components";

export default function ProductCart({ img, quantity, price, name }) {
	return (
		<Container>
			<Right>
				<img src={img} alt="product" />
			</Right>
			<Left>
				<div>
					<h3>{name}</h3>
					<p>QTY: {quantity}</p>
				</div>
				<p>
					{price?.toLocaleString("en", {
						style: "currency",
						currency: "USD",
					})}
				</p>
			</Left>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
`;

const Right = styled.figure`
	height: 100%;
	width: 60px;
	img {
		height: 100%;
	}
`;

const Left = styled.div`
	height: 80px;
	margin-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;

		h3 {
			font-size: 20px;
			font-weight: 600;
		}
	}
	> p {
		font-size: 18px;
		font-weight: 600;
	}
`;
