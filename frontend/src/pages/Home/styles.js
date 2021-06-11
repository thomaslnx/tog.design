import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Posts = styled.div`
  display: flex;
  justify-content: end;
  max-width: 856px;
  width: 100%;
  margin-top: 62px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  row-gap: 32px;
`;

export const Menu = styled.div``;
