import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import ProductFooter from "./ProductFooter";
import PorductDetails from "./ProductDetails";

export default function ProductPage () {
    const navigate = useNavigate();
    const params = useParams();
    const { user_Token } = useContext(UserContext);
    
    const [server_Response, setServer_Response] = useState([]);
    const [productSize, setProductSize] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/products/${params.id}`, {
            headers: {
                Authorization: `Bearer ${user_Token}`
            }
        });

        promisse.then((res) => {
            setServer_Response(res.data);
            setProductSize(res.data.sizes);
        }).catch();
    }, [user_Token, navigate, params.id]);

    function back () {
        navigate('/Home');
    }

    return(
        <Screen>
            <Navbar>
                <BiArrowBack onClick={back}/>
                <p><strong>Net</strong>Boot</p>
                <AiOutlineHeart/>
            </Navbar>
            <Photo><img src={server_Response.URLimage} alt="product big"/></Photo>
            <PorductDetails name={server_Response.name} description={server_Response.description} productSize={productSize}/>
            <ProductFooter id={server_Response._id} price={server_Response.price}/>
        </Screen>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FFFFFF;
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

const Photo = styled.div`
    height: 280px;
    margin: 15px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 260px;
        height: 260px;
    }
`;