import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 160px;
  margin-left: 490px;

  &.open ul {
    transform: rotate(0) translateZ(60px);
  }

  &.open > button {
    transform: rotateX(90deg);
  }

  &.open > button .button-inner {
    opacity: 0;
  }

  &:not(.open) > button:hover {
    scale: 1.05;
  }
`;

export const DropdownButton = styled.button`
  position: relative;
  background: #90ace9;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  height: 50px;
  width: 160px;
  padding: 0 20px 0 32px;
  cursor: pointer;
  transform: rotate(0);
  transition: all 0.3s ease;
`;

export const ButtonInner = styled.span`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background: #90ace9;
  justify-content: center;
  transform: rotateX(-90deg) translateZ(60px);
  transition: transform 0.3s ease;
`;

export const DropdownListItem = styled.li``;

export const DropdownListButton = styled.button`
  background: transparent;
  border: none;
  width: 160px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  i {
    font-size: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;