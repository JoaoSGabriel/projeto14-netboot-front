import styled from "styled-components";
import HomeProduct from "./HomeProduct";
import HomeFooter from "./HomeFooter";
import { GrFormSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { getProducts } from "../../services/APIs";

export default function HomeFavorite () {
    const navigate = useNavigate();
    const { user_Token, user_ID } = useContext(UserContext);

    const [server_Products, setServer_Products] = useState([]);

    useEffect(() => {
        const config = {
          headers: {
            Authorization: `Bearer ${user_Token}`,
          }
        };
        
        getProducts(config).then((res) => {
            const products = res.data.filter(value => value.favorite[0] === user_ID)
            setServer_Products(products);
          }).catch();
    }, [user_Token, navigate, user_ID]);

    return (
        <Screen>
          <Navbar>
            <p>
              <strong>Net</strong>Boot
            </p>
            <GrFormSearch />
          </Navbar>
          <Textbar>
            <p>Nossos produtos</p>
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
    width: 100vw;
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