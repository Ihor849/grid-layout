import styled from 'styled-components';

// export const Header = styled.header`
//   background-color: green;
//   display: grid;
//     /* grid-auto-flow: column; */
//     grid-template-columns: 100px auto;
//     align-items: center;
//   & > nav > ul {
//     display: grid;
//     grid-auto-flow: column;
//     gap:10px;
//   }
//   & > a {
//     justify-self: center;
//   }
// `;
export const Header = styled.header`
display: grid;
  background-color: green;
  grid-area: header;
  align-items: center;
  padding: 10px;grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;
  

  & > a {
    justify-self: center;
    grid-column: 2/3;

  }

  & > nav > ul {
    display: grid;
    grid-auto-flow: column;
    justify-items: end;
    gap: 10px;
  }
`;
