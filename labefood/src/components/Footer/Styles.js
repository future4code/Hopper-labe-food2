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
  img {
    width: 12%;
  }
  img:nth-child(2) {
    padding: 2px;
  }
  img:nth-child(3) {
    padding: 6px;
  }
`;
