import styled from "styled-components";
import { BsCart4, BsFillTrashFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import StatesContext from "../../providers/StatesContext";
import api from "../../services/api";
import { UserContext } from "../../providers/UserData";
import ProductCart from "./ProductCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
	const { setShowCart } = useContext(StatesContext);
	const { userData } = useContext(UserContext);
	const [cartProducts, setCartProducts] = useState(null);
	const [purchaseValue, setPurchaseValue] = useState(0);
	const [update, setUpdate] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		api.getCartProducts(userData.token).then((res) => {
			setCartProducts(res.data.products);
			setPurchaseValue(res.data.purchasePrice);
		});
	}, [update, userData.token]);

	async function deleteProductFromCart(id) {
		try {
			await api.deleCartProduct(id, userData.token);
			setUpdate(!update);
		} catch (err) {
			console.log(err);
		}
	}

	function goToCheckout() {
		if (cartProducts.length === 0) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Your cart is empty",
			});
		} else {
			setShowCart(false);
			navigate("/checkout");
		}
	}

	if (!cartProducts) {
		return;
	}
	return (
		<Container>
			<Overlay onClick={() => setShowCart(false)}></Overlay>
			<CartBox>
				<Top>
					<TopRight>
						<BsCart4 />
						<h2>Meu carrinho</h2>
					</TopRight>
					<TopLeft>
						<IoCloseCircleOutline onClick={() => setShowCart(false)} />
					</TopLeft>
				</Top>
				<Middle>
					{cartProducts.map((product) => (
						<ProductBox key={product._id}>
							<ProductCart img={product.imgURL} name={product.name} quantity={product.quantity} price={product.price} />
							<BsFillTrashFill onClick={() => deleteProductFromCart(product._id)} />
						</ProductBox>
					))}
				</Middle>
				<Bottom>
					<span>Total: </span>
					<span>
						{purchaseValue?.toLocaleString("en", {
							style: "currency",
							currency: "USD",
						})}
					</span>
				</Bottom>
				<Button onClick={() => goToCheckout()} width={"100%"} height={"55px"}>
					FINALIZAR COMPRA
				</Button>
			</CartBox>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 4;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Overlay = styled.div`
	width: 50%;
	height: 100%;
	background: black;
	opacity: 0.6;
`;

const CartBox = styled.div`
	width: 50%;
	height: 100%;
	background-color: #ffffff;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Top = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TopRight = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	h2 {
		font-size: 25px;
	}
	svg {
		font-size: 40px;
	}
`;

const TopLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		font-size: 45px;
	}
`;

const Middle = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	width: 100%;
	margin-top: 50px;
`;

const ProductBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	svg {
		font-size: 25px;
		color: gray;
	}
`;

const Bottom = styled.div`
	span {
		font-size: 22px;
		font-weight: bold;
	}
`;
