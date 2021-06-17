import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  font-family: var(--forgot-password-link);
  font-size: 18px;
  margin-top: 32px;
  border-spacing: 10px 32px;

  th {
    text-align: left;
  }

  tr td {
    margin: 24px 0;
  }

  tr th:nth-child(1) {
    width: 40%;
  }
  tr td:nth-child(2) {
    width: 20%;
  }
  tr td:nth-child(3) {
    width: 20%;
  }
  tr td:nth-child(4) {
    width: 20%;
  }
`;
