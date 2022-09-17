import styled from "styled-components";
import axios from "axios";
import { GrAppsRounded, GrFormSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import HomeProduct from "./HomeProduct";
import HomeFooter from "./HomeFooter";

export default function Home() {
  const navigate = useNavigate();
  const { user_Token } = useContext(UserContext);

  const [server_Products, setServer_Products] = useState([]);

  useEffect(() => {
    const promisse = axios.get("http://localhost:5000/products", {
      headers: {
        Authorization: `Bearer ${user_Token}`,
      },
    });

    promisse
      .then((res) => {
        setServer_Products(res.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, [user_Token, navigate]);

  return (
    <Screen>
      <Navbar>
        <GrAppsRounded />
        <p>
          <strong>Net</strong>Boot
        </p>
        <GrFormSearch />
      </Navbar>
      <Textbar>
        <p>Nossos produtos</p>
        <h1>sort by</h1>
      </Textbar>
      <Listproducts>
        {server_Products.map(value => (
          <HomeProduct
            name={value.name}
            price={value.price}
            URL={value.URLimage}
            id={value._id}
            favorite={value.favorite}
          />
        ))}
      </Listproducts>
      <HomeFooter/>
    </Screen>
  );
}

const Screen = styled.div`
  width: 375px;
  height: 667px;
  background-color: #f7f7f7;
`;

const Navbar = styled.div`
  padding: 15px 5% 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-family: 'PT Sans', sans-serif;
  p {
    color: #4cc9f0;
  }
  strong {
    color: #560bad;
  }
`;

const Textbar = styled.div`
  padding: 30px 5% 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: bold;
  }
  h1 {
    font-weight: bold;
    color: #afafb7;
  }
`;

const Listproducts = styled.div`
  width: 90%;
  height: 476px;
  margin: 40px 5% 0 5%;
  overflow-y: scroll;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;