import { useEffect, useState } from "react";
import styled from "styled-components";
import BlackScreen from "../../components/BlackScreen/BlackScreen";
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
      <ContainerEmpty>
        <Loader />
      </ContainerEmpty>
    );
  }

  return (
    <Container>
      <div>
        <ImageSlider />
      </div>
      <p>OUR PRODUCTS</p>
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

const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40vh;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 40px;
    font-style: normal;
    margin: 70px 0 40px 0;
  }
`;

const ProductsContainer = styled.section`
  padding: 20px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  overflow: hidden;
`;
