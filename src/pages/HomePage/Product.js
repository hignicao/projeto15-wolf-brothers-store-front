import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import CartButton from "../../components/CartButton/CartButton";

export default function Product() {
  return (
    <Container>
      <Image>
        <img src="https://static.netshoes.com.br/produtos/camisa-xadrez-new-era-united-in-sport-manga-longa-masculina/60/IJX-7258-060/IJX-7258-060_zoom1.jpg?ts=1585153093" />
      </Image>
      <Title>Plaid Shirt</Title>
      <span>R$ 82,70</span>
      <CartButton>
        <BsCart4 />
        Add to cart
      </CartButton>
    </Container>
  );
}

const Container = styled.div`
  width: 275px;
  height: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin:0 0 15px 10px;
`;

const Image = styled.figure`
  width: 200px;
  height: 230px;
  img {
    width: 100%;
    height: auto;
  }
`;
const Title = styled.h2`
  background-color: yellow;
  word-break: break-word;
  letter-spacing: 1px;
  margin: 30px 0;
`;
