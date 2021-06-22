import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 130px;

  .logo {
    img {
      width: 180px;
      height: 60px;
      margin: 32px 0 0 20px;
    }
  }

  .title {
    text-align: center;
    font-family: var(--forgot-password-link);
    font-size: 28px;
    margin: 107px 0 56px 0;
  }

  .articles-resume {
    display: flex;
    justify-content: flex-end;
    width: 77.5%;
    margin-top: 30px;
  }

  .articles-resume > div {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }

  .subtotal {
    font-family: var(--forgot-password-link);
    font-weight: 500;
  }

  .subtotal-value {
    font-family: var(--forgot-password-link);
    font-weight: 300;
  }
`;

export const Items = styled.div`
  width: 100%;
  border-bottom: 2px solid #707070;

  header {
    width: 90%;
    font-family: var(--forgot-password-link);
    font-weight: 500;
    margin-bottom: 30px;

    .article {
      width: 40%;
      display: inline-block;
    }

    .author {
      width: 20%;
      display: inline-block;
    }

    .publisher {
      width: 20%;
      display: inline-block;
    }

    .value {
      width: 20%;
      display: inline-block;
    }
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 64px;
  background-color: var(--aside-dashboard-menu);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 158px;
    margin-top: 27px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 102px;

  span {
    font-family: var(--forgot-password-link);
    font-size: 24px;
  }

  .cart-resume {
    display: block;

    label {
      .discount-label {
        position: relative;
        background-color: var(--aside-dashboard-menu);
        font-family: var(--placeholder-font);
        top: 72px;
        font-size: 14px;
        left: 14px;
        padding: 0 5px;
      }
    }

    input {
      width: 100%;
      height: 45px;
      margin-top: 62px;
      border: 1px solid var(--gray-cart-color);
      border-radius: 4px;
      background-color: var(--aside-dashboard-menu);
      padding: 0 16px;
      box-sizing: border-box;

      &::placeholder {
        font-family: var(--placeholder-font);
        font-size: 16px;
        color: var(--placeholder-color);
      }
    }
  }
  .subtotal {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 32px;
    border-bottom: 2px solid #707070;

    .values {
      display: flex;
      justify-content: space-between;
    }

    .title {
      font-family: var(--forgot-password-link);
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .value {
      font-family: var(--forgot-password-link);
      font-weight: 300;
      font-size: 16px;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .buy-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;

    button {
      height: 50px;
      border-radius: 30px;
      font-family: var(--forgot-password-link);
      font-weight: 400;
      font-size: 15px;
      margin-top: 65px;
    }

    .checkout {
      background-color: var(--checkout-button-color);
      border: 2px solid var(--checkout-button-color);
      color: var(--items-background);
    }

    .keep-buying {
      border: 2px solid var(--checkout-button-color);
      color: var(--checkout-button-color);
      font-weight: 500;
      margin-top: 32px;
    }
  }
`;

export const Articles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: var(--forgot-password-link);
  font-weight: 300;
  margin-bottom: 30px;

  div {
    display: inline-block;
    width: 90%;

    p {
      width: 60%;
    }

    .article {
      width: 40%;
      display: inline-block;
      vertical-align: text-top;
    }

    .author {
      width: 20%;
      display: inline-block;
    }

    .publisher {
      width: 20%;
      display: inline-block;
    }

    .value {
      width: 20%;
      display: inline-block;
    }
  }

  button {
    background: transparent;
    border: none;
    vertical-align: top;

    svg {
      width: 16px;
      height: 16px;
      color: #595959;
    }
  }
`;
