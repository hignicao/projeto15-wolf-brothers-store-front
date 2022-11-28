import styled from "styled-components";
import StyledLink from "../StyledLink/StyledLink";

export default function SubProducts({ gender }) {
  if (gender === "women") {
    return (
      <Container>
        <StyledLink to="/products/women/OVERALLS">
          <li>OVERALLS</li>
        </StyledLink>
        <StyledLink to="/products/women/COATS">
          <li>COATS</li>
        </StyledLink>
        <StyledLink to="/products/women/DRESSES">
          <li>DRESSES</li>
        </StyledLink>
        <StyledLink to="/products/women/T-SHIRTS">
          <li>T-SHIRTS</li>
        </StyledLink>
        <StyledLink to="/products/women/ACCESSORIES">
          <li>ACCESSORIES</li>
        </StyledLink>
      </Container>
    );
  } else if (gender === "men") {
    return (
      <Container>
        <StyledLink to="/products/men/JEANS">
          <li>JEANS</li>
        </StyledLink>
        <StyledLink to="/products/men/POLO">
          <li>POLO</li>
        </StyledLink>
        <StyledLink to="/products/men/BLAZER">
          <li>BLAZER</li>
        </StyledLink>
        <StyledLink to="/products/men/T-SHIRTS">
          <li>T-SHIRTS</li>
        </StyledLink>
        <StyledLink to="/products/men/ACCESSORIES">
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
  background-color: #000f21;
  position: absolute;
  top: 60px;
  left: -80px;
  li {
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
`;
