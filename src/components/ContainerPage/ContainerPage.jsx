import { Wrapper } from "./ContainerPage.styled"

// Оболочка (grid - контейнер)
export const ContainerPage = ({children})=>{

  return(
    <Wrapper className="wrapper">
      {children}
    </Wrapper>
  )
}