import * as React from 'react'
import Accordion from '../Accordion'
import { render } from '@testing-library/react'

describe('Accordion Component', () => {
  it('Panel element to render with expected value', () => {
    const title = 'Mock header title'
    const panel = 'Mock panel content'

    const { getByTestId } = render(
      <Accordion initialActiveId="MockId">
        <Accordion.Panel header={title} id="MockId">
          <div>{panel}</div>
        </Accordion.Panel>
      </Accordion>
    )

    const elTrigger = getByTestId('Accordion-Trigger')
    const elPanel = getByTestId('AccordionPanel-Wrapper')

    expect(elTrigger.textContent).toContain(title)
    expect(elPanel.textContent).toContain(panel)
  })
})
