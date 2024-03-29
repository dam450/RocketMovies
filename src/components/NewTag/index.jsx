import { FiX, FiPlus } from 'react-icons/fi'

import { Container } from './styles'

export function NewTag({ isNew, value, type = 'text', onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type={type}
        value={value}
        {...rest}
        readOnly={!isNew}
        maxLength="18"
        size="12"
      />

      <button
        onClick={onClick}
        type="button"
        title={isNew ? 'Adicionar' : 'Remover'}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus size={24} /> : <FiX size={24} />}
      </button>
    </Container>
  )
}
