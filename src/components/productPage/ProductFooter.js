import styled from 'styled-components';
import { RiShoppingCartFill } from 'react-icons/ri'
import { addCartProduct } from '../../services/APIs';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function ProductFooter(props) {
    const {server_Response, chooseSize} = props;
    const { user_Token, user_ID } = useContext(UserContext);

    const navigate = useNavigate();

    function addCart() {
        const config = {
            headers: {
              Authorization: `Bearer ${user_Token}`,
            }
        };

        const product = {
            user_ID: user_ID,
            product_ID: server_Response._id,
            name: server_Response.name,
            price: server_Response.price,
            brand:server_Response.brand,
            description: server_Response.description,
            size: chooseSize,
            URLimage: server_Response.URLimage,
            qt: 1
        }

        addCartProduct(product, config)
          .then(() => {
            navigate('/Home');
          }).catch();
    }

    return(
        <Footer>
            <p>R$ {server_Response.price}</p>
            <h2 onClick={addCart}>Adicionar ao <RiShoppingCartFill/></h2>
        </Footer>
    );
}

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