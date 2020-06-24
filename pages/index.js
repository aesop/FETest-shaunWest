import * as React from 'react'
import { getCatalogue } from '../api/getCatalogue'
import PropTypes from 'prop-types'

import Catalogue from '../components/Catalogue/Catalogue'
import Product from '../components/Product/Product'

import { ProductProvider } from '../stores/product'

const Home = ({ catalogue }) => {
  return (
    <ProductProvider>
      <Catalogue catalogue={catalogue} />
      <Product />
    </ProductProvider>
  )
}

Home.propTypes = {
  catalogue: PropTypes.object,
}

export const getServerSideProps = async () => {
  const catalogue = await getCatalogue()

  return {
    props: { catalogue },
  }
}

export default Home
