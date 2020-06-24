import * as React from 'react'
import { getCatalogue } from '../api/getCatalogue'
import PropTypes from 'prop-types'

import Catalogue from '../components/Catalogue/Catalogue'

const Home = ({ catalogue }) => {
  return (
    <div>
      <Catalogue catalogue={catalogue} />
    </div>
  )
}

Home.propTypes = {
  catalogue: PropTypes.array,
}

export const getStaticProps = async () => {
  const catalogue = await getCatalogue()

  return {
    props: { catalogue },
  }
}

export default Home
