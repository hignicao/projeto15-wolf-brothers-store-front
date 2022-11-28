import styled from "styled-components";
import Button from "../Button/Button";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <Container>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            width={"50px"}
            height={"50px"}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        ))}
      </Container>
    </nav>
  );
};

const Container = styled.ul`
  display: flex;
  button {
    margin-right: 5px;
    :hover {
      background-color: white;
      color: black;
      font-weight: bold;
    }
  }
`;

export default Pagination;
