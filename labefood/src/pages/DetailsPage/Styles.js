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
  padding: .35em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p {
    padding: .35em;
  }
  p:nth-child(1) {
    color: #5cb646;
  }
  p:nth-child(2) {
    color: #b8b8b8;
    font-size: 12px;
  }

`;
