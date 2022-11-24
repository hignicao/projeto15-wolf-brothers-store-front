import styled from "styled-components";
import Button from "../../components/CartButton/Button";
import ButtonsContainer from "./ButtonsContainer";
export default function SelectedProductPage() {
  return (
    <Container>
      <ProductContainer>
        <Left>
          <img src="" />
        </Left>
        <Right>
          <h1>Plaid shirt</h1>
          <Description>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Description>
          <span>R$ 80,00</span>
          <ButtonsContainer />
        </Right>
      </ProductContainer>
    </Container>
  );
}

const Container = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  overflow-y: none;
  flex-direction: column;
  align-items: center;
`;
const ProductContainer = styled.section`
  width: 890px;
  height: 425px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 30px;
  }
`;
const Left = styled.figure`
  width: 390px;
  height: 390px;
  border-radius: 4px;
  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }
`;
const Right = styled.div`
  width: 400px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
const Description = styled.div`
  width: 100%;
  height: auto;
  word-break: break-word;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;
`;
