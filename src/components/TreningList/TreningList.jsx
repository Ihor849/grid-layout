import { iconsLogo,iconBtnHome,iconBtnRegister,iconBtnLogin } from '../../images/svg/svg.js';
import {WrapperPage} from "./TreningList.styled.jsx"


export const TreningListPage = () => {
  return (
    <WrapperPage className="wrapperPage">
      <header className="header">
        <a className="logo" href="#">
          {iconsLogo}
        </a>
        <nav className="headerNav">
          <button class="button-menu">
            {iconBtnHome}Home
            </button>
          <button className="buttonNav" type="button">
            {iconBtnRegister}Register
          </button>
          <button className="buttonNav" type="button">
            {iconBtnLogin}Login
          </button>
        </nav>
      </header>
      <main className="">
        <div>MAIN</div>
      </main>
      <footer className="">
      <div>FOOTER</div>
      </footer>
    </WrapperPage>
  )
};
