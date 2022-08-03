import styled from "styled-components"

export const Item = styled.div`
  height:33.3%;
  display:flex;
  justify-content:space-between;
  p{
    color: #5cb646;
  }
  button{
    height:80%;
    font-size:12px;
    outline:none;
    border:1px solid #5cb646;
    border-top-right-radius:8px;
    border-bottom-left-radius:8px;
    background-color: #fff;
    width: 15%;
  }
`;

export const Shopping = styled(Item)`
  p{
    color: #000;
    font-weight:640;
  }
  button{
    width:40%;
    margin-top:0.8em;
    border-radius:0%;
    border-top-left-radius:8px;
    border-bottom-right-radius: 8px;
    float:bottom;
  }
`;

