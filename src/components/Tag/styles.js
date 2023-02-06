import styled from 'styled-components';

export const Container = styled.span`
  font-family: 'Roboto';
  font-size: 1.2rem;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_300};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  margin-right: 0.8rem;
`;
