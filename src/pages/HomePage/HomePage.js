import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";
import ImageSlider from "./ImageSlider";
import Product from "./Product";

export default function HomePage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api
      .getProducts()
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!products) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  return (
    <Container>
      <div>
        <ImageSlider />
      </div>
      <h1>PRODUCTS IN STOCK</h1>
      <ProductsContainer>
        {products.map((product) => (
          <Product
            key={product._id}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            id={product._id}
            type={product.type}
          />
        ))}
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
  width: 90%;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px 0;
  overflow: hidden;
`;
