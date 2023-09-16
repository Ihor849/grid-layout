import styled from 'styled-components';

export const GalleryItems = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  & > .itemBig {
    grid-column: span  2;
    grid-row: span  2;
  }
`;
export const Item = styled.div`
  position: relative;
  padding: 0  0 85% 0;
 
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
