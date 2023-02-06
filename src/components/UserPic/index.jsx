import { Container } from './styles.js';

export function UserPic({size, ...rest}) {
  return (
      <Container size={size} {...rest} />
  );
}
