import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'

import { Container, Content } from './styles'
import { NewTag } from '@/components/NewTag'

export function NewMovie() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>

        <h2>Novo filme</h2>
        <form action="">
          <div className="row">
            <Input placeholder="Título"></Input>
            <Input placeholder="Sua nota (de 0 a 5)"></Input>
          </div>
          <TextArea placeholder="Observações" />

          <h3>Marcadores</h3>
          <div className="markers">

            <NewTag
              placeholder=""
              value="clássico clássico clássico clássico"
            />
            <NewTag
              placeholder=""
              value="clássico"
            />
            <NewTag
              isNew
              placeholder="Novo marcador"
            />
          </div>

          <div className="row">
            <Button title="Excluir filme" type="button" />
            <Button title="Salvar alterações" type="button" />
          </div>
        </form>
      </Content>
    </Container>
  )
}
