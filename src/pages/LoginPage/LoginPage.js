import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserData";
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function LoginPage() {
	const { userData, setUserData } = useContext(UserContext);
	const [loginForm, setLoginForm] = useState({ email: "", password: "" });
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const loader = <ThreeDots type="Puff" color="#FFFFFF" height={23} width={46} timeout={2000} />;

	useEffect(() => {
		if (userData) {
			navigate("/");
		} else {
			setUserData(undefined);
		}
	}, []);

	function login(e) {
		e.preventDefault();

		setDisabled(true);

		api
			.login(loginForm)
			.then((res) => {
				localStorage.setItem("userData", JSON.stringify(res.data));
				setUserData(res.data);
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				setDisabled(false);
			});
	}

	function changeFormData(e) {
		const { name, value } = e.target;
		setLoginForm({ ...loginForm, [name]: value });
	}

	return (
		<LoginPageScreen>
			<LoginPageContainer>
				<p>ALREADY REGISTERED?</p>
				<Form onSubmit={login}>
					<input required disabled={disabled} name="email" value={loginForm.email} type="email" placeholder="E-mail" onChange={changeFormData} />

					<input required disabled={disabled} name="password" value={loginForm.password} type="password" placeholder="Password" onChange={changeFormData} />

					<ButtonItem disabled={disabled} type="submit">
						{disabled ? loader : "LOGIN"}
					</ButtonItem>
				</Form>
				<LinkText to={"/signup"}>
					FIRST TIME? REGISTER NOW!
				</LinkText>
			</LoginPageContainer>
		</LoginPageScreen>
	);
}

const LoginPageScreen = styled.div`
	padding: 80px 0 80px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LoginPageContainer = styled.div`
	padding: 30px;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	p {
		font-size: 18px;
	}
`;

const Form = styled.form`
	width: 326px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	input {
		font-family: 'Lora', serif;
    padding: 15px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
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
	color: #FFFFFF;
	background-color: #000000;
	font-family: 'Lora', serif;
`;

const LinkText = styled(Link)`
	font-weight: 400;
	font-size: 16px;
	text-decoration: none;
	color: #000000;
`;
