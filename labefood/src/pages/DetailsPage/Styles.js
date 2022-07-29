import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  min-height:100vh;
  margin-bottom: 12vh;
`;
export const Restaurant = styled.div`
  width:100%;
  height:40vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
export const Logo = styled.div`
  width:90%;
  margin-top:1em;
  img{
    width:100%;
    height:20vh;
    object-fit:cover;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
`;
export const Details = styled.div`
  width:90%;
  h3{
    color:#5cb646;
  }
  p{
    color: #b8b8b8;
  }
`;
export const PriceTime = styled.div`
  display:flex;
  gap:2em;
`;

export const ContainerProducts = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.p`
  padding: .5em 0;
  margin-bottom: .5em;
  border-bottom: 1px solid #000;
`;

export const Image = styled.div`
  width: 30vw;
  height: 20vh;
  img {
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    width: 30vw;
    height: 20vh;
    object-fit: cover;
  }
`;

export const Products = styled.div`
  display: flex;
  margin: 1em 0;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
`;

export const Texts = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    padding: .5em 1em;
    color:red;
  }
  p:nth-child(2) {
    color: #b8b8b8;
    font-size: 12px;
  }
`;
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
