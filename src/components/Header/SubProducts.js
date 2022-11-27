import styled from "styled-components";
import StyledLink from "../StyledLink/StyledLink";

export default function SubProducts({ gender }) {
  if (gender === "women") {
    return (
      <Container>
        <StyledLink to="/products/category/OVERALLS">
          <li>OVERALLS</li>
        </StyledLink>
        <StyledLink to="/products/category/COATS">
          <li>COATS</li>
        </StyledLink>
        <StyledLink to="/products/category/DRESSES">
          <li>DRESSES</li>
        </StyledLink>
        <StyledLink to="/products/category/T-SHIRTS">
          <li>T-SHIRTS</li>
        </StyledLink>
        <StyledLink to="/products/category/ACCESSORIES">
          <li>ACCESSORIES</li>
        </StyledLink>
      </Container>
    );
  } else if (gender === "men") {
    return (
      <Container>
        <StyledLink to="/products/category/JEANS">
          <li>JEANS</li>
        </StyledLink>
        <StyledLink to="/products/category/POLO">
          <li>POLO</li>
        </StyledLink>
        <StyledLink to="/products/category/BLAZER">
          <li>BLAZER</li>
        </StyledLink>
        <StyledLink to="/products/category/T-SHIRTS">
          <li>T-SHIRTS</li>
        </StyledLink>
        <StyledLink to="/products/category/ACCESSORIES">
          <li>ACCESSORIES</li>
        </StyledLink>
      </Container>
    );
  }
}

const Container = styled.ul`
  width: 210px;
  height: auto;
  padding: 10px 0 0 10px;
  background-color: #000000;
  position: absolute;
  top: 60px;
  left: -10px;
  li {
    margin-bottom: 15px;
    color: gray;
    letter-spacing: 1px;
  }
`;
