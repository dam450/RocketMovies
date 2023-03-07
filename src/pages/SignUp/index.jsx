import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { api } from '@/services/api'
import { Background, Container, Form } from './styles'


export function SignUp() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleSignUp(e) {
    e.preventDefault()

    if (!name || !email || !password) return alert('Preencha todos os campos')

    api
      .post('/users', { name, email, password })
      .then(() => alert('Usuário cadastrado com sucesso'))
      .catch(err => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert('Não foi possível cadastrar o usuário')
        }
      })
  }

  return (
    <Container>
      <Form>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>

        <Input
          placeholder="Nome" icon={FiUser} type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input placeholder="E-mail" icon={FiMail} type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input placeholder="Senha" icon={FiLock} type="password" autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}  type="submit" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
