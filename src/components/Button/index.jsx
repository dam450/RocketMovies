import { Container, ContainerLink } from './styles';

export function Button({title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}

export function ButtonLink({ title, icon: Icon, ...rest }) {
  return (
    <ContainerLink {...rest}>
      {Icon && <Icon />}
      {title}
    </ContainerLink>
  )
}
