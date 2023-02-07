import { Container } from './styles.js';

export function Stars({...rest}) {
  return (
    <Container
      start={0}
      stop={5}
      emptySymbol={<img src='/hollow-star.svg' className='icon' />}
      fullSymbol={<img src='/filled-star.svg' className='icon' />}
      // onChange={(rate) => alert(rate)}
      {...rest}
    />
  );
}