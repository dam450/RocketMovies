import { Link } from 'react-router-dom'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Background, Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>
        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="E-mail" icon={FiMail} type="email" />
        <Input placeholder="Senha" icon={FiLock} type="password" autoComplete="new-password"/>
        <Button title="Cadastrar" />
        <Link to="/signin">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
