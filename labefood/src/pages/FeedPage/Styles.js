import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
`;

export const Search = styled.div`
  width: 90%;
  height: 7vh;
  margin: 1em 0;
  border: 1px solid #B8B8B8;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
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
    width: 80%;
    height: 100%;
    border: none;
    background: transparent;
    &:focus {
      outline: none; 
    }
  }
`;
