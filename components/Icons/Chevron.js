import * as React from 'react'
import PropTypes from 'prop-types'

const Chevron = ({ focusable = false, className, title }) => (
  <svg
    clipRule="evenodd"
    className={className}
    fillRule="evenodd"
    focusable={focusable}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>{title || 'Chevron Icon'}</title>
    <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
  </svg>
)

Chevron.propTypes = {
  className: PropTypes.string,
  focusable: PropTypes.bool,
  title: PropTypes.string,
}

export default Chevron
