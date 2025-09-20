import styled from 'styled-components';

export const Section = styled.section`
  margin-left: 210px;
  width: 670px;
  font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;

  menu button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    background-color: transparent;
    color: #213547;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #90ace9;
    }

    &.active {
      background-color: #90ace9;
    }
  }
`;
export const Main = styled.main`
  margin-top: 50px`;

export const Menu = styled.menu``;

export const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;