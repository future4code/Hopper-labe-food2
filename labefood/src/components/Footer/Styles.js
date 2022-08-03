import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const Order = styled.div`
  display: ${({disp}) => disp};
  padding: 1.5em;
  background-color: #5cb646;
  align-items: center;
`;

export const IMG = styled.div`
  width: 25%;
  img{
    width: 3em;
  }
`;

export const OrderInfo = styled.div`
  width: 75%;
  p{
    font-weight: bold;
    line-height: 1.5em;
  }
  p:nth-child(1){
    color: #FFF;
    font-weight: 400;
  }
`;

export const Btns = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-top: 1px solid #B8B8B8;
  padding: .5em;
`;

export const Icons = styled.button`
  width: 20%;
  object-fit: contain;
  border: none;
  outline: none;
  background-color: #FFF;
  ${({idx}) => (`&:nth-child(${idx}){svg{fill: #5CB646}}`)}
`;
