import styled from "styled-components";

export default function NavBar() {
  return (
    <Container>
      <span>HOME</span>
      <span>MEN</span>
      <span>WOMEN</span>
      <span>THE BRAND</span>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  top: 180px;
  width: 100vw;
  height: 130px;
  border-bottom: 1px solid #000f21;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 240px;
  z-index: 2;
  background-color: #ffffff;
`;
