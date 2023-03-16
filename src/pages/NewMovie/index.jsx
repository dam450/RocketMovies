import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'
import { NewTag } from '@/components/NewTag'

import { Container, Content } from './styles'

import { api } from '@/services/api'

export function NewMovie() {

  const {id: movieId} = useParams()
  console.log('params:', movieId)

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState('')

  const [ title, setTitle ] = useState('')
  const [ rating, setRating ] = useState('')
  const [ description, setDescription ] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    // console.log('tags:', tags)

    if (!newTag) return
    if (tags.includes(newTag.trim())) return setNewTag('')

    setTags(prevState => [...prevState, newTag.trim()])
    setNewTag('')
  }

  function handleRemoveTag(tag) {
    const filteredTags = tags.filter(t => t !== tag)
    setTags(filteredTags)
  }

  async function handleAddMovie() {
    if (!title)
      return alert('Por favor, preencha o título do filme.')

    if (rating > 5 || rating < 0)
      return alert('Por favor, preencha um valor entre 0 e 5.')

    if (newTag)
      return alert('Existe um marcador não adicionado. Apague ou adicione o valor antes de salvar.')

    const data = {
      title,
      description,
      rating,
      tags,
    }

    // console.log('data:', data)
    try {
      if (movieId) return //TODO: preparar update do filme
      else await api.post('/movies', data)
    } catch (error) {
      console.log('error:', error)
    }
    alert('Filme adicionado com sucesso!')
    navigate(-1)
  }

  function handleDeleteMovie() {

    if (movieId) {
      api.delete(`/movies/${movieId}`)
        .then(() => {
          alert('Filme deletado com sucesso!')
        }).catch(error => {
          alert('Erro ao deletar filme. Tente novamente.')
          console.log('error:', error)
        })
      navigate('/')
    }
    setTitle('')
    setRating('')
    setDescription('')
    setTags([])
    setNewTag('')
  }

  useEffect(() => {
    if (movieId) {
      api.get(`/movies/${movieId}`)
        .then(response => response.data)
        .then(movie => {
          setTitle(movie.title)
          setRating(movie.rating)
          setDescription(movie.description)
          setTags(movie.tags)
        })
    }
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>

        <h2>{movieId ? 'Editar' : 'Novo'} filme</h2>
        <form action="">
          <div className="row">
            <Input
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              type="number"
              step="1"
              min="0"
              max="5"
              maxLength="1"
              placeholder="Sua nota (de 0 a 5)"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <TextArea
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <h3>Marcadores</h3>

          <div className="markers">
            {tags.length > 0 &&
              tags.map((tag, idx) => (
                <NewTag
                  key={`${idx}-${tag}`}
                  size={tag.length}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

            <NewTag
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onClick={handleAddTag}
              onChange={e => setNewTag(e.target.value)}
            />
          </div>

          <div className="row">
            <Button
              title="Excluir filme"
              type="button"
              onClick={handleDeleteMovie}
            />

            <Button
              title="Salvar alterações"
              type="button"
              onClick={handleAddMovie}
            />
          </div>
        </form>
      </Content>
    </Container>
  )
}
