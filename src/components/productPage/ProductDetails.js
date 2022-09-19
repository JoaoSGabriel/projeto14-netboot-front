import { useEffect, useState } from "react";
import styled from "styled-components";

function SizeModel (props) {
    const { scale, setChooseSize, chooseSize } = props;
    const [isChoose, setIsChoose] = useState(false);

    useEffect(() => {
        if (scale === chooseSize){
            setIsChoose(true);
        } else {
            setIsChoose(false);
        }
    }, [chooseSize]);

    function selectSize () {
        setChooseSize(scale);
    }

    return(
        <>
        {isChoose ? (
            <ChooseWrappler>{scale}</ChooseWrappler>
        ) : (
            <Wrappler onClick={selectSize}>{scale}</Wrappler>
        )}
        </>
    );
}

export default function PorductDetails (props) {
    const { name, description, productSize, chooseSize, setChooseSize } = props;

    return(
        <Details>
            <p>{name}</p>
            <h1>{description}</h1>
            <Size>
                <span>Tamanhos:</span>
                {productSize.map((value, index) => <SizeModel key={index} scale={value} setChooseSize={setChooseSize} chooseSize={chooseSize}/>)}
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