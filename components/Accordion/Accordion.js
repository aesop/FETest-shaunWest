import * as React from 'react'
import PropTypes from 'prop-types'

import AccordionTrigger from './Accordion.Trigger'
import AccordionPanel from './Accordion.Panel'

const DefaultWrapper = (props) => React.createElement('div', props)

const Accordion = ({
  initialActiveId,
  children,
  PanelWrapper = DefaultWrapper,
}) => {
  const [active, setActive] = React.useState(initialActiveId)

  return React.Children.map(children, (child, index) => {
    if (!child) return null

    const { children, id, header } = child.props
    const isActive = active === child.key
    const handleClick = () => setActive(isActive ? null : child.key)

    return (
      <PanelWrapper key={id}>
        <AccordionTrigger
          header={header}
          isActive={isActive}
          onClick={handleClick}
        />
        <AccordionPanel isActive={isActive}>{children}</AccordionPanel>
      </PanelWrapper>
    )
  })
}

Accordion.propTypes = {
  initialActiveId: PropTypes.string,
  children: PropTypes.node.isRequired,
  PanelWrapper: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.node,
  ]),
}

export default Accordion
