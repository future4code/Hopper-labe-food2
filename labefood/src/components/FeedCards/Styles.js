import styled from "styled-components";

export const CardRestaurant = styled.div`
  width: 90%;
  height:30vh;
  border: 1px solid #bbb;
  border-radius: 10px;
  margin-bottom: .5em;
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    object-position: center;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  div {
    margin: 0 auto;
    width: 90%;
    height: 9vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
    }
    span {
      margin-top: .5em;
      display: flex;
      justify-content: space-between;
    }
  }
`;
