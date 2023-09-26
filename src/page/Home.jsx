import { HomeTitle, HomeWrapper } from "./Page.styled";
import car from '../images/ferrari-purosangue (1).png'

export const Home  =()=> {


    return (
      <HomeWrapper  >
        <HomeTitle  >
        BEST CAR FOR RENT 
        </HomeTitle>
        <img src={car} alt="car"/>

      </HomeWrapper>
    );
  }