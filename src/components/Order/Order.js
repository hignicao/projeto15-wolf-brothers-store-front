import { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import styled from "styled-components";
import ProductCheckout from "../../pages/CheckoutPage/ProductCheckout";

export default function Order({ products, orderInfo, time, orderID }) {
	const { purchasePrice, checkoutForm } = orderInfo;
	const { address, city, state, zipCode, payment } = checkoutForm;
	const [showDetails, setShowDetails] = useState(false);

	return (
		<OrderContainer>
			<OrderHeader>
				<OrderInfo>
					<p>Order #{orderID.slice(6, 13)}</p>
					<p>Date: {time}</p>
					{!showDetails && (
						<p>
							Price:{" "}
							{purchasePrice.toLocaleString("en", {
								style: "currency",
								currency: "USD",
							})}
						</p>
					)}
				</OrderInfo>
				<DropDown onClick={() => setShowDetails(!showDetails)}>{showDetails ? <IoChevronUpSharp /> : <IoChevronDownSharp />}</DropDown>
			</OrderHeader>
			{showDetails && (
				<OrderDetails>
					<DeliveryPayment>
						<Delivery>
							<p>Delivery address:</p>
							<span>{address}, </span>
							<span>{city}/</span>
							<span>{state} - </span>
							<span>{zipCode}</span>
						</Delivery>
						<Payment>
							<p>Payment method:</p>
							<span>{payment.replace("C", " C")}</span>
						</Payment>
					</DeliveryPayment>
					<Products>
						<p>Products:</p>
						{products.map((product) => (
							<ProductCheckout key={product._id} img={product.imgURL} name={product.name} quantity={product.quantity} price={product.price} />
						))}
						<span>
							<span>Total: </span>
							{purchasePrice?.toLocaleString("en", {
								style: "currency",
								currency: "USD",
							})}
						</span>
					</Products>
				</OrderDetails>
			)}
		</OrderContainer>
	);
}

const OrderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const OrderHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const OrderInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	p:nth-child(1) {
		font-size: 19px;
		font-weight: 700;
	}
	p:nth-child(3) {
		font-weight: 600;
	}
`;

const DropDown = styled.div`
	svg {
		font-size: 25px;
	}
`;

const OrderDetails = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const Delivery = styled.div`
	width: 50%;
	p {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 3px;
	}
`;

const Payment = styled.div`
	p {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 3px;
	}
`;

const DeliveryPayment = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-right: 30px;
`;

const Products = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	> p {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 15px;
	}
	> span {
		align-self: flex-end;
		font-size: 20px;
		font-weight: 600;
		margin-top: 15px;
	}
`;
