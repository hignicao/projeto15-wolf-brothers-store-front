import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import { UserContext } from "../../providers/UserData";
import api from "../../services/api";
import ProductCheckout from "./ProductCheckout";

export default function ChekouPage() {
	const { userData } = useContext(UserContext);
	const [cartProducts, setCartProducts] = useState(null);
	const [purchaseValue, setPurchaseValue] = useState(0);
	const [disabled, setDisabled] = useState(false);
	const [checkoutForm, setCheckoutForm] = useState({ address: "", city: "", state: "", zipCode: "", payment: "" });
	const navigate = useNavigate();
	const loader = <ThreeDots type="Puff" color="#FFFFFF" height={23} width={46} timeout={2000} />;

	useEffect(() => {
		api.getCartProducts(userData.token).then((res) => {
			setCartProducts(res.data.products);
			setPurchaseValue(res.data.purchasePrice);
		});
	}, [userData.token]);

	async function completePurchase(e) {
		e.preventDefault();

		setDisabled(true);

		const body = {
			purchasePrice: Number(purchaseValue.toFixed(2)),
			checkoutForm,
		};

		try {
			await api.postPurchaseCompletion(body, userData.token);
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Purchase successfully completed",
				showConfirmButton: false,
				timer: 1500,
			});
			navigate("/user");
		} catch (err) {
			console.log(err);
			setDisabled(false);
		}
	}

	function changeFormData(e) {
		const { name, value } = e.target;
		setCheckoutForm({ ...checkoutForm, [name]: value });
	}

	if (!cartProducts) {
		return (
			<ContainerEmpty>
				<Loader />
			</ContainerEmpty>
		);
	}

	return (
		<Container>
			<InnerContainer>
				<h3>Checkout</h3>
				<Summary>
					<span>Order Summary</span>
					<div>
						{cartProducts.map((product) => (
							<ProductCheckout key={product._id} img={product.imgURL} name={product.name} quantity={product.quantity} price={product.price} />
						))}
					</div>
					<p>
						<span>Total: </span>
						{purchaseValue?.toLocaleString("en", {
							style: "currency",
							currency: "USD",
						})}
					</p>
				</Summary>
				<Form onSubmit={completePurchase}>
					<Delivery>
						<span>Delivery Information</span>
						<div>
							<input
								required
								disabled={disabled}
								name="address"
								value={checkoutForm.address}
								type="text"
								placeholder="Street Address"
								onChange={changeFormData}
							/>
							<div>
								<input
									required
									disabled={disabled}
									name="city"
									value={checkoutForm.city}
									type="text"
									placeholder="City"
									onChange={changeFormData}
								/>
								<input
									required
									disabled={disabled}
									name="state"
									value={checkoutForm.state}
									type="text"
									placeholder="State"
									onChange={changeFormData}
								/>
								<input
									required
									disabled={disabled}
									name="zipCode"
									value={checkoutForm.zipCode}
									type="number"
									placeholder="Zip Code"
									onChange={changeFormData}
								/>
							</div>
						</div>
					</Delivery>
					<PaymentMethod>
						<label htmlFor="payment">Payment Method</label>
						<select required id="payment" disabled={disabled} name="payment" value={checkoutForm.payment} onChange={changeFormData}>
							<option value="creditCard">Credit Card</option>
							<option value="debitCard">Debit Card</option>
							<option value="boleto">Boleto</option>
							<option value="pix">Pix</option>
						</select>
					</PaymentMethod>
					<ButtonItem disabled={disabled} type="submit">
						{disabled ? loader : "COMPLETE ORDER"}
					</ButtonItem>
				</Form>
			</InnerContainer>
		</Container>
	);
}

const ContainerEmpty = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 40vh;
`;

const Container = styled.main`
	width: 100%;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InnerContainer = styled.div`
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

const Summary = styled.div`
	background-color: #f5f5f5;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	padding: 20px;
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	> div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	> span {
		font-size: 20px;
		font-weight: 600;
	}
	> p {
		font-size: 20px;
		font-weight: 600;
		align-self: flex-end;
	}
`;

const Form = styled.form`
	background-color: #f5f5f5;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	padding: 20px;
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

const Delivery = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	input {
		width: 100%;
		font-family: "Lora", serif;
		padding: 10px 15px;
		border: none;
		outline: none;
		font-weight: 400;
		font-size: 16px;
	}
	> div {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		div {
			display: flex;
			gap: 10px;
		}
	}
	> span {
		font-size: 20px;
		font-weight: 600;
	}
`;

const PaymentMethod = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	select {
		flex-grow: 1;
		background-color: #ffffff;
		font-family: "Lora", serif;
		padding: 8px;
		border: none;
		outline: none;
		font-weight: 400;
		font-size: 16px;
	}
	label {
		font-size: 20px;
		font-weight: 600;
	}
`;

const ButtonItem = styled.button`
	width: 100%;
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
