import styled from "styled-components";
import StyledLink from "../StyledLink/StyledLink";

export default function ProductsFiltered({ filteredItens}) {

  return (
    <Container>
      {filteredItens.map((product) => (
        <StyledLink key={product._id} to={`/product/${product._id}`}>
          <Product>
            <Image>
              <img src={product.imageURL} />
            </Image>
            <p>{product.name}</p>
          </Product>
        </StyledLink>
      ))}
    </Container>
  );
}

const Container = styled.ul`
border-top: 1px solid black;
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  background-color: #ffffff;
  height: 400px;
  position: absolute;
  top: 40px;
  left: 0;
`;
const Product = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  margin-top: 3px;
  p {
    color: #a3a3a3;
    font-family: "Lora", serif;
    font-size: 16px;
  }
`;

const Image = styled.figure`
  height: 66px;
  width: 35px;
  img {
    width: 100%;
    height: 100%;
  }
  margin-right: 32px;
`;
