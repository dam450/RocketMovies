import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { getAvatarURL } from '@/utils/getAvatarURL'

import { Container, Header, Content, Avatar } from './styles'
import { UserPic } from '@/components/UserPic'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export function Profile() {

  const { user, updateUser } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const avatarURL = getAvatarURL(user.avatar)
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile(e) {
    e.preventDefault()

    const user = {
      name,
      email,
      password: currentPassword,
      new_password: newPassword
    }

    await updateUser({ user, avatarFile })

    setCurrentPassword('')
    setNewPassword('')
  }

  function handleImageKeydown(e) {
    if(e.code === 'Space' || e.code === 'Enter')
      e.target.click()
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[ 0 ]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Header>

      <Content>
        <form action="">
          <Avatar>
            <UserPic
              size={186}
              src={avatar ? avatar : avatarURL}
              alt="avatar do usuário"
            />
            <label
              htmlFor="avatar"
              tabIndex="0"
              onKeyDown={e => handleImageKeydown(e)}
            >
              <FiCamera />
              <input
                type="file"
                id="avatar"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleChangeAvatar}
              />
            </label>
          </Avatar>

          <Input
            icon={FiUser}
            placeholder="Nome do usuário"
            type="text"
            autoComplete="off"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            placeholder="E-mail"
            type="email"
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            placeholder="Senha atual"
            type="password"
            autoComplete="off"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
          <Input
            icon={FiLock}
            placeholder="Nova senha"
            type="password"
            autoComplete="off"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />

          <Button title="Salvar" type="submit" onClick={handleUpdateProfile} />
        </form>
      </Content>
    </Container>
  )
}
