import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '@/services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    // console.log('signin: ',email, password)
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@rocketmovies:token', token)
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user })

    } catch (error) {
      console.log(error)
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível fazer login')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:token')
    localStorage.removeItem('@rocketmovies:user')
    delete api.defaults.headers.common['Authorization']
    setData({})
  }

  async function updateUser({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)

        user.avatar = response.data.avatar
      }

      await api.put(`/users`, user)
      setData({ user, token: data.token })
      delete user.password
      delete user.new_password
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível alterar seu perfil')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token')
    const user = JSON.parse(localStorage.getItem('@rocketmovies:user'))

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateUser,
      user: data.user
    }} >
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Contexto de autenticação
 * @returns ({ signIn, signOut, updateUser, user })
 */
function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
