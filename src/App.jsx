import './App.css';
import { ContainerPage } from './components/ContainerPage/ContainerPage';
import { HeaderPage } from './components/HeaderPage/HeaderPage';
import { MainPage } from './components/MainPage/MainPage';
import { SectionContent } from './components/SectionContent/SectionContent';
import {SideBarPage} from './components/SideBarPage/SideBarPage'

function App() {
  return (
    <ContainerPage className="wrapper">
      <h1 className="title">Grid Layout</h1>
      <HeaderPage />
      <MainPage >
        <SideBarPage/>
        <SectionContent/>
      </MainPage>
    </ContainerPage>
  );
}

export default App;
