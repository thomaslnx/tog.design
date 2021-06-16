import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 387;
  margin-top: 93px;

  header {
    font-family: var(--signin-header-font);
    font-size: 43px;
  }

  input {
    height: 40px;
    border: 1px solid var(--gray-cart-color);
    border-radius: 4px;
    background: var(--body-background-color);
    padding-left: 16px;

    &:placeholder {
      font-family: var(--placeholder-font);
      font-size: 14px;
    }

    &:nth-child(n + 1) {
      margin-top: 59px;
    }
  }

  a {
    font-family: var(--forgot-password-link);
    text-decoration: none;
    color: var(--cards-title-color);
    text-align: right;
    margin: 16px 0 56px 0;
  }

  button {
    width: 230px;
    height: 40px;
    margin: 0 auto;
    border: none;
    border-radius: 100px;
    background: var(--signin-button-background);
    font-family: var(--placeholder-font);
    font-weight: 500;
    color: var(--cards-background);
  }
`;
