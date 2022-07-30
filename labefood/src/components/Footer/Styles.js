import styled from "styled-components";

export const Btns = styled.div`
  position: fixed;
  width: 100%;
  height: 10vh;
  bottom: 0;
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
