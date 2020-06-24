import * as React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Accordion from '../Accordion/Accordion'

import { store } from '../../stores/product'

const PanelWrapper = styled.div`
  background-color: rgba(0, 0, 10, 0.025);
  border-radius: 0.5rem;
  padding: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
const Link = styled.a`
  display: block;
  transition: 0.25s all;
  padding: 0.5rem;
  &:hover {
    color: blue;
    transform: translateX(0.25rem);
  }
`

const CatalogueMenu = ({ items, type }) => {
  const isNavItem = items.some((i) => i.type === 'navItem')
  const { dispatch } = React.useContext(store)

  return (
    <>
      {isNavItem ? (
        items.map((item, index) => (
          <Link
            key={item.name}
            onClick={() => dispatch({ type: 'updateProduct', item })}
          >
            {item.name}
          </Link>
        ))
      ) : (
        <Accordion PanelWrapper={PanelWrapper}>
          {items.map((item, index) => (
            <div header={item.name} key={item.name}>
              {item.items && <CatalogueMenu items={item.items} />}
            </div>
          ))}
        </Accordion>
      )}
    </>
  )
}

CatalogueMenu.propTypes = {
  type: PropTypes.string,
  items: PropTypes.array,
}

export default CatalogueMenu
