import styled from 'styled-components';

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: var(--gray-cart-color);

  svg {
    height: 20px;
    width: 17px;
    color: var(--body-background-color);
  }

  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
