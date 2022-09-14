import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp() {
    const navigate = useNavigate();

    const [able, setAble] = useState(false);
    const [create_name, setCreate_name] = useState('');
    const [create_email, setCreate_email] = useState('');
    const [create_password, setCreate_password] = useState('');
    const [create_repeatPassword, setCreate_repeatPassword] = useState('');

    function createAccount (e) {
        e.preventDefault();
        setAble(true);

        if (create_password !== create_repeatPassword) {
            alert('Ops! É necessário que a senhas criadas sejam iguais!');
            return;
        }

        const data_Create = {
            name: create_name,
            email: create_email,
            password: create_password
        }
    
        const promisse = axios.post("http://localhost:5000/sign-up", data_Create);
    
        promisse.then(() => {
            setCreate_name('');
            setCreate_email('');
            setCreate_password('');
            setCreate_repeatPassword('');
            navigate('/');
        }).catch(() => {
            setCreate_name('');
            setCreate_email('');
            setCreate_password('');
            setCreate_repeatPassword('');
            alert('Ops! Parece que algo deu errado com a sua requisição.');
            setAble(false);
        });
    }

    return(
        <Screen>
            <Title>NetBoot</Title>
            <PageForm>
                <form onSubmit={createAccount}>
                    <Input type="text" placeholder="   Nome" onChange={e => setCreate_name(e.target.value)} value={create_name} required readyOnly={able}></Input>
                    <Input type="email" placeholder="   E-mail" onChange={e => setCreate_email(e.target.value)} value={create_email} required readyOnly={able}></Input>
                    <Input type="password" placeholder="   Senha" onChange={e => setCreate_password(e.target.value)} value={create_password} required readyOnly={able}></Input>
                    <Input type="password" placeholder="   Confirme a senha" onChange={e => setCreate_repeatPassword(e.target.value)} value={create_repeatPassword} required readyOnly={able}></Input>
                    <button type="submit">Entrar</button>
                </form>
            </PageForm>
            <Link to="/"><Text>Já tem conta? Clique aqui!</Text></Link>
        </Screen>
    );
}

const Screen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #560BAD;
`;

const Title =  styled.div`
    font-family: '';
    font-weight: 400;
    font-size: 32px;
    line-height: 50.37px;
    color: #4CC9F0;
    text-align: center;
    padding: 159px 0 24px 0;
`;

const PageForm = styled.div`
    width: 100%;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        width: 85%;
        height: 46px;
        border-radius: 5px;
        border: none;
        background-color: #B5179E;
        font-family: '';
        font-weight: 700;
        font-size: 20px;
        line-height: 23.48px;
        color: #FFFFFF;
    }
`;

const Input = styled.input`
    width: 85%;
    height: 45px;
    margin: 0 0 13px 0;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: '';
    font-weight: 400;
    font-size: 20px;
    line-height: 23.48px;
    color: #000000;
    :focus {
        outline: 0;
    }
`;

const Text = styled.div`
    margin: 36px 0 0 0;
    font-family: '';
    font-weight: 700;
    font-size: 15px;
    line-height: 17.61px;
    color: #4CC9F0;
    text-align: center;
`;