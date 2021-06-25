import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 90vw;
  box-sizing: border-box;
  padding: 0 0 0 5%;
  margin: 2% 0 0 0;

  .logo {
    img {
      width: 50%;
    }
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    width: 19vw;

    button {
      width: 8vw;
      height: 6vh;
      border: none;
      border-radius: 12px;

      font-family: var(--fonts);
      font-size: 0.95em;
      color: var(--cards-background);
    }

    .cancel {
      background-color: var(--gray-cart-color);
      opacity: 0.5;
    }

    .publish {
      background-color: var(--signin-button-background);
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9vh;
  width: 80vw;
  height: 72vh;

  border-bottom: 1px solid black;

  .title {
    width: 45vw;

    input {
      width: 100%;
      height: 7vh;
      font-family: var(--fonts);
      font-size: 2.1rem;
      box-sizing: border-box;
      border: none;
      padding: 0;
      background-color: var(--body-background-color);

      ::placeholder {
        opacity: 0.4;
      }

      &::webkit-placeholder {
        font-size: 3rem;
        opacity: 0.4;
      }

      &::-moz-placeholder {
        font-size: 3rem;
        opacity: 0.4;
      }

      &:-ms-input-placeholder {
        font-size: 3rem;
        opacity: 0.4;
      }

      &:-moz-placeholder {
        font-size: 3rem;
        opacity: 0.4;
      }
    }
  }
  }
`;

export const Footer = styled.div``;
