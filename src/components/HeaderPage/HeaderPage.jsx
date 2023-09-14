// Шапка (gril - элемент)

import { Header } from "./HeaderPage.styled";
import { iconsLogo } from "../../images/svg/svg";

export const HeaderPage = () => {
  return (
    <Header className="header">
      <a className="headerLogo" href="#">{iconsLogo}</a>
      <nav className="headerMenu">
        <ul className="headerList">
          <li className="headerItem"><a className="headerLink" href="#">Пункт меню</a></li>
          <li className="headerItem"><a className="headerLink" href="#">Пункт меню</a></li>
          <li className="headerItem"><a className="headerLink" href="#">Пункт меню</a></li>
          <li className="headerItem"><a className="headerLink" href="#">Пункт меню</a></li>
          <li className="headerItem"><a className="headerLink" href="#">Пункт меню</a></li>
        </ul>
        <div className="headerBurger">
          <span></span>
        </div>
      </nav>
    </Header>
  );
};
