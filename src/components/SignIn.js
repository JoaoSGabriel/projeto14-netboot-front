import styled from "styled-components";

export default function SignIn() {
    return(
        <Screen>
            <Title>NetBoot</Title>
        </Screen>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #D1EFF7;
`;

const Title = styled.div`
    padding: 20px 0 0 0;
    text-align: center;
`;