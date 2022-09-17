import styled from 'styled-components';
import { RiShoppingCartFill } from 'react-icons/ri'

export default function ProductFooter(props) {
    const {price, id} = props;

    function addCart() {
        console.log(id);
    }

    return(
        <Footer>
            <p>{price}</p>
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