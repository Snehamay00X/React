import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card name="Snehamay" txt="Click Me" />
     <Card name ="Sayan" txt="Click Me Sayan"/> 
    </>
  )
}

export default App
