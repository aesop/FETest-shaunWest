import * as React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Chevron from '../Icons/Chevron'

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  color: ${(p) => p.isActive && 'blue'};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 0.25rem 0;
  width: 100%;
  outline: none;
`

const Icon = styled.span`
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  transform: ${(p) => p.isActive && 'rotate(180deg)'};
  overflow: hidden;
  transition: 0.25s all;
  svg {
    display: block;
  }
`

const AccordionTrigger = ({ isActive, onClick, header }) => {
  return (
    <Button
      data-testid={`Accordion-Trigger`}
      onClick={onClick}
      isActive={isActive}
    >
      <span>{header}</span>
      <Icon isActive={isActive}>
        <Chevron />
      </Icon>
    </Button>
  )
}

AccordionTrigger.propTypes = {
  isActive: PropTypes.bool,
  header: PropTypes.string,
  onClick: PropTypes.func,
}

export default AccordionTrigger
