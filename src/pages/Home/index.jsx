import { useEffect, useState } from 'react'

import { Container, Content, Movie, MovieList } from './styles';
import { FiPlus } from 'react-icons/fi';

import { ButtonLink } from '@/components/Button';
import { Header } from '@/components/Header';
import { Stars } from '@/components/Stars';
import { TagGray } from '@/components/Tag';

import { api } from '@/services/api';

export function Home() {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    api
      .get(`/movies`)
      .then(response => response.data)
      .then(movies => {
        setMovies(movies)
        // console.log(movies)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <header>
          <h2>Meus filmes</h2>
          <ButtonLink title="Adicionar filme" icon={FiPlus} to="/create" />
        </header>

        <MovieList>
          {movies &&
            movies.map(movie => (
              <Movie to={`/preview/${movie.id}`} key={movie.id}>
                <h3>{movie.title}</h3>
                <Stars
                  className="small"
                  readonly
                  initialRating={movie.rating}
                />
                <p>{movie.description}</p>
                {movie.tags &&
                  movie.tags.map(tag => (
                    <TagGray key={tag.id} value={tag.name} />
                  ))}
              </Movie>
            ))}
        </MovieList>
      </Content>
    </Container>
  )
}
