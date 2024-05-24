import { useState } from 'react'
import Hero from './components/heero/hero'
import Content from './components/content/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Content />
    </>
  )
}

export default App
