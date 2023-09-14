// Шапка (gril - элемент)

export const HeaderPage = () => {
  return (
    <div className="header">
      <a className="headerLogo" href="#"></a>
      <nav className="headerMenu">
        <ul className="headerList">
          <li><a className="headerLinck" href="#">Пункт меню</a></li>
          <li><a className="headerLinck" href="#">Пункт меню</a></li>
          <li><a className="headerLinck" href="#">Пункт меню</a></li>
          <li><a className="headerLinck" href="#">Пункт меню</a></li>
          <li><a className="headerLinck" href="#">Пункт меню</a></li>
        </ul>
        <div className="headerBurger">
          <span></span>
        </div>
      </nav>
    </div>
  );
};
