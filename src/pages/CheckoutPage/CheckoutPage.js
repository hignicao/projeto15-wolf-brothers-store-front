import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import ProductCart from "../../components/Cart/ProductCart";
import Loader from "../../components/Loader/Loader";
import { UserContext } from "../../providers/UserData";
import api from "../../services/api";

export default function ChekouPage() {
  const [cartProducts, setCartProducts] = useState(null);
  const [purchaseValue, setPurchaseValue] = useState(0);
  const [CPF, setCPF] = useState("");
  const [CEP, setCEP] = useState("");
  const [formPayment, setFormPayment] = useState("");
  const { userData } = useContext(UserContext);

  useEffect(() => {
    api.getCartProducts(userData.token).then((res) => {
      setCartProducts(res.data.products);
      setPurchaseValue(res.data.purschasePrice);
      console.log(res.data);
    });
  }, []);

  async function completePurchase() {
    const body = {
      formPayment,
      CPF,
      CEP,
    };
    console.log(body);
    try {
      await api.postPurchaseCompletion(body, userData.token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Purchase successfully completed",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  }
  if (!cartProducts) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <h1>Complete Purchase</h1>
      <Grid>
        <PersonalInformation>
          <h2>Dados pessoais</h2>
          <div>
            <label>CPF</label>
            <br></br>
            <input onChange={(e) => setCPF(e.target.value)} />
          </div>
        </PersonalInformation>

        <Delivery>
          <h2>Adress</h2>
          <div>
            <label>CEP</label>
            <br></br>
            <input onChange={(e) => setCEP(e.target.value)} />
          </div>
        </Delivery>
        <PaymentOption>
          <h2>Adress</h2>
          <button onClick={() => setFormPayment("Pix")}>Pix</button>
          <button onClick={() => setFormPayment("Boleto")}>Boleto</button>
          <button onClick={() => setFormPayment("Cartão de crédito")}>
            Cartão de crédito
          </button>
        </PaymentOption>
        <PurchaseSummary>
          {cartProducts.map((product) => (
            <ProductCart
              img={product.imgURL}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
            />
          ))}
        </PurchaseSummary>
        <p>
          Total:
          {purchaseValue?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={completePurchase}>Finalizar compra</button>
      </Grid>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 50px;
  }
`;

const Grid = styled.div`
  width: 50%;
  background-color: yellow;
  height: 50%;
  margin-top: 50px;
  display: flex;
`;

const PersonalInformation = styled.div`
  width: 25%;
  height: 80px;
  background-color: green;
  input {
    margin-top: 5px;
  }
  h2 {
    margin-top: 10px;
  }
`;

const Delivery = styled.div`
  width: 25%;
  height: 80px;
  background-color: red;
  input {
    margin-top: 5px;
  }
  h2 {
    margin-top: 10px;
  }
`;

const PaymentOption = styled.div`
  width: 25%;
  height: 80px;
  background-color: blue;
`;
const PurchaseSummary = styled.div``;
