import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function CartFooter({ balance }) {
  const navigate = useNavigate();

  function buy() {
    navigate("/Checkout");
  }
  return (
    <Wrapper>
      <p>$ {balance.toFixed(2)}</p>
      <button onClick={buy}>Finalizar compra</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 90px;
  /* background-color: #3a0ca3; */
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-weight: 700;
    /* color: #4cc9f0; */
    color: black;
  }
  button {
    cursor: pointer;
    width: 130px;
    height: 40px;
    /* background-color: #4cc9f0; */
    background-color: black;
    color: white;
    font-weight: 700;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px black;
  }
`;
