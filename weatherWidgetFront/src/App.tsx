import { useState } from 'react'

import { ReactLogo } from './assets/ReactLogo'
import './App.css'
import classes from './style.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className={classes.root} />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          {/* <img src={<reactLogo/>} className="logo react" alt="React logo" /> */}
          <ReactLogo />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
