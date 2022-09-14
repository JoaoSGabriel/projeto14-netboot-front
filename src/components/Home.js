import styled from "styled-components";
import { GrAppsRounded, GrFormSearch } from 'react-icons/gr'
import { RiHomeSmileFill, RiHeartLine, RiDraftLine, RiShoppingCartFill } from 'react-icons/ri';
import { IoPersonOutline, IoHeartOutline } from 'react-icons/io5';

export default function Home() {
    //{ name, price, brand, sizes, description, URLimage }
    const produtos = [
        {name: 'Nike Air Max 20', price:'R$ 290,00', brand:'', sizes: [40, 41, 42, 43], description:'', URLimage:'https://imgcentauro-a.akamaihd.net/230x230/9714725G.jpg'}, 
        {name: 'Nike Air Max 20', price:'R$ 290,00', brand:'', sizes: [40, 41, 42, 43], description:'', URLimage:'https://60398.cdn.simplo7.net/static/60398/sku/masculino-tenis-qix-80-s-1617126891949.jpg'}, {name: 'Nike Air Max 20', price:'R$ 290,00', brand:'', sizes: [40, 41, 42, 43], description:'', URLimage:'https://images-americanas.b2w.io/produtos/4684478303/imagens/tenis-para-academia-masculino-bf-shoes/4684478557_1_large.jpg'} , {name: 'Nike Air Max 20', price:'R$ 290,00', brand:'', sizes: [40, 41, 42, 43], description:'', URLimage:'https://underarmourbr.vteximg.com.br/arquivos/ids/161224-1000-1000/3022587-104-44-1.jpg?v=637508668366400000'}, {name: 'Nike Air Max 20', price:'R$ 290,00', brand:'', sizes: [40, 41, 42, 43], description:'', URLimage:'https://fieroshop.vteximg.com.br/arquivos/ids/172882-500-500/tenis-knit-masculino-cinza-maleavel-.jpg?v=637835541402230000'}, {name: 'Nike Air Max 20', price:'R$ 290,00', brand:'', sizes: [40, 41, 42, 43], description:'', URLimage:'https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg'}
    ];

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
                {produtos.map((value, index) =>
                    <Products>
                        <span><IoHeartOutline/></span>
                        <img src={value.URLimage} alt='tenis'/>
                        <p>{value.name}</p>
                        <h1>{value.price}</h1>
                    </Products>
                )}
            </Listproducts>
            <Footer>
                <RiHomeSmileFill/>
                <RiHeartLine/>
                <RiShoppingCartFill/>
                <RiDraftLine/>
                <IoPersonOutline/>
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
    width: 45%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100px;
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
    }
    h1 {
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
    background-color: #FFFFFF;
`;