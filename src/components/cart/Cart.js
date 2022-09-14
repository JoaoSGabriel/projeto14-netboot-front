import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  return (
    <Wrapper>
      <Header>
        <IoArrowBackSharp />
        <Title>My Cart</Title>
        <FaTrash />
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 375px;
  background-color: #e5e5e5;

  font-size: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: black;
`;
