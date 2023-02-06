import Rating from 'react-rating';
import styled from 'styled-components';

export const Container = styled(Rating)`

  > span {
    margin-inline: 5px;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
