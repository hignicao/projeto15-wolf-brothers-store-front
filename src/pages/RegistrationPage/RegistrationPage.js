import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import api from "../../services/api";

export default function RegistrationPage() {
	const [registerForm, setResgisterForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const loader = <ThreeDots type="Puff" color="#FFFFFF" height={23} width={46} timeout={2000} />;

	function register(e) {
		e.preventDefault();

		setDisabled(true);

		api
			.register(registerForm)
			.then((res) => {
				navigate("/signin");
			})
			.catch((err) => {
				console.log(err);
				setDisabled(false);
			});
	}

	function changeFormData(e) {
		const { name, value } = e.target;
		setResgisterForm({ ...registerForm, [name]: value });
	}

	return (
    <RegistrationPageScreen>
      <RegistrationPageContainer>
        <p>REGISTER NOW!</p>
        <Form onSubmit={register}>
          <input
            required
            disabled={disabled}
            name="name"
            value={registerForm.name}
            type="text"
            placeholder="Name"
            onChange={changeFormData}
          />

          <input
            required
            disabled={disabled}
            name="email"
            value={registerForm.email}
            type="email"
            placeholder="E-mail"
            onChange={changeFormData}
            />

          <input
            required
            disabled={disabled}
            name="password"
            value={registerForm.password}
            type="password"
            placeholder="Password"
            onChange={changeFormData}
          />

          <input
            required
            disabled={disabled}
            name="confirmPassword"
            value={registerForm.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            onChange={changeFormData}
          />

          <ButtonItem disabled={disabled} type="submit">{(disabled ? loader : "SIGN-UP")}</ButtonItem>
        </Form>
        ALREADY HAVE AN ACCOUNT? <LinkText to={"/"}>LOGIN HERE</LinkText>
      </RegistrationPageContainer>
    </RegistrationPageScreen>
	);
}

const RegistrationPageScreen = styled.div`
  padding: 80px 0 80px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const RegistrationPageContainer = styled.div`
	padding: 30px;
	background-color: #FFFFFF;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
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