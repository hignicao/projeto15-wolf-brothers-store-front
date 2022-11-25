import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BlackScreen from "../../components/BlackScreen/BlackScreen";
import Loader from "../../components/Loader/Loader";
import { UserContext } from "../../providers/UserData";
import api from "../../services/api";
import ButtonsContainer from "./ButtonsContainer";

export default function SelectedProductPage() {
  const [product, setProduct] = useState(null);
  const { setShowResult, showResult } = useContext(UserContext);
  const { productId } = useParams();

  useEffect(() => {
    setShowResult(false);
  }, [productId]);

  useEffect(() => {
    api
      .getSelectedProduct(productId)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, [productId]);
  console.log(product);
  if (!product) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  return (
    <Container>
      <ProductContainer>
        <Left>
          <img src={product.imgURL} />
        </Left>
        <Right>
          <h1>{product.name}</h1>
          <Description>{product.type}</Description>
          <span>{product.price}</span>
          <ButtonsContainer />
        </Right>
      </ProductContainer>
      {showResult && <BlackScreen onClick={() => setShowResult(false)} />}
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
