import styled from "styled-components";
import { BsCart4, BsFillTrashFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "../Button/Button";

export default function Cart() {
  return (
    <Container>
      <Top>
        <TopRight>
          <BsCart4 />
          <div>
            <h2>Meu carrinho</h2>
            <p>Meu carrinho contém 1 itens</p>
          </div>
        </TopRight>
        <TopLeft>
          <IoCloseCircleOutline />
        </TopLeft>
      </Top>
      <Middle>
        <ProductBox>
          <ProductBoxRight>
            <img src="" />
          </ProductBoxRight>
          <ProductBoxMiddle>
            <h3>Body Malha Canelada - Angel Floral Black G</h3>
            <p>R$ 75,96</p>
          </ProductBoxMiddle>
          <BsFillTrashFill />
        </ProductBox>
      </Middle>
      <Bottom>
        <p>
          Total:<span>R$ 75,96</span>
        </p>
      </Bottom>
      <Button width={"100%"} height={"55px"}>
        FINALIZAR COMPRAR
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 36%;
  height: 100%;
  background-color: #FFFFFF;
  position: fixed;
  z-index: 4;
  right: 0;
  top: 0;
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
  svg {
    font-size: 25px;
    color: gray;
  }
`;
const ProductBoxRight = styled.figure`
  width: 60px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ProductBoxMiddle = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Bottom = styled.div`
  margin-bottom: 42px;
  span {
    font-weight: bold;
  }
`;
