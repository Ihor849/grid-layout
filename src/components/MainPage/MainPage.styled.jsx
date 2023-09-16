import styled from 'styled-components';

// export const Main = styled.main`
//   background-color: #eae61d;
//   display: grid;
//   grid-template-columns: 300px auto;
//   /* grid-template-rows: auto auto; */
//    grid-template-rows: repeat(2, auto);

//   & > .sidebar {
//  grid-row-start: 1;
//  grid-row-end: 3;
//  padding: 0 10px;
//   }

// `;
export const Main = styled.main`
  background-color: #eae61d;
  display: grid;
  grid-area: main;
  padding: 30px 15px;
  grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;

  & > .sidebar {
    background-color: #2b259b;
    padding: 15px;
    grid-column: 1/3;

    & > nav > ul {
      display: grid;
      gap: 15px;
    }

    & > nav > ul > li > a {
      color: #e7ebe9;
      font-size: 20px;
    }
  }

  & > .sectionContent {
    grid-column: 3/4;
    padding: 0 0 0 30px;
  }

  
`; 
