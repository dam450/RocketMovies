import { Link } from 'react-router-dom'
import { FiLock, FiMail } from 'react-icons/fi'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Background, Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu login</h3>
        <Input placeholder="E-mail" icon={FiMail} type="text" />
        <Input placeholder="Senha" icon={FiLock} type="password" />
        <Button title="Entrar" />
        <Link to="/signup">Criar conta</Link>
      </Form>
        <Background />
    </Container>
  )
}
