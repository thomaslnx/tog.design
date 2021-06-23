import styled from 'styled-components';

export const Button = styled.button`
  width: 86px;
  height: 38px;
  border: none;
  border-radius: 12px;
  background-color: var(--signin-button-background);
  font-family: var(--signin-button-font);
  color: var(--signin-button-color);
  font-size: var(--signin-button-size);
  font-weight: var(--signin-button-weight);
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;

  transition: 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
