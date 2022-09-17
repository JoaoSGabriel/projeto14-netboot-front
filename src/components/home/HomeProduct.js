import { useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";

export default function HomeProduct (props) {
    const navigate = useNavigate();
    const { name, price, URL, id } = props;

    function seeProduct() {
        navigate(`/Product/${id}`);
    }

    return(
        <Products onClick={seeProduct}>
            <span><IoHeartOutline /></span>
            <img src={URL} alt="tenis" />
            <p>{name}</p>
            <h1>{price}</h1>
        </Products>
    );
}

const Products = styled.div`
  background-color: #ffffff;
  margin: 0 0 15px 0;
  height: 200px;
  width: 152px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
  img {
    width: 100px;
    height: 100px;
  }
  span {
    padding: 10px;
    width: 80%;
    text-align: end;
  }
  p {
    font-size: 15px;
    color: #8b8da0;
    margin: 10px 0 0 0;
  }
  h1 {
    font-size: 20px;
    color: #8383bc;
    margin: 10px 0 0 0;
  }
`;