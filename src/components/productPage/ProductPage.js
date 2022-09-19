import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi'
import { IoHeartOutline, IoHeartCircleSharp } from 'react-icons/io5'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import ProductFooter from "./ProductFooter";
import PorductDetails from "./ProductDetails";
import { addFavoriteProduct, getOneProducts, removeFavoriteProduct } from "../../services/APIs";

export default function ProductPage () {
    const navigate = useNavigate();
    const params = useParams();
    const { user_Token, user_ID } = useContext(UserContext);
    
    const [server_Response, setServer_Response] = useState([]);
    const [productSize, setProductSize] = useState([]);
    const [isFavorit, setIsFavorit] = useState(false);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        const config = {
            headers: {
              Authorization: `Bearer ${user_Token}`,
            }
        };
        
        getOneProducts(params.id, config).then((res) => {
            setServer_Response(res.data);
            setProductSize(res.data.sizes);
            if (res.data.favorite.length === 0) {
                setIsFavorit(false);
            } else {
                res.data.favorite.forEach(value => {
                    if (value === user_ID) {
                      setIsFavorit(true);
                    }
                    if (value !== user_ID) {
                      setIsFavorit(false);
                    }
                });
            }
        }).catch();
    }, [user_Token, user_ID, navigate, params.id, reload]);

    function back () {
        navigate('/Home');
    }
    
    function turnFavorite () {
        const config = {
            headers: {
              Authorization: `Bearer ${user_Token}`,
            }
        };

        addFavoriteProduct(server_Response._id, config)
          .then(() => {setReload(!reload)})
          .catch();
    }

    function dismissFavorit () {
        for (let i = 0; i < server_Response.favorite.length; i = i + 1) {
            if (server_Response.favorite[i] === user_ID) {
              server_Response.favorite.splice(i, 1);
            }
        }

        const body = {favorite: server_Response.favorite};
        const config = {
            headers: {
              Authorization: `Bearer ${user_Token}`,
            }
        };

        removeFavoriteProduct(server_Response._id, body, config)
          .then(() => {setReload(!reload)})
          .catch();
    }

    const [chooseSize, setChooseSize] = useState(40)

    return(
        <Screen>
            <Navbar>
                <BiArrowBack onClick={back}/>
                <p><strong>Net</strong>Boot</p>
                {isFavorit ? (
                <span><IoHeartCircleSharp onClick={dismissFavorit} style={{color: 'red'}}/></span>) : (
                <span><IoHeartOutline onClick={turnFavorite}/></span>)}
            </Navbar>
            <Photo><img src={server_Response.URLimage} alt="product big"/></Photo>
            <PorductDetails name={server_Response.name} description={server_Response.description} productSize={productSize} setChooseSize={setChooseSize}/>
            <ProductFooter server_Response={server_Response} price={server_Response.price} chooseSize={chooseSize}/>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100vw;
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