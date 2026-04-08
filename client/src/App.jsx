import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <body>
    <section>
      <h1>Catholic <span>Fide</span></h1>
      <p>
        Defending the <span>Faith</span> and Defending the <span>Truth</span>
      </p>
      <p>Second Round of tests</p>
      <a> Learn More</a>
    </section>
  </body>
    </>
  )
}

export default App
