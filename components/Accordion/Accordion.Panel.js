import * as React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { CSSTransition } from 'react-transition-group'

const Wrapper = styled.div`
  height: ${(p) => p.containerHeight};
  transition: ${(p) => `${p.timeout}ms`} height;
  overflow: hidden;
`

const AccordionPanel = ({ isActive, children }) => {
  const [height, setHeight] = React.useState(isActive ? 'auto' : 0)
  const panelRef = React.useRef(null)
  const handleCollapse = () => setHeight(`${panelRef.current.clientHeight}px`)
  const timeout = 500

  return (
    <CSSTransition
      in={isActive}
      timeout={timeout}
      onEnter={handleCollapse}
      onEntered={() => setHeight('auto')}
      onExit={handleCollapse}
      onExiting={() => setHeight(0)}
    >
      <Wrapper
        data-testid="AccordionPanel-Wrapper"
        containerHeight={height}
        isActive={isActive}
        timeout={timeout}
      >
        <div ref={panelRef}>{children}</div>
      </Wrapper>
    </CSSTransition>
  )
}

AccordionPanel.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default AccordionPanel
