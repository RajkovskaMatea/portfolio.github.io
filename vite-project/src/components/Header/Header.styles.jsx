import styled, { keyframes } from "styled-components";

export const portraitSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 600px;
  margin-left: 250px;
`;

export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
`;

export const Portrait = styled.img`
  height: 330px;
  width: 250px;
  border-radius: 50%;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) & {
      animation: ${portraitSpin} infinite 20s linear;
    }
  }
`;
export const HeaderText = styled.div`
font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
font-weight: 200; /* semi-bold for headings */
font-size: 1.2rem; /* adjust as needed */
color: #1a1a1a;
transition: background-color 0.3s ease;

  &:hover {
    background-color: #90ace9;
  }`;