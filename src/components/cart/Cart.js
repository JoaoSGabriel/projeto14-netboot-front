import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  return (
    <Wrapper>
      <Header>
        <li>
          <IoArrowBackSharp />
        </li>
        <li>
          <Title>My Cart</Title>
        </li>
        <li>
          <FaTrash />
        </li>
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

const Header = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  background-color: white;

  li:nth-child(1) {
    font-size: 23px;
    transform: translateY(1.5px);
  }
  li:nth-child(3) {
    font-size: 18px;
    transform: translateY(1.5px);
    color: gray;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: black;
`;
