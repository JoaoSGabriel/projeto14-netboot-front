import styled from "styled-components";

import { useState, useEffect, useContext } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

import Product from "./Product";
import Footer from "./CartFooter";

import UserContext from "../contexts/UserContext";
import { getCartProduct } from "../../services/APIs";

export default function Cart() {
  const [balance, setBalance] = useState(0);
  const [cart, setCart] = useState(null);

  if (Math.sign(balance) === -1) {
    setBalance(balance * -1);
  }

  const { user_Token } = useContext(UserContext);
  console.log(user_Token);
  useEffect(() => {
    // getCartProduct();
  }, []);

  const data = [
    {
      id: 1,
      name: "Nike 1.0",
      price: 199.9,
      size: 40,
      description: "Um tênis massa pra crl",
    },
    {
      id: 2,
      name: "Nike 2.0",
      price: 299.9,
      size: 41,
      description: "Um tênis massa da peste",
    },
    {
      id: 3,
      name: "Nike 3.0",
      price: 399.9,
      size: 42,
      description: "Um tênis massa pakas",
    },
    {
      id: 4,
      name: "Nike 4.0",
      price: 499.9,
      size: 43,
      description: "Um tênis massa demais",
    },
  ];

  useEffect(() => {
    let somatorio = 0;
    data.forEach((item) => (somatorio += item.price));
    setBalance(somatorio);
  }, []);

  return (
    <Wrapper>
      <Header>
        <li>
          <IoArrowBackSharp />
        </li>
        <li>
          <Title>Carrinho</Title>
        </li>
        <li>
          <FaTrash />
        </li>
      </Header>

      {data.length === 0 ? (
        <DataEmpty>O carrinho está vazio...</DataEmpty>
      ) : (
        <BoxProducts>
          {data.map((item) => (
            <Product
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              size={item.size}
              balance={balance}
              setBalance={setBalance}
            />
          ))}
        </BoxProducts>
      )}

      <Footer balance={balance} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 375px;
  background-color: #e5e5e5;

  font-size: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 15%;
  padding: 15px;
  background-color: #3a0ca3;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  li:nth-child(1) {
    font-size: 23px;
    transform: translateY(1.8px);
    color: #4cc9f0;
  }
  li:nth-child(3) {
    font-size: 18px;
    transform: translateY(1.2px);
    color: #4cc9f0;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  color: #4cc9f0;
  font-weight: 700;
`;

const BoxProducts = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const DataEmpty = styled.div`
  padding-top: 140px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: gray;
`;
