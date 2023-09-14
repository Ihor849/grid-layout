import styled from 'styled-components';

export const Main = styled.main`
  background-color: #eae61d;
  display: grid;
  grid-template-columns: 300px auto;
  /* grid-template-rows: auto auto; */
   grid-template-rows: repeat(2, auto);

  & > .sidebar {
 grid-row-start: 1;
 grid-row-end: 3;
 padding: 0 10px;
  }
  
`;