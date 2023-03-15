import { api } from '@/services/api'
import AvatarPlaceholder from '@/assets/avatar_placeholder.svg'

const baseURL = api.defaults.baseURL
const resource = 'files'

/**
 * Retorna a URL da imagem do usuário. Se o nome for nulo, retorna a URL da imagem padrão.
 * @param {String} avatar nome da imagem no banco de dados
 * @returns {URL} URL da imagem
 */
export function getAvatarURL(avatar) {

  if (!avatar) return AvatarPlaceholder

  return `${baseURL}/${resource}/${avatar}`
}
