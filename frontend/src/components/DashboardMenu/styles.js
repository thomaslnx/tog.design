import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 20px 0 75px;

  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding: 0;
  }

  .dashboard-button {
    display: flex;
    align-items: center;
    font-family: var(--forgot-password-link);
    font-size: 14px;

    .graph {
      background-color: var(--items-background);
      margin-right: 12px;
    }
  }

  .purchases-container {
    display: flex;
    justify-content: space-between;
    width: 100px;

    .purchased-articles,
    .article-wrote {
      background-color: var(--dashboard-button-background);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 340px;
  height: 520px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-family: var(--fonts);

  .title {
    font-size: 12px;
    opacity: 0.5;
  }

  .statistics {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 22px;
  }

  .bar {
    color: var(--published-bar);
  }
`;
