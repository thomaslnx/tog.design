import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.div``;

export const Posts = styled.div`
  width: 856px;
  margin-left: 355px;
  margin-top: 62px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  row-gap: 32px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 412px;
  height: 412px;
  background-color: var(--cards-background);
  border: none;
  border-radius: 16px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-family: var(--signin-button-font);
      font-size: 30px;
      padding: 0 16px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 28px;

    .user {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        border: 1px solid #f9c933;
        border-radius: 50%;
        margin-right: 9px;
      }

      .name {
        font-size: 10px;
        font-weight: medium;
        margin-bottom: 2px;
      }

      .role {
        font-size: 7px;
        text-transform: uppercase;
        opacity: 0.5;
      }

      button {
        width: 34px;
        height: 11px;
        display: table-cell;
        vertical-align: middle;
        padding: 0;
        margin: 0 auto;
        border: none;
        border-radius: 2px;
        color: var(--cards-background);
        font-size: 6px;
        background: var(--items-background);
        margin-left: 16px;
        margin-top: -10px;
        margin-right: 20px;
        text-align: center;
      }
    }

    .posts-info {
      display: flex;
      .theme,
      .temps {
        border-left: 1.5px solid #7f7f7f;
        padding-left: 8px;

        .title {
          font-size: 7px;
          text-transform: uppercase;
          opacity: 0.5;
          margin-bottom: 2px;
        }

        .description {
          font-size: 9px;
          font-weight: medium;
        }
      }

      .temps {
        margin-left: 24px;
        width: 40px;
      }
    }
  }
`;

export const Menu = styled.div``;
