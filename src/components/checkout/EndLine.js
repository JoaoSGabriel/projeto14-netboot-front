import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getCheckout } from "../../services/APIs";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import ProductCheckout from "./ProductCheckout.js";

export default function EndLine() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [checkout, setCheckout] = useState(null);
  const { user_Token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user_Token}`,
    },
  };

  useEffect(() => {
    getCheckout(id, config)
      .then((res) => {
        setCheckout(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function setBalance() {
    let somatorio = 0;
    if (checkout !== null) {
      checkout.cart.forEach((item) => {
        somatorio += item.price * item.qt;
      });
    }

    return somatorio;
  }

  let balance = setBalance();

  function backHome() {
    navigate("/Home");
  }

  if (checkout === null) {
    return <></>;
  }

  return (
    <Screen>
      <Header>
        <li>
          <IoArrowBackSharp onClick={backHome} />
        </li>
        <li>Dados da compra</li>
        <li></li>
      </Header>

      <Checkout>
        <User>
          <h2>Usuário</h2>
          <li>Nome: {checkout.user.name}</li>
          <li>Email: {checkout.user.email}</li>
        </User>
        <Adress>
          <h2>Dados de envio</h2>
          <li>País: {checkout.adressData.country}</li>
          <li>Estado: {checkout.adressData.state}</li>
          <li>Cidade: {checkout.adressData.city}</li>
          <li>Endereço: {checkout.adressData.adress}</li>
          <li>Número do endereço: {checkout.adressData.adressNumber}</li>
          <li>Complemento: {checkout.adressData.complement}</li>
          <li>CEP: {checkout.adressData.cep}</li>
          <li>Bairro: {checkout.adressData.district}</li>
        </Adress>
        <Bank>
          <h2>Dados bancários</h2>
          <li>Cartão: {checkout.bankData.numberCard}</li>
          <li>Nome: {checkout.bankData.name}</li>
          <li>Validade: {checkout.bankData.date}</li>
          <li>Cvv: {checkout.bankData.cvv}</li>
        </Bank>

        <Products>
          <h2>Produtos</h2>

          {checkout.cart.map((item) => (
            <ProductCheckout
              name={item.name}
              price={item.price}
              size={item.size}
              brand={item.brand}
              qt={item.qt}
            ></ProductCheckout>
          ))}

          <Balance>Total: R$ {balance.toFixed(2)}</Balance>
        </Products>
      </Checkout>
    </Screen>
  );
}

const Screen = styled.div`
  height: 100vh;
  width: 375px;
  background-color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Header = styled.ul`
  height: 80px;
  padding: 10px;
  background: white;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);

  font-size: 20px;
  font-weight: 700;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  li:nth-child(1) {
    font-size: 23px;
    transform: translateY(1.8px);
    color: black;
  }
  li:nth-child(2) {
    font-size: 30px;
    color: black;

    font-weight: 700;
    font-family: "Anton";
  }
`;

const Checkout = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const User = styled.ul`
  height: min-content;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }
  li {
    background-color: rgba(240, 240, 240, 1);
    border-radius: 10px;
    padding: 5px;
  }
`;
const Adress = styled.ul`
  height: min-content;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }

  li {
    background-color: rgba(240, 240, 240, 1);
    border-radius: 10px;
    padding: 5px;
  }
`;
const Bank = styled.ul`
  height: min-content;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }

  li {
    background-color: rgba(240, 240, 240, 1);
    border-radius: 10px;
    padding: 5px;
  }
`;

const Products = styled.ul`
  height: min-content;
  width: 330px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }

  li {
    background-color: rgba(240, 240, 240, 1);
    border-radius: 10px;
    padding: 5px;
  }
`;

const Balance = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: end;
`;
