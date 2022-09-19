import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeartCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function HomeProduct (props) {
    const navigate = useNavigate();
    const { name, price, URL, id, favorite } = props;
    const {user_ID} = useContext(UserContext);

    const [isFavorit, setIsFavorit] = useState(false);

    function seeProduct() {
        navigate(`/Product/${id}`);
    }
    
    useEffect(() => {
      favorite.forEach(value => {
        if (value === user_ID) {
          setIsFavorit(true);
        }
      });
    }, [user_ID, favorite])

    return(
        <Products onClick={seeProduct}>
            {isFavorit ? (
            <span><IoHeartCircleSharp style={{color: 'red'}}/></span>) : (
            <span><IoHeartOutline/></span>)}
            <img src={URL} alt="tenis" />
            <p>{name}</p>
            <h1>R$ {price.replace('.', ',')}</h1>
        </Products>
    );
}

const Products = styled.div`
  background-color: #ffffff;
  margin: 0 0 15px 0;
  height: 200px;
  width: 152px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
  img {
    width: 100px;
    height: 100px;
  }
  span {
    padding: 10px;
    width: 80%;
    text-align: end;
  }
  p {
    font-size: 15px;
    color: #8b8da0;
    margin: 10px 0 0 0;
  }
  h1 {
    font-size: 20px;
    color: #8383bc;
    margin: 10px 0 0 0;
  }
`;