import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";
import Product from "../../components/Product/Product";
import { useParams } from "react-router-dom";

export default function ProductsByCategoryPage() {
  const [products, setProducts] = useState(null);
  const { category, gender } = useParams();

  useEffect(() => {
    api
      .getProductsByCategory(gender, category)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [category, gender]);

  if (!products) {
    return (
      <ContainerEmpty>
        <Loader />
      </ContainerEmpty>
    );
  }
  return (
    <Container>
      <p>{category}</p>
      <ProductsContainer>
        {products.map((product) => (
          <Product
            key={product._id}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            id={product._id}
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
