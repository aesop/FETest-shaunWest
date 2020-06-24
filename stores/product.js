import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const initialState = null
const store = createContext(initialState)
const { Provider } = store

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'updateProduct':
        return action.item
      case 'clear':
        return null
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, ProductProvider }
