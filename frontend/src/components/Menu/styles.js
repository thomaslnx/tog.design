import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 200px;
  max-width: 212px;
  width: 100%;
  height: 198px;
  margin-left: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 0;

  li {
    display: flex;

    p.item {
      font-family: 'Helvetica Neue LT Std', sans-serif;
      height: 24px;
      font-weight: 700;
      font-size: 18px;
      color: var(--gray-cart-color);
      border-bottom: 4px solid var(--cards-title-color);
    }

    p.item.yellow {
      height: 24px;
      color: var(--items-background) !important;
      border-bottom: 4px solid var(--items-background);
    }

    .description {
      margin-left: 13px;

      .title {
        font-weight: medium;
        font-size: 12px;
        line-height: 15px;
        color: var(--gray-cart-color);
      }

      .field {
        font-family: Helvetica;
        font-size: 14px;
        font-weight: medium;
        line-height: 17px;
      }
    }
  }

  li:nth-child(2),
  li:nth-child(3) {
    margin-top: 50px;
  }
`;
