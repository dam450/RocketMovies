import { Container, Profile } from "./styles.js";

export function Header() {
  return (
    <Container>
      <h1>
        <img src='clapperboard.svg' alt='logo' />
        RocketMovies
      </h1>
      <input type='text' />
      <Profile>
        <div>
          <a href='#profile' title='abrir perfil'>
            <strong>Evandro Damaso</strong>
          </a>
          <a href='#logout' title='fazer logout'>
            sair
          </a>
        </div>
        <a title='abrir perfil' href='#profile'>
          <img src='https://github.com/dam450.png' />
        </a>
      </Profile>
    </Container>
  );
} 