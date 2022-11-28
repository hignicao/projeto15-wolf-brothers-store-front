import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Order from "../../components/Order/Order";
import { UserContext } from "../../providers/UserData";
import api from "../../services/api";

export default function UserPage() {
	const { userData, setUserData } = useContext(UserContext);
	const [orders, setOrders] = useState(undefined);
	const navigate = useNavigate();

	useEffect(() => {
		api
			.getPurchaseHistory(userData.token)
			.then((res) => {
				setOrders(res.data.reverse());
			})
			.catch((err) => {
				console.log(err);
			});
	}, [userData.token]);

	function handleLogout() {
		localStorage.removeItem("userData");
		setUserData(undefined);
		navigate("/");
	}

	return (
		<UserScreen>
			<UserContainer>
				<h3>Recent orders:</h3>
				<OrdersContainer>
					{orders?.length === 0 && <p>You have no orders yet!</p>}
					{orders?.map((order) => (
						<Order key={order._id} orderID={order._id} products={order.products} orderInfo={order.purchaseInfo} time={order.timeOfPurchase} />
					))}
				</OrdersContainer>
				<ButtonSignOut onClick={handleLogout}>Sign out</ButtonSignOut>
			</UserContainer>
		</UserScreen>
	);
}

const UserScreen = styled.div`
	width: 100%;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserContainer = styled.div`
	width: 100%;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	padding: 0 20px 40px 20px;
	> h3 {
		font-size: 40px;
		margin-top: 50px;
		font-weight: 600;
	}
`;

const OrdersContainer = styled.div`
	min-height: 100px;
	background-color: #f5f5f5;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	padding: 20px;
	width: 100%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 50px;
`;

const ButtonSignOut = styled.button`
	width: 200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	padding: 12px;
	border: none;
	color: #ffffff;
	background-color: #000000;
	font-family: "Lora", serif;
`;
