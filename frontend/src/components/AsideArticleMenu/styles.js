import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 68%;

  .text-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 14vw;
    position: relative;
    margin-top: 25px;

    .button-item {
      width: 32px;
      height: 32px;
      border: 1px solid var(--gray-cart-color);
      border-radius: 50px;

      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: 0.7s;

      svg {
        color: var(--gray-cart-color);
        width: 0.9rem;
        height: 0.9rem;
        polygon {
          stroke: var(--gray-cart-color);
        }
      }
    }

    span.hidden {
      display: flex;
      align-items: center;
      position: relative;
      height: 32px;
      vertical-align: middle;
      font-family: var(--fonts);
      font-size: 20px;
      font-weight: 300;
      margin-left: 34%;
      color: #b3b3b1;
      visibility: hidden;
      opacity: 0;
      transition: visibility 2s, opacity 0.8s ease-in;
    }

    span.show {
      display: flex;
      align-items: center;
      position: relative;
      height: 32px;
      vertical-align: middle;
      font-family: var(--fonts);
      font-size: 20px;
      font-weight: 300;
      margin-left: 34%;
      color: #b3b3b1;
      visibility: visible;
      opacity: 1;
      transition: visibility 2s, opacity 1s ease-out;
    }

    .close {
      z-index: 6;
    }

    .button-item.close svg {
      position: relative;
      top: 1px;
      width: 17px;
      height: 17px;
    }

    .button-item.camera svg {
      position: relative;
      top: 1px;
      width: 17px;
      height: 17px;
    }

    .camera {
      z-index: 5;
      left: 20%;
      transition: 0.7s;
    }

    .button-item.search svg {
      position: relative;
      top: 1px;
      width: 13px;
      height: 13px;
    }

    .search {
      z-index: 4;
      left: 35%;
      transition: 0.9s;
    }

    .button-item.play svg {
      position: relative;
      left: 1px;
      width: 10px;
      height: 10px;
    }

    .play {
      z-index: 3;
      left: 50%;
      transition: 1.1s;
    }

    .button-item.code svg {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
    }

    .code {
      z-index: 2;
      left: 65%;
      transition: 1.3s;
    }

    .button-item.more svg {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
    }

    .more {
      z-index: 1;
      left: 80%;
      transition: 1.5s;
    }
  }

  @media (max-width: 1440px) {
    .text-buttons {
      width: 16vw;
    }

    .button-item.camera {
      z-index: 5;
      left: 25%;
      transition: 0.7s;
    }

    .button-item.search {
      z-index: 4;
      left: 45%;
      transition: 0.9s;
    }

    .button-item.play {
      z-index: 3;
      left: 65%;
      transition: 1.1s;
    }

    .button-item.code {
      z-index: 2;
      left: 85%;
      transition: 1.3s;
    }

    .button-item.more {
      z-index: 1;
      left: 105%;
      transition: 1.5s;
    }

    span.hidden {
      display: flex;
      align-items: center;
      position: relative;
      height: 32px;
      vertical-align: middle;
      font-family: var(--fonts);
      font-size: 20px;
      font-weight: 300;
      margin-left: 34%;
      color: #b3b3b1;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.3s, opacity 0.4s ease-in;
    }

    span.show {
      display: flex;
      align-items: center;
      position: relative;
      height: 32px;
      vertical-align: middle;
      font-family: var(--fonts);
      font-size: 20px;
      font-weight: 300;
      margin-left: 34%;
      color: #b3b3b1;
      visibility: visible;
      opacity: 1;
      transition: visibility 2s, opacity 1.5s ease-out;
    }
  }
`;
