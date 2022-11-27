import styled from "styled-components";

const Button = styled.button`
  font-family: "Lora", serif;
  width:${props=>props.width};
  height: ${props=>props.height};
  border: 1px solid black;
  background-color: black;
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 18px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  svg {
    font-size: 25px;
    color: #ffffff;
  }
`;

export default Button;