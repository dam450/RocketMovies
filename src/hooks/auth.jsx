import { createContext, useContext, useState } from 'react'
import { api } from '@/services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    // console.log('signin: ',email, password)
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data
      console.log('response: ', response)

      api.defaults.headers.authorization = `Bearer ${token}`
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

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }} >
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Contexto de autenticação
 * @returns ({ signIn, user })
 */
function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
