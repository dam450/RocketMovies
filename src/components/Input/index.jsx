import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <label htmlFor=""></label>
      {Icon && <Icon size={20} />}
      <input {...rest} /><span></span>
    </Container>
  );
}
