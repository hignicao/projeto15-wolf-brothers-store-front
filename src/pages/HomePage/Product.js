import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import Button from "../../components/CartButton/Button";
import StyledLink from "../../components/StyledLink/StyledLink";


export default function Product({ imgURL, name, price, id, type }) {
  return (
    <StyledLink to={`/product/${id}`}>
      <Container>
        <Image>
          <img src={imgURL} alt={name} />
        </Image>
        <Title>{name}</Title>
        <span>{price}</span>
        <Button width={"230px"} height={"45px"}>
          <BsCart4 />
          Add to cart
        </Button>
      </Container>
    </StyledLink>
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
  margin: 0 0 15px 10px;
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
