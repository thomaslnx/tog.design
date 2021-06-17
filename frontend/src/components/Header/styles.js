import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin-top: 32px;
  padding: 0 40px;

  .logo {
    img {
      width: 132px;
      height: 40px;
    }
  }

  .login {
    display: flex;
    align-items: center;

    .cart {
      width: 48px;
      height: 48px;
      background-color: var(--gray-cart-color);
      border: 0;
      border-radius: 50%;
      margin-right: 24px;

      svg {
        height: 20px;
        width: 17px;
        color: var(--body-background-color);
      }

      transition: 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .signin {
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
      padding-top: 11px;
      box-sizing: border-box;

      transition: 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
