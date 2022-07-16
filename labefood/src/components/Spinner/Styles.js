import styled, { keyframes } from "styled-components"

const Pulse = keyframes`
  0%, 100% {
    transform: scale(1.2);
    background: #5CB64650;
    border: 1px solid #5CB64650;
  }
  50% {
    transform: scale(1.3);
    background: #5CB646;
    border: 1px solid #5CB646;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: calc(100vh - 18vh);
  display: flex;
  margin-top: 1em;
  justify-content: center;
  gap: 1em;
  span {
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }
  span:nth-child(1) {
    animation: ${Pulse} 2s linear infinite;
  }
  span:nth-child(2) {
    animation: ${Pulse} 2.5s linear infinite;
  }
  span:nth-child(3) {
    animation: ${Pulse} 3s linear infinite;
  }
`;
