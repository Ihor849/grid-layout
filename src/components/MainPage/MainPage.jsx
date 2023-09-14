// Контент (gril-элемент + gril-контейнер){children}

import { Main } from "./MainPage.styled"


export const MainPage = ({children})=> {

  return(
    <Main className="main">
      {children}
    </Main>
  )
}