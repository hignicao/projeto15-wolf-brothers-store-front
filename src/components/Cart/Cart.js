import styled from "styled-components";
import { BsCart4, BsFillTrashFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import StatesContext from "../../providers/StatesContext";
import api from "../../services/api";
import { UserContext } from "../../providers/UserData";
import Swal from "sweetalert2";
import ProductCart from "./ProductCart";
import StyledLink from "../StyledLink/StyledLink";

export default function Cart() {
  const { setShowCart } = useContext(StatesContext);
  const { userData } = useContext(UserContext);
  const [cartProducts, setCartProducts] = useState(null);
  const [purchaseValue, setPurchaseValue] = useState(0);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    api.getCartProducts(userData.token).then((res) => {
      setCartProducts(res.data.products);
      setPurchaseValue(res.data.purschasePrice);
      console.log(res.data);
    });
  }, [update]);

  async function deleteProductFromCart(id) {
    try {
      await api.deleCartProduct(id, userData.token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product successfully deleted ",
        showConfirmButton: false,
        timer: 1500,
      });
      setUpdate(!update);
    } catch (err) {
      console.log(err);
    }
  }

  if (!cartProducts) {
    return;
  }
  return (
    <Container>
      <Overlay onClick={() => setShowCart(false)}></Overlay>
      <CartBox>
        <Top>
          <TopRight>
            <BsCart4 />
            <div>
              <h2>Meu carrinho</h2>
              <p>Meu carrinho contém {cartProducts.length} itens</p>
            </div>
          </TopRight>
          <TopLeft>
            <IoCloseCircleOutline onClick={() => setShowCart(false)} />
          </TopLeft>
        </Top>
        <Middle>
          {cartProducts.map((product) => (
            <ProductBox>
              <ProductCart
                img={product.imgURL}
                name={product.name}
                quantity={product.quantity}
                price={product.price}
              />
              <BsFillTrashFill
                onClick={() => deleteProductFromCart(product._id)}
              />
            </ProductBox>
          ))}
        </Middle>
        <Bottom>
          <p>
            Total:
            <span>
              {purchaseValue?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
        </Bottom>
        <StyledLink to="/checkout">
          <Button width={"100%"} height={"55px"}>
            FINALIZAR COMPRAR
          </Button>
        </StyledLink>
      </CartBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 4;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
`;
const Overlay = styled.div`
  width: 84%;
  height: 100%;
  background: black;
  opacity: 0.6;
`;
const CartBox = styled.div`
  width: 36%;
  height: 100%;
  background-color: #ffffff;
  padding: 38px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopRight = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  div {
    margin-left: 33px;
    h2 {
      font-size: 25px;
      margin-bottom: 5px;
    }
  }
  svg {
    font-size: 45px;
  }
`;
const TopLeft = styled.div`
  svg {
    font-size: 45px;
  }
`;
const Middle = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 50px;
  overflow-y: auto;
`;
const ProductBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  svg {
    font-size: 25px;
    color: gray;
  }
`;

const Bottom = styled.div`
  margin: 42px 0;
  span {
    font-weight: bold;
  }
`;
