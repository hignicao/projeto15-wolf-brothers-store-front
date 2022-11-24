import styled from "styled-components";
import Button from "../../components/CartButton/Button";
import { BsCart4 } from "react-icons/bs";

export default function ButtonsContainer() {
  return (
    <Container>
      <Right>
        <Button width={"50px"} height={"50px"}>
          -
        </Button>
        <span>0</span>
        <Button width={"50px"} height={"50px"}>
          +
        </Button>
      </Right>
      <Button width={"230px"} height={"50px"}>
        <BsCart4 />
        Add to cart
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
