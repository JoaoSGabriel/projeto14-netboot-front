import styled from "styled-components";

export default function ProductCheckout({ name, price, size, brand, qt }) {
  return (
    <Wrapper>
      <div>Nome: {name}</div>
      <div>Preço: {price}</div>
      <div>Tamanho: {size}</div>
      <div>Marca: {brand}</div>
      <div>Quantidade: {qt}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: min-content;
  padding: 10px;

  border-radius: 10px;

  background-color: rgba(245, 245, 245, 1);

  div {
    padding: 5px;
  }
`;
