import { useState } from "react";
import styled from "styled-components";

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

export default function PorductDetails (props) {
    const { name, description, productSize } = props;

    return(
        <Details>
            <p>{name}</p>
            <h1>{description}</h1>
            <Size>
                <span>Tamanhos:</span>
                {productSize.map(value => <SizeModel scale={value}/>)}
            </Size>
            <Colors>
                <span>Cores Disponíveis:</span>
                <div></div><div></div><div></div><div></div>
            </Colors>
        </Details>
    );
}

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
`;

const Colors = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin: 25px 0 0 0;
    span {
        color: #C8C9CE;
    }
    > div {
        width: 18px;
        height: 18px;
        border-radius: 50px;
        margin: 0 0 0 20px;
        background-color: #FBD343;
    }
    div:nth-child(2) {
        background-color: #F25B5A;
    }
    div:nth-child(3) {
        background-color: #F7A4DC;
    }
    div:nth-child(4) {
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