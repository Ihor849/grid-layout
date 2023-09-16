import styled from "styled-components"

export const ProductsItems = styled.section`
  display: grid; 
  column-gap: 20px;
  row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  
  
` 


export const ProductsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) ;

  
  & > .productsName {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
    font-size: 20px;
    color: #331bd1;
    line-height: 24px;
    overflow: hidden;

  }

  & > button {
    background-color: #331bd1;
    color: #ffffff;
    text-align: start;
    padding: 10px 10px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    justify-self: start;
    border-radius: 40px;
    border:none;

  }
`

export const ProductsImg = styled.a`
  position: relative;
  width: 100%;

  & > div > img {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    /* height: 90%; */
    object-fit: contain;

  }

`