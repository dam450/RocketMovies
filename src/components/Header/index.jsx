import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '@/components/Input';
import { UserPic } from '@/components/UserPic';
import Logo from '@/assets/clapperboard.svg'
import { useAuth } from '@/hooks/auth'

import { Container, Profile } from './styles';

export function Header() {
  const { signOut } = useAuth()

  function handleLogout() {
    console.log('logout')
    signOut()
  }

  return (
    <Container>
      <h1>
        <img src={Logo} alt='logo' />
        RocketMovies
      </h1>
      <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
      <Profile>
        <div>
          <Link title='Abrir perfil' to='/profile'>
            <strong>Evandro Damaso</strong>
          </Link>
          <button title='Fazer logout' to='/signin' onClick={handleLogout} >
            sair
          </button>
        </div>
        <Link title='Abrir perfil' to='/profile'>
          <UserPic src='https://github.com/dam450.png' alt='imagem do usuário' size={64} />
        </Link>
      </Profile>
    </Container>
  );
}
