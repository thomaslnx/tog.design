import styled from 'styled-components';

export const Container = styled.main`
  display: block;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
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

export const CartButton = styled.button``;

export const Content = styled.div``;

export const Graph = styled.div``;

export const BestSellers = styled.div``;

export const AsideMenu = styled.aside``;
