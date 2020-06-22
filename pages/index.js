import * as React from 'react'
import { Basic, Combined, Animated, bounce } from '../shared/styles'

const Home = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Lets bounce.</Animated>
  </div>
)

export default Home
