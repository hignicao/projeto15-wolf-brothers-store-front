import styled from "styled-components";
import images from "./images";
import ImageSlider from "./ImageSlider";
import Product from "./Product";

export default function HomePage() {
  return (
    <Container>
      <div>
        <ImageSlider />
      </div>
      <h1>PRODUCTS IN STOCK</h1>
      <ProductsContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsContainer>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #000f21;
    font-size: 50px;
    font-style: normal;
    margin: 70px 0;
  }
`;
const ProductsContainer = styled.section`
  width: 1180px;
  height: 1160px;
  background: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  overflow: hidden;
`;
