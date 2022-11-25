import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { IoSearch, IoPersonCircleSharp, IoHeartSharp, IoBag } from "react-icons/io5";
import { useContext, useState } from "react";
import api from "../../services/api";
import StyledLink from "../StyledLink/StyledLink";
import SubProducts from "./SubProducts";
import { UserContext } from "../../providers/UserData";

export default function Header() {
	const { userData } = useContext(UserContext);
	const [filteredItens, setFilteredItens] = useState(null);

	async function handleProductSearch(e) {
		const value = e.target.value;
		if (value.split(" ").join("").length >= 2) {
			try {
				const response = await api.getFilteredProducts(value);
				console.log(response, "PRODUTO");

				setFilteredItens(response.data.filteredProducts);
			} catch (err) {
				console.log(err);
			}
		}
	}
	console.log(filteredItens, "produto");
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
				<input type="text" placeholder="Search" onChange={handleProductSearch} />
				<IoSearch />
			</SearchBox>
			<IconBox>
				{/* <IoHeartSharp /> */}
				<div>
					<p>{userData && `Olá ${userData.name}`}</p>
					<StyledLink to={userData ? "/" : "/signin"}>
						<IoPersonCircleSharp />
					</StyledLink>
				</div>
				<IoBag />
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
	background: #d9d9d9;
	padding: 10px;
	input {
		width: 90%;
		border: none;
		background-color: #d9d9d9;
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
	color: #d9d9d9;
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
