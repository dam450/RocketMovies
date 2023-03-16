import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { Header } from '@/components/Header';
import { Stars } from '@/components/Stars';
import { Tag } from '@/components/Tag';
import { UserPic } from '@/components/UserPic';

import { FiArrowLeft, FiClock, FiEdit } from 'react-icons/fi';
import { Container, Content, Title, Author, Tags } from './styles';

import { api } from '@/services/api';
import { getAvatarURL } from '@/utils/getAvatarURL';
import { useAuth } from '@/hooks/auth';
import { ButtonLink, Button } from '@/components/Button';

export function Preview() {
  const [ movieData, setMovieData ] = useState({})
  const [ date, setDate ] = useState('')
  const [ time, setTime ] = useState('')
  const { user } = useAuth()

  const avatarURL = getAvatarURL(user.avatar)

  const { id: movieId } = useParams()
  // console.log('param:', movieId)

  function fetchMovieData(id) {
    api.get(`/movies/${id}`)
      .then(response => response.data)
      .then(movie => {
        setMovieData(movie)
        // console.log('movieData:', movie)
      }).catch(err => console.error(err))
  }


  useEffect(() => {
    fetchMovieData(movieId)
  }, [])


  useEffect(() => {
    if (movieData.created_at) {
      const movieDate = new Date(`${movieData.created_at} UTC`)

      const dateOptions = {
        dateStyle: 'short',
        timeStyle: 'short',
      }
      const datetime = new Intl.DateTimeFormat('pt-BR', dateOptions)
        .format(movieDate)
        .split(',')

      setDate(datetime[0])
      setTime(datetime[1])
    }
  }, [movieData])


  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
        <Title>
          {movieData.title}{' '}
          <Stars
            onChange={rate => alert(rate)}
            readonly
            initialRating={movieData.rating}
          />
        </Title>
        <Author>
          <span>
            <UserPic size={16} src={avatarURL} alt={user.name} />
            Por {user.name}
          </span>
          <span>
            <FiClock size={16} /> {date} às {time}
          </span>
        </Author>
        <Tags>
          {movieData.tags &&
            movieData.tags.map(tag => <Tag key={tag} value={tag} />)}
        </Tags>
        <p>{movieData.description}</p>
        <Link to={`/change/${movieData.id}`}>Editar filme</Link>
      </Content>
    </Container>
  )
}
