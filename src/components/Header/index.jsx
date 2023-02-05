import { FiSearch } from 'react-icons/fi'

import { Input } from '@/components/Input';
import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <h1>
        <img src='clapperboard.svg' alt='logo' />
        RocketMovies
      </h1>
      <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
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
          <img src='https://github.com/dam450.png' alt='imagem do usuário' />
        </a>
      </Profile>
    </Container>
  );
}
