import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Container, Header, Content, Avatar } from './styles';
import { UserPic } from '@/components/UserPic';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export function Profile() {
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
              src="https://github.com/dam450.png"
              alt="avatar do usuário"
            />
            <label htmlFor="avatar" tabIndex="0">
              <FiCamera />
              <input
                type="file"
                id="avatar"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </label>
          </Avatar>

          <Input
            icon={FiUser}
            placeholder="Nome do usuário"
            type="text"
            autoComplete="off"
          />
          <Input
            icon={FiMail}
            placeholder="E-mail"
            type="email"
            autoComplete="off"
          />
          <Input
            icon={FiLock}
            placeholder="Senha atual"
            type="password"
            autoComplete="off"
          />
          <Input
            icon={FiLock}
            placeholder="Nova senha"
            type="password"
            autoComplete="off"
          />

          <Button title="Salvar" type="button" />
        </form>
      </Content>
    </Container>
  )
}
