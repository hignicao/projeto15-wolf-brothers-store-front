import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import Button from "../../components/Button/Button";
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
  width:290px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom:20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
