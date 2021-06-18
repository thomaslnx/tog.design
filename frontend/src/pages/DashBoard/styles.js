import styled from 'styled-components';

export const LoadContainer = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  margin auto auto;
`;

export const Container = styled.main`
  display: block;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  padding: 0 120px;
  margin: 32px auto 0;

  img {
    width: 133px;
    height: 37px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 308px;
  height: 38px;
`;

export const WriteNowButton = styled.button`
  width: 106px;
  height: 38px;
  border: none;
  border-radius: 12px;
  background-color: var(--write-now-button-background);
  font-family: var(--fonts);
  color: var(--cards-background);
`;

export const Content = styled.div`
  max-width: 1680px;
  margin: 48px 50px 42px auto;
  display: grid;
  align-self: end;
  grid-template-areas:
    'graph graph menu'
    'best best menu';

  & > .graph {
    grid-area: graph;
  }
  & > .best {
    grid-area: best;
  }
  & > .menu {
    grid-area: menu;
  }
`;

export const Graph = styled.div`
  width: 1000px;
  height: 389px;
  border: none;
  justify-self: start;
  border-radius: 16px;
  background-color: var(--cards-background);
  font-family: var(--forgot-password-link);
  font-size: 8px;
  padding: 25px 35px 19px;
  box-sizing: border-box;

  span {
    padding-bottom: 20px;
    font-size: 20px;
  }
`;

export const BestSellers = styled.div`
  width: 1000px;
  height: 389px;
  margin-top: 32px;
  border: none;
  justify-self: start;
  border-radius: 16px;
  background-color: var(--cards-background);
  padding: 25px 35px 19px;
  box-sizing: border-box;

  span {
    font-family: var(--forgot-password-link);
    font-size: 20px;
  }
`;

export const AsideMenu = styled.aside`
  width: 520px;
  height: 810px;
  border: none;
  justify-self: end;
  border-radius: 24px;
  background-color: var(--aside-dashboard-menu);
`;
