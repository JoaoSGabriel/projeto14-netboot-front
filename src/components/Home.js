import styled from "styled-components";
import axios from "axios";
import { GrAppsRounded, GrFormSearch } from 'react-icons/gr'
import { RiHomeSmileFill, RiHeartFill, RiDraftFill, RiShoppingCartFill, RiUserFill } from 'react-icons/ri';
import { IoHeartOutline } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";

function Product (props) {
    const navigate = useNavigate();
    const { name, price, URL, id } = props

    function seeProduct() {
        navigate(`/Product/${id}`)
    }

    return(
        <Products onClick={seeProduct}>
            <span><IoHeartOutline/></span>
            <img src={URL} alt='tenis'/>
            <p>{name}</p>
            <h1>{price}</h1>
        </Products>
    );
}

export default function Home() {
    const navigate = useNavigate();
    const { user_Token } = useContext(UserContext);

    const [server_Products, setServer_Products] = useState([]);

    useEffect(() => {
        const promisse = axios.get('http://localhost:5000/products', {
            headers: {
                Authorization: `Bearer ${user_Token}`
            }
        });

        promisse.then((res) => {
            setServer_Products(res.data);
        }).catch(() => {
            navigate('/');
        });

    }, [user_Token, navigate]);

    return(
        <Screen>
            <Navbar>
                <GrAppsRounded />
                <p><strong>Net</strong>Boot</p>
                <GrFormSearch />
            </Navbar>
            <Textbar>
                <p>Nossos produtos</p>
                <h1>sort by</h1>
            </Textbar>
            <Listproducts>
                {server_Products.map(value => <Product name={value.name} price={value.price} URL={value.URLimage} id={value._id} />)}
            </Listproducts>
            <Footer>
                <strong><RiHomeSmileFill/></strong>
                <RiHeartFill/>
                <strong><RiShoppingCartFill/></strong>
                <RiDraftFill/>
                <RiUserFill/>
            </Footer>
        </Screen>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #F7F7F7;
`;

const Navbar = styled.div`
    padding: 15px 5% 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-family: 'PT Sans', sans-serif;
    p {
        color: #4CC9F0;
    }
    strong {
        color: #560BAD;
    }
`;

const Textbar = styled.div`
    padding: 30px 5% 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
    p {
        font-size: 20px;
        font-weight: bold;
    }
    h1 {
        font-weight: bold;
        color: #AFAFB7;
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

const Products = styled.div`
    background-color: #FFFFFF;
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
        color: #8B8DA0;
        margin: 10px 0 0 0;
        text-align: center;
    }
    h1 {
        font-weight: bold;
        font-size: 20px;
        color: #8383BC;
        margin: 10px 0 0 0;
    }
`;

const Footer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    font-size: 20px;
    color: #B8B8C7;
    background-color: #FFFFFF;
    strong {
        color: #3E44AA;
    }
`;