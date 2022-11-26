import { useContext } from "react";
import styled from "styled-components";
import StatesContext from "../../providers/StatesContext";

const BlackScreen = () => {
  const { setShowResult } = useContext(StatesContext);
  return <Container onClick={() => setShowResult(false)}></Container>;
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  top: 0;
  z-index: 2;
`;

export default BlackScreen;
