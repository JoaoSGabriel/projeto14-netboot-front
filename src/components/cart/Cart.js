import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

import Product from "./Product";
import Footer from "./CartFooter";

import UserContext from "../contexts/UserContext";
import { getCartProducts, cleanCart } from "../../services/APIs";
import axios from "axios";

export default function Cart() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [cart, setCart] = useState(null);
  const { user_Token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${"8aefebb4-de1f-43ec-92c9-e298be77defd"}`,
    },
  };

  if (Math.sign(balance) === -1) {
    setBalance(balance * -1);
  }

  useEffect(() => {
    getCartProducts(config)
      .then((res) => {
        setCart([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let somatorio = 0;
    if (cart !== null) {
      cart.forEach((item) => (somatorio += Number(item.price)));
      setBalance(somatorio);
    }
  }, [cart]);

  function backHome() {
    navigate("/Home");
  }

  function clean() {
    cleanCart(config)
      .then(() => {
        getCartProducts(config)
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

  if (cart === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Wrapper>
      <Header>
        <li>
          <IoArrowBackSharp onClick={backHome} />
        </li>
        <li>
          <Title>Carrinho</Title>
          <BsFillCartFill />
        </li>
        <li>
          <FaTrash onClick={clean} />
        </li>
      </Header>

      {cart.length === 0 ? (
        <DataEmpty>O carrinho está vazio...</DataEmpty>
      ) : (
        <BoxProducts>
          {cart.map((item) => (
            <Product
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              brand={item.brand}
              description={item.description}
              size={item.sizes}
              URLimage={item.URLimage}
              balance={balance}
              setBalance={setBalance}
              setCart={setCart}
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

  li:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #4cc9f0;
  }

  li:nth-child(3) {
    font-size: 18px;
    transform: translateY(2.9px);
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
