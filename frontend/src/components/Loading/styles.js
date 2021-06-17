import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Load = styled.div`
  width: 30px;
  height: 30px;
  background: #554236;
  display: grid;
  transform-origin: top right;
  animation: loading 1s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    background: #f77825;
    transform-origin: inherit;
    animation: inherit;
    animation-name: loading2;
  }

  &::after {
    background: #60b99a;
    --s: 180deg;
  }

  @keyframes loading {
    70%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading2 {
    30% {
      transform: rotate(var(--s, 90deg));
    }
    70% {
      transform: rotate(0);
    }
  }
`;
