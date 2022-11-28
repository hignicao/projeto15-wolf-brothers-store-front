import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { IoSearch, IoPersonCircleSharp, IoBag } from "react-icons/io5";
import { useContext, useState } from "react";
import api from "../../services/api";
import StyledLink from "../StyledLink/StyledLink";
import SubProducts from "./SubProducts";
import { UserContext } from "../../providers/UserData";
import ProductsFiltered from "./ProductsFiltered";
import StatesContext from "../../providers/StatesContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const { userData } = useContext(UserContext);
	const { setShowCart, setShowResult, showResult } = useContext(StatesContext);
	const [filteredItens, setFilteredItens] = useState(null);
	const navigate = useNavigate();

	async function handleProductSearch(e) {
		setFilteredItens(null);
		const value = e.target.value;
		if (!value) {
			setFilteredItens([]);
			return;
		}
		try {
			const response = await api.getFilteredProducts(value);
			setFilteredItens(response.data.filteredProducts);
		} catch (err) {
			console.log(err);
			setFilteredItens([]);
		}
	}

	function showCart() {
		if (!userData) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "In order to access the cart you must be logged!",
			});
			navigate("/signin");
			return;
		} else {
			setShowCart(true);
		}
	}

	return (
		<Container>
			<StyledLink to="/">
				<img src={logo} alt="logo" />
			</StyledLink>
			<ShowList>
				MEN
				<SubProducts gender={"men"} />
			</ShowList>
			<ShowList>
				WOMEN
				<SubProducts gender={"women"} />
			</ShowList>
			<SearchBox>
				<input
					onFocus={() => {
						setShowResult(true);
						if (filteredItens === null) {
							setFilteredItens([]);
						}
					}}
					type="text"
					placeholder="Search"
					onChange={handleProductSearch}
				/>
				<IoSearch />
				{showResult && <ProductsFiltered filteredItens={filteredItens} />}
			</SearchBox>
			<IconBox>
				<div>
					<p>{userData && `Olá ${userData.name}`}</p>
					<StyledLink to={userData ? "/user" : "/signin"}>
						<IoPersonCircleSharp />
					</StyledLink>
				</div>
				<IoBag onClick={() => showCart()} />
			</IconBox>
		</Container>
	);
}

const Container = styled.header`
	width: 100%;
	height: 100px;
	background: #000f21;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 0 50px;
	position: fixed;
	top: 0;
	z-index: 2;
	span {
		color: #d9d9d9;
	}
`;

const SearchBox = styled.div`
	width: 100%;
	max-width: 300px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #ffffff;
	padding: 10px;
	position: relative;
	input {
		width: 90%;
		border: none;
		background-color: #ffffff;
		outline: none;
		text-align: center;
		font-family: "Lora", serif;
		font-size: 16px;
	}
	svg {
		font-size: 20px;
	}
`;

const IconBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 25px;
	color: #ffffff;
	svg {
		font-size: 30px;
	}
	div {
		display: flex;
		align-items: center;
		gap: 10px;

		p {
			text-align: end;
		}
	}
`;

const ShowList = styled.span`
	position: relative;
	height: 80px;
	display: flex;
	align-items: center;
	cursor: pointer;
	ul {
		display: none;
		:hover {
			display: block;
		}
	}
	:hover ul {
		display: block;
	}
`;
