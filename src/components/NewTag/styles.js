import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  block-size: fit-content;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border-radius: 10px;
  padding: 16px;

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : `none`};

  > input {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 5px;

    &:focus-visible {
      outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .button-delete,
  .button-add {
    color: ${({ theme }) => theme.COLORS.RED_100};
  }
`;
