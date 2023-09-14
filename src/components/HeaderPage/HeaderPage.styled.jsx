import styled from 'styled-components';

export const Header = styled.header`
  background-color: green;
  display: grid;
    /* grid-auto-flow: column; */
    grid-template-columns: 100px auto;
    align-items: center;
  & > nav > ul {
    display: grid;
    grid-auto-flow: column;
    gap:10px;
  }
  & > a {
    justify-self: center;
  }
`;
