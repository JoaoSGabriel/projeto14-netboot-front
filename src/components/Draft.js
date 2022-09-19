import styled from "styled-components";
import HomeFooter from "./home/HomeFooter";

export default function Draft() {
    return(
        <Screen>
            <Title>EM BREVE...</Title>
            <HomeFooter/>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100vw;
    height: 667px;
    background-color: #560BAD;
`;

const Title =  styled.div`
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 50.37px;
    color: #4CC9F0;
    text-align: center;
    padding: 159px 0 24px 0;
`;