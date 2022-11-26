import styled from "styled-components";

export default function ProductCart({ img, quantity, price, name }) {
  return (
    <Container>
      <Right>
        <img src={img} />
      </Right>
      <Left>
        <h3>{name}</h3>
        <p>Quantity:{quantity}</p>
        <p>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Left>
    </Container>
  );
}
const Container = styled.div`
 display:flex;
`
const Right = styled.figure`
  width: 60px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Left = styled.div`
  width: 80%;
  height: 80px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
