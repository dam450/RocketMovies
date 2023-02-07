import { Container, ContainerAlt } from './styles';

export function Tag({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}

export function TagGray({ value, ...rest }) {
  return (
    <ContainerAlt {...rest}>
      {value}
    </ContainerAlt>
  )
}