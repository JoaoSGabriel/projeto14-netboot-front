import styled from "styled-components";
import tenis from "../../assets/tenisNike.jpg";
import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Product({
  id,
  name,
  price,
  brand,
  description,
  size,
  balance,
  setBalance,
  URLimage,
}) {
  const [increment, setIncrement] = useState(1);

  function add() {
    if (increment >= 0) {
      setIncrement(increment + 1);
      setBalance(balance + price);
    }
  }

  function sub() {
    if (increment !== 0) {
      setIncrement(increment - 1);
      setBalance(balance - price);
    }
  }
  return (
    <Wrapper>
      <section>
        <img src={tenis} alt="tênis" />
        <BoxTitle>
          <Title>{name}</Title>
          <Price>R$ {price.toFixed(2)}</Price>
          <Description>{description}</Description>
        </BoxTitle>
      </section>
      <BoxIncrement>
        <li>
          <AiFillMinusCircle onClick={sub} />
        </li>
        <li> {increment}</li>
        <li>
          <AiFillPlusCircle onClick={add} />
        </li>
      </BoxIncrement>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 15px;
  width: 350px;
  background-color: white;
  border-radius: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 18px;
  color: black;
`;

const Price = styled.p`
  font-size: 18px;
  color: blue;
`;

const BoxIncrement = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: #480ca8;
  font-size: 23px;

  li:nth-child(1) {
    cursor: pointer;
  }

  li:nth-child(2) {
    font-size: 14px;
  }

  li:nth-child(3) {
    cursor: pointer;
  }
`;

const Description = styled.div`
  font-size: 10px;
`;
