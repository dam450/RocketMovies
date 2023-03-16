import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Input } from '@/components/Input'
import { UserPic } from '@/components/UserPic'
import Logo from '@/assets/clapperboard.svg'
import { FiSearch } from 'react-icons/fi'

import { useAuth } from '@/hooks/auth'
import { useSearch } from '@/hooks/search'
import { getAvatarURL } from '@/utils/getAvatarURL'

import { Container, Profile } from './styles'

export function Header() {
  const { signOut, user } = useAuth()
  const { setSearch } = useSearch()

  const [ searchInput, setSearchInput ] = useState('')

  const navigate = useNavigate()

  function handleLogout() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    setSearch( searchInput )
  }, [ searchInput ])

  const avatarURL = getAvatarURL(user.avatar)

  return (
    <Container>
      <h1>
        <img src={Logo} alt="logo" />
        RocketMovies
      </h1>
      <Input
        type="search"
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <Profile>
        <div>
          <Link title="Abrir perfil" to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <button title="Fazer logout" to="/signin" onClick={handleLogout}>
            sair
          </button>
        </div>
        <Link title="Abrir perfil" to="/profile">
          <UserPic src={avatarURL} alt={user.name} size={64} />
        </Link>
      </Profile>
    </Container>
  )
}
