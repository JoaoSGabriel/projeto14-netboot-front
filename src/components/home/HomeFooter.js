import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiHomeSmileFill, RiHeartFill, RiDraftFill, RiShoppingCartFill, RiUserFill } from 'react-icons/ri';

export default function HomeFooter () {
    const navigate = useNavigate();

    function goCart() {
        navigate('/Cart');
    }

    function goHome() {
        navigate('/Home');
    }

    function goFavorits() {
        navigate('/Home/Favoritos');
    }

    function goDraft () {
        navigate('/Draft');
    }

    function goProfile() {
        navigate('/Profile');
    }

    return(
        <Footer>
            <strong><RiHomeSmileFill onClick={goHome}/></strong>
            <RiHeartFill onClick={goFavorits}/>
            <RiShoppingCartFill onClick={goCart}/>
            <RiDraftFill onClick={goDraft}/>
            <RiUserFill onClick={goProfile}/>
        </Footer>
    );
}

const Footer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  font-size: 20px;
  color: #B8B8C7;
  background-color: #ffffff;
  strong {
      color: #3E44AA;
  }
`;