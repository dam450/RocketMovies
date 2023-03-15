import { api } from '@/services/api'
import AvatarPlaceholder from '@/assets/avatar_placeholder.svg'

const baseURL = api.defaults.baseURL
const resource = 'files'

export function getAvatarURL(avatar) {

  if (!avatar) return AvatarPlaceholder

  return `${baseURL}/${resource}/${avatar}`
}
