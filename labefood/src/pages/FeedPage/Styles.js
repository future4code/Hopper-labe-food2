import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10vh;
  overflow: hidden;
`;

export const Search = styled.div`
  width: 90%;
  height: 7vh;
  margin: 1em 0;
  border: 1px solid #B8B8B8;
  border-radius: 2px;
  display: flex;
  button {
    border: none;
    height: 100%;
    background: transparent;
    img{
      margin: 2px 0 0 0;
      width: 50%;
      cursor: pointer;
    }
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    text-indent: 10px;
    &:focus {
      outline: none; 
    }
  }
`;

export const Categories = styled.div`
  width: 80%;
  height: 6vh;
  display: flex;
  align-items: center;
  gap: 1em;
  white-space: nowrap;
  overflow: scroll;
  margin-left: 10%;
  &::-webkit-scrollbar {
    width: .1px;
  }
  p {
    width: 100%;
    text-align: center;
  }
  ${({idx}) => (`p:nth-child(${idx}){color: #5cb646}`)}
`;
