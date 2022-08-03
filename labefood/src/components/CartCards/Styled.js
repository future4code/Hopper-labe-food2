import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const ContainerAddress = styled.div`
  width: 100%;
  height: 76px;
  margin: 1px 0;
  padding: 16px;
  background-color: #eee;
`;

export const ContainerRestaurant = styled.div`
    display: flex;
    flex-direction: column;
  width: 100%;
  height: 100px;
  margin: 1px 0;
  padding: 16px;
  background-color: white;
    justify-content: center;
    align-items: center;
`;

export const GrayFont = styled.p`
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: grey;
`;

export const GreenFont = styled.p`
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: green;
`;

export const Endereco = styled.p`
  width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const ContainerFrete = styled.p`
    display: flex;
    width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  justify-content: end;
`

export const ContainerSubtotal = styled.p`
    display: flex;
    flex-direction: row;
    width: 328px;
  height: 18px;
  margin: 10px 0px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
    justify-content: space-between;
    align-items: center;
`

export const Subtotal = styled.p`
  //width: 328px;
  margin: 0px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: green;
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
  width: 328px;
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
    border-color: red;
  }
`;