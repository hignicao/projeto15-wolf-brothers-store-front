import styled from "styled-components";
import Button from "../../components/Button/Button";
import { BsCart4 } from "react-icons/bs";
import { useContext, useState } from "react";
import api from "../../services/api";
import { UserContext } from "../../providers/UserData";
import Swal from "sweetalert2";

export default function ButtonsContainer({ productId }) {
  const [quantity, setQuantity] = useState(0);
  const { userData } = useContext(UserContext);
  console.log(userData);
  async function addProductToCart() {
    if (!userData) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "In oder to add this product to your cart you must be logged!",
      });
      return;
    } else if (Number(quantity) === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Choose at least one product!",
      });
      return;
    }
    const body = { quantity };
    try {
      await api.postProduct(productId, body, userData.token);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product successfully added ",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Right>
        <Button
          width={"50px"}
          height={"50px"}
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          width={"50px"}
          height={"50px"}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </Right>
      <Button width={"230px"} height={"50px"} onClick={addProductToCart}>
        <BsCart4 />
        Add to cart
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span {
    margin-top: 15px;
    background-color: gray;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }
  button {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    font-weight: bold;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
