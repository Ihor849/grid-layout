import './App.css';
import { ContainerPage } from './components/ContainerPage/ContainerPage';
import { HeaderPage } from './components/HeaderPage/HeaderPage';
import { MainPage } from './components/MainPage/MainPage';
import { SectionContent } from './components/SectionContent/SectionContent';
import {SideBarPage} from './components/SideBarPage/SideBarPage';
import{SectionProducts} from './components/SectionProducts/SectionProducts'
import { FooterPage } from './components/FooterPage/FooterPage';

function App() {
  return (
    <ContainerPage className="wrapper">
      <HeaderPage />
      <MainPage >
        <SideBarPage/>
        <SectionContent>
        <SectionProducts/>
        </SectionContent>
      </MainPage>
      <FooterPage/>
    </ContainerPage>
  );
}

export default App;
