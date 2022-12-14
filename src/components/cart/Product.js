import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import {
  removeCartProduct,
  getCartProducts,
  updateQt,
} from "../../services/APIs";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Product({
  id,
  name,
  price,
  brand,
  description,
  size,
  URLimage,
  balance,
  setBalance,
  setCart,
}) {
  const [increment, setIncrement] = useState(1);
  if (increment === 0) {
    setIncrement(increment + 1);
  }

  const { user_Token, user_ID } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user_Token}`,
    },
  };

  function add() {
    if (increment >= 1) {
      setIncrement(increment + 1);
      setBalance(Number(balance) + Number(price));
      const bodyEmpty = {};
      updateQt("add", id, bodyEmpty, config)
        .then()
        .catch();
    }
  }

  function sub() {
    if (increment > 1) {
      setIncrement(increment - 1);
      setBalance(Number(balance) + Number(price));

      const bodyEmpty = {};
      updateQt("sub", id, bodyEmpty, config)
        .then()
        .catch((error) => {
          console.log(error);
        });
    } else if (increment === 1) {
      setBalance(Number(balance) + Number(price));

      removeCartProduct(id, config)
        .then((res) => {
          getCartProducts(user_ID, config)
            .then((res) => {
              setCart([...res.data]);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  return (
    <Wrapper>
      <section>
        <img src={URLimage} alt="tênis" />
        <BoxTitle>
          <Title>{name}</Title>
          <section>
            <Price>R$ {price}</Price>
            <Size>N° {size} </Size>
          </section>
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

  section {
    justify-content: space-between;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: blue;
`;

const Size = styled.p`
  font-size: 10px;
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
