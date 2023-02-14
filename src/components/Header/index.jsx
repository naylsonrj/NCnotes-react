import { Container, Profile } from "../Header/styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/naylsonrj.png" />
      
        <div>
          <span>Bem vindo</span>
          <strong>Naylson Costa</strong>
        </div>
      </Profile>
      
    </Container>

  )
}