import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";

import Product from "./Product";
import Footer from "./CartFooter";

import UserContext from "../contexts/UserContext";
import { getCartProducts, cleanCart } from "../../services/APIs";

export default function Cart() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [cart, setCart] = useState(null);
  const { user_Token, user_ID } = useContext(UserContext);

  function defineBalance(cart, balance) {
    if (cart !== null && cart.length !== 0 && balance === 0) {
      let somatorio = 0;
      cart.forEach((item) => (somatorio += Number(item.price)));
      setBalance(somatorio);
    }
  }
  function adjustSignOfBalance() {
    if (Math.sign(balance) === -1) {
      setBalance(balance * -1);
    }
  }

  defineBalance(cart, balance);
  adjustSignOfBalance();

  const config = {
    headers: {
      Authorization: `Bearer ${user_Token}`,
    },
  };

  // const id = "63238f143a42bdf67bf6dafa";

  useEffect(() => {
    getCartProducts(user_ID, config)
      .then((res) => {
        setCart([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function backHome() {
    navigate("/Home");
  }

  function clean() {
    cleanCart(config)
      .then(() => {
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

  if (cart === null) {
    return (
      <WrapperDots>
        <li>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </li>
      </WrapperDots>
    );
  }

  return (
    <Wrapper>
      <Header>
        <li>
          <IoArrowBackSharp onClick={backHome} />
        </li>
        <li>
          <Title>Carrinho</Title>
          <BsCartFill />
        </li>
        <li>
          <FaTrash onClick={clean} />
        </li>
      </Header>

      {cart.length === 0 ? (
        <DataEmpty>O carrinho está vazio...</DataEmpty>
      ) : (
        <BoxProducts>
          {cart.map((item, index) => (
            <Product
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              brand={item.brand}
              description={item.description}
              size={item.size}
              URLimage={item.URLimage}
              balance={balance}
              setBalance={setBalance}
              setCart={setCart}
            />
          ))}
        </BoxProducts>
      )}

      <Footer balance={cart.length !== 0 ? balance : 0} />
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

const WrapperDots = styled.ul`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 90px;
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
  font-family: "Anton";
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
