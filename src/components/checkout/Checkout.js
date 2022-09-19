import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import { getCartProducts, getUser, postCheckout } from "../../services/APIs";
import Input from "./Input";

import { IoArrowBackSharp } from "react-icons/io5";
import { ThreeDots } from "react-loader-spinner";

export default function Checkout() {
  const navigate = useNavigate();
  const { user_Token, user_ID } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user_Token}`,
    },
  };

  // ADRESS DATA
  const [country, setCountry] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [adressNumber, setAdressNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // BANK DATA
  const [numberCard, setNumberCard] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("22");
  const [cvv, setCvv] = useState("");

  function done(e) {
    e.preventDefault();

    const adressData = {
      country,
      numberPhone,
      cep,
      adress,
      adressNumber,
      complement,
      district,
      city,
      state,
    };

    const bankData = {
      numberCard,
      name,
      date: `${month}/${year}`,
      cvv,
    };

    getUser(user_ID, config)
      .then((res) => {
        const user = {
          name: res.data.name,
          email: res.data.email,
        };

        getCartProducts(user_ID, config)
          .then((res) => {
            const cart = res.data;

            const body = {
              user,
              cart,
              adressData,
              bankData,
            };

            postCheckout(body, config)
              .then((res) => {
                navigate(`/EndLine/${res.data._id}`);
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function backHome() {
    navigate("/Home");
  }

  if (!user_Token) {
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
          <Title>Checkout</Title>
        </li>
        <li></li>
      </Header>

      <Main onSubmit={done}>
        <Subtitle>Dados de envio</Subtitle>
        <Adress>
          <Input
            type="text"
            placeholder="Endereço"
            setValue={setAdress}
          ></Input>
          <Input
            type="number"
            placeholder="Número do endereço"
            setValue={setAdressNumber}
          ></Input>
          <Input type="number" placeholder="Cep" setValue={setCep}></Input>
          <Input
            type="text"
            placeholder="Complemento"
            setValue={setComplement}
            notRequired={true}
          ></Input>
          <Input type="text" placeholder="País" setValue={setCountry}></Input>
          <Input
            type="text"
            placeholder="Bairro"
            setValue={setDistrict}
          ></Input>
          <Input type="text" placeholder="Cidade" setValue={setCity}></Input>
          <Input type="text" placeholder="Estado" setValue={setState}></Input>
          <Input
            type="number"
            placeholder="Número de telefone"
            setValue={setNumberPhone}
          ></Input>
        </Adress>

        <Subtitle>Dados bancários</Subtitle>
        <Bank>
          <Input
            type="number"
            placeholder="Número do cartão"
            setValue={setNumberCard}
          ></Input>
          <Input
            type="text"
            placeholder="Nome no cartão"
            setValue={setName}
          ></Input>
          <Input
            type="date"
            placeholder="Validade"
            setMonth={setMonth}
            setYear={setYear}
          ></Input>
          <Input type="number" placeholder="CVV" setValue={setCvv}></Input>
        </Bank>
        <Footer>
          <Button type="submit">Finalizar compra</Button>
        </Footer>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 375px;
  background-color: #e5e5e5;
`;

const Header = styled.ul`
  height: 80px;
  padding: 10px;
  background: white;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);

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
  }
  li:nth-child(2) {
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const Main = styled.form`
  padding: 100px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  text-align: center;
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Bank = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Footer = styled.div`
  height: 80px;
  background-color: white;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 10px;

  background-color: black;
  color: white;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
`;

const WrapperDots = styled.ul`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
