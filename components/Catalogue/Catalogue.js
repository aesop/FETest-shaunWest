import * as React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import CatalogueMenu from './Catalogue.Menu'

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 1px 1px 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
`

const Catalogue = ({ catalogue }) => {
  return (
    <Wrapper>
      <CatalogueMenu items={catalogue.categories} />
    </Wrapper>
  )
}

Catalogue.propTypes = {
  catalogue: PropTypes.object,
}

export default Catalogue
