import styled from "styled-components";
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'

function SizeModel (props) {
    const { scale } = props;

    return(
        <Wrappler>
            <h6>{scale}</h6>
        </Wrappler>
    );
}

export default function ProductPage () {

    const produto = {name: 'Nike Air Max 20', price: 'R$ 290,00', description:'Esse tênis é muito foda cara', sizes:[39, 40, 41, 42, 43], URLimage:'https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg'}

    return(
        <Screen>
            <Navbar>
                <BiArrowBack/>
                <p><strong>Net</strong>Boot</p>
                <AiOutlineHeart/>
            </Navbar>
            <Photo><img src={produto.URLimage} alt="product big"/></Photo>
            <Details>
                <p>{produto.name}</p>
                <h1>{produto.description}</h1>
                <Size>
                    <span>Size:</span>
                    {produto.sizes.map(value => <SizeModel scale={value}/>)}
                </Size>
            </Details>
            <Footer></Footer>
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
    p {
        color: #4CC9F0;
    }
    strong {
        color: #560BAD;
    }
`;

const Photo = styled.div`
    height: 250px;
    margin: 15px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 240px;
    }
`;

const Details = styled.div`
    width: 90%;
    height: 200px;
    background-color: #F5F5F6;
    margin: 0 auto;
    p {
        font-size: 30px;
        margin: 10px 0 15px 0;
        color: #525284;
    }
    h1 {
        color: #9B9CB1;
    }
`;

const Size = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin: 25px 0 0 0;
    span {
        color: #DBDBE4;
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
    background-color: aqua;
    h6 {

    }
`;

const Footer = styled.div`
    height: 160px;
    background-color: aqua;
`;