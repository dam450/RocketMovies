import { Container } from './styles.js';

export function UserPic({size, src, ...rest}) {
  return (
      <Container size={size} src={src} {...rest} />
  );
}
