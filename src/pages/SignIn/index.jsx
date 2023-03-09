import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Background, Container, Form } from './styles'
import { FiLock, FiMail } from 'react-icons/fi'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/auth'

export function SignIn() {
  const { signIn } = useAuth()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


  function handleSignIn(e) {
    e.preventDefault()
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu login</h3>
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
