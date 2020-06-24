import * as React from 'react'
import styled from '@emotion/styled'

import Accordion from '../Accordion/Accordion'

import { store } from '../../stores/product'

const Backdrop = styled.div`
  background: black;
  max-width: 100vw;
  pointer-events: ${(p) => (p.isActive ? 'all' : 'none')};
  position: fixed;
  opacity: ${(p) => (p.isActive ? 0.5 : 0)};
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s opacity;
  z-index: 1;
`

const Wrapper = styled.div`
  background: white;
  height: 100%;
  max-width: calc(100% - 2rem);
  opacity: ${(p) => (p.isActive ? 1 : 0)};
  overflow-x: auto;
  padding: 1rem;
  pointer-events: ${(p) => (p.isActive ? 'all' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  transform: ${(p) =>
    p.isActive ? 'translate3d(0, 0, 0)' : 'translate3d(-2rem, 0, 0)'};
  transition: 0.25s all;
  z-index: 2;
  width: 400px;
`

const VariantWrapper = styled.div`
  background-color: rgba(0, 0, 10, 0.025);
  border-radius: 0.5rem;
  padding: 1rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const Product = () => {
  const { dispatch, state: product } = React.useContext(store)

  return (
    <article>
      <Backdrop
        isActive={!!product}
        onClick={() => dispatch({ type: 'clear' })}
      />
      <Wrapper isActive={!!product}>
        <h1>{product?.name}</h1>
        <p>{product?.price}</p>

        {product?.variants && (
          <Accordion PanelWrapper={VariantWrapper}>
            {product?.variants.map((v, index) => (
              <div header={v.name} key={v.name}>
                <div>{v.sku}</div>
                <div>{v.price}</div>
              </div>
            ))}
          </Accordion>
        )}
      </Wrapper>
    </article>
  )
}

export default Product
