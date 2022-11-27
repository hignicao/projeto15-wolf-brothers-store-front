import styled from "styled-components";
import Button from "../../components/Button/Button";
import { BsCart4 } from "react-icons/bs";
import { useContext, useState } from "react";
import api from "../../services/api";
import { UserContext } from "../../providers/UserData";
import Swal from "sweetalert2";

export default function ButtonsContainer({ productId }) {
	const [quantity, setQuantity] = useState(1);
	const { userData } = useContext(UserContext);

	async function addProductToCart() {
		if (!userData) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "In order to add this product to your cart you must be logged!",
			});
			return;
		} else if (Number(quantity) === 0) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Choose at least one product!",
			});
			return;
		}

		const body = { quantity };

		try {
			await api.postProduct(productId, body, userData.token);

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
		<Container>
			<Right>
				<Button
					width={"50px"}
					height={"50px"}
					onClick={() => {
						if (quantity > 0) {
							setQuantity(quantity - 1);
						}
					}}
				>
					-
				</Button>
				<span>{quantity}</span>
				<Button width={"50px"} height={"50px"} onClick={() => setQuantity(quantity + 1)}>
					+
				</Button>
			</Right>
			<Button width={"180px"} height={"50px"} onClick={addProductToCart}>
				<BsCart4 />
				Add to cart
			</Button>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
	span {
		margin-top: 15px;
		background-color: gray;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: bold;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	}
	button {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
		font-weight: bold;
	}
`;

const Right = styled.div`
	display: flex;
	align-items: center;
`;
