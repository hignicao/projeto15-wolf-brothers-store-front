import styled from "styled-components";

export default function ProductCheckout({ img, quantity, price, name }) {
	return (
		<Container>
			<Left>
				<img src={img} alt="product" />
			</Left>
			<Right>
				<div>
					<span>{name}</span>
					<p>QTY: {quantity}</p>
				</div>
				<p>
					{price?.toLocaleString("en", {
						style: "currency",
						currency: "USD",
					})}
				</p>
			</Right>
		</Container>
	);
}

const Container = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.figure`
	height: 100%;
	img {
		height: 100%;
	}
`;

const Right = styled.div`
	text-align: end;
	height: 80px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;

		span {
			font-size: 20px;
			font-weight: 600;
		}
	}
	> p {
		font-size: 18px;
		font-weight: 600;
	}
`;
