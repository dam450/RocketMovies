import { createContext, useContext, useState } from 'react'

const SearchContext = createContext({})

function useSearch() {
  const context = useContext(SearchContext)

  return context
}

function SearchProvider({ children }) {

  const [ data, setData ] = useState({})

  function setSearch( query = 'teste' ) {
    setData({ search: query })
  }

  return (
    <SearchContext.Provider value={{ setSearch, search: data.search }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchProvider, useSearch }
