import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiShoppingCartFill } from 'react-icons/ri'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";
import axios from "axios";

function SizeModel (props) {
    const { scale } = props;

    const [isChoose, setIsChoose] = useState(true);

    return(
        <>
        {isChoose ? (
            <Wrappler onClick={() => setIsChoose(false)}>{scale}</Wrappler>
        ) : (
            <ChooseWrappler onClick={() => setIsChoose(true)}>{scale}</ChooseWrappler>
        )}
        </>
        
    );
}

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
    }, [user_Token, navigate]);

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
            <Details>
                <p>{server_Response.name}</p>
                <h1>{server_Response.description}</h1>
                <Size>
                    <span>Tamanhos:</span>
                    {productSize.map(value => <SizeModel scale={value}/>)}
                </Size>
                <Size>
                    <span>Cores Disponíveis:</span>
                    <h3></h3><h4></h4><h5></h5><h6></h6>
                </Size>
            </Details>
            <Footer>
                <p>{server_Response.price}</p>
                <h2>Adicionar ao <RiShoppingCartFill/></h2>
            </Footer>
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

const Details = styled.div`
    height: 232px;
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
    p {
        width: 90%;
        font-size: 30px;
        font-weight: bold;
        margin: 10px 0 15px 0;
        color: #525284;
    }
    h1 {
        width: 90%;
        color: #9B9CB1;
    }
`;

const Size = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin: 25px 0 0 0;
    span {
        color: #C8C9CE;
    }
    h3 {
        width: 18px;
        height: 18px;
        border-radius: 50px;
        margin: 0 0 0 20px;
        background-color: #FBD343;
    }
    h4 {
        width: 18px;
        height: 18px;
        border-radius: 50px;
        margin: 0 0 0 20px;
        background-color: #F25B5A;
    }
    h5 {
        width: 18px;
        height: 18px;
        border-radius: 50px;
        margin: 0 0 0 20px;
        background-color: #F7A4DC;
    }
    h6 {
        width: 18px;
        height: 18px;
        border-radius: 50px;
        margin: 0 0 0 20px;
        background-color: #6DA2FE;
    }
`;

const Wrappler = styled.div`
    width: 40px;
    height: 25px;
    border-radius: 10px;
    margin: 0 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
`;

const ChooseWrappler = styled.div`
    width: 40px;
    height: 25px;
    border-radius: 10px;
    margin: 0 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9EDDF5;
`;

const Footer = styled.div`
    height: 100px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    p {
        font-size: 30px;
        font-weight: bold;
        font-family: 'PT Sans', sans-serif;
    }
    h2 {
        width: 140px;
        height: 40px;
        border-radius: 20px;
        font-size: 15px;
        font-family: 'PT Sans', sans-serif;
        color: #4D4D9A;
        background-color: #F7F7F2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        box-sizing: border-box;
    }
`;