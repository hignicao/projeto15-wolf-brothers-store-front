import styled from "styled-components";

export default function FemaleProducts() {
  return (
    <Container>
      <li>OVERALLS</li>
      <li>COATS</li>
      <li>DRESSES</li>
      <li>T-SHIRTS</li>
      <li>ACCESSORI</li>
    </Container>
  );
}

const Container = styled.ul`
  width: 210px;
  height: auto;
  padding: 10px 0 0 10px;
  background-color: #000000;
  position: absolute;
  top:60px;
  left:-10px;
  li {
    margin-bottom: 15px;
    color: gray;
    letter-spacing: 1px;
  }
`;