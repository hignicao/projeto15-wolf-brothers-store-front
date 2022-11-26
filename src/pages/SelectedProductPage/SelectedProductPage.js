import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BlackScreen from "../../components/BlackScreen/BlackScreen";
import Loader from "../../components/Loader/Loader";
import StatesContext from "../../providers/StatesContext";
import { UserContext } from "../../providers/UserData";
import api from "../../services/api";
import ButtonsContainer from "./ButtonsContainer";

export default function SelectedProductPage() {
  const [product, setProduct] = useState(null);
  const { setShowResult, showResult } = useContext(StatesContext);
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
          <ImageBox>
            <img src={product.imgURL} />
          </ImageBox>
        </Left>
        <Right>
          <h1>{product.name}</h1>
          <Description>{product.type}</Description>
          <span>
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <ButtonsContainer productId={productId} />
        </Right>
      </ProductContainer>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-y: none;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const ProductContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-size: 30px;
  }
`;
const Left = styled.div`
  width: 37%;
  height: 73%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageBox = styled.figure`
  width: 60%;
  height: 60%;
  background-color: red;
  img {
    width: 100%;
    height: 100%;
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
