import styled from "styled-components";
import logo from "../../assets/logo.png";
import {
  IoSearch,
  IoPersonCircleSharp,
  IoHeartSharp,
  IoBag,
} from "react-icons/io5";

export default function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <SearchBox>
        <input type="text" placeholder="search product" />
        <IoSearch />
      </SearchBox>
      <IconBox>
        <IoHeartSharp />
        <IoPersonCircleSharp />
        <IoBag />
      </IconBox>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  height: 180px;
  background: #000f21;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  position: fixed;
  top:0;
  z-index:2;
`;
const Logo = styled.figure`
  width: 165px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SearchBox = styled.div`
  position: relative;
  input {
    width: 375px;
    height: 54px;
    border-radius: 25px;
    background: #d9d9d9;
    border: none;
    padding: 15px;
    font-size: 18px;
    :focus {
      outline: none;
    }
  }
  svg {
    font-size: 30px;
    position: relative;
    right: 50px;
    top: 10px;
  }
`;
const IconBox = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 30px;
    color: #d9d9d9;
  }
`;