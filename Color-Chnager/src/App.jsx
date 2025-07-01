import { useState } from 'react'
import './App.css'




function App() {

  const [color, setColor] = useState('white');

  return (
    <div className="w-full h-screen flex items-center justify-center" style={{backgroundColor: color}} >
      <div className='fixed flex flex-wrap justify-center'>
        <button className='bg-red-500 text-white p-2 m-2 rounded' onClick={() => setColor('red')}>Red</button>
        <button className='bg-green-500 text-white p-2 m-2 rounded' onClick={() => setColor('green')}>Green</button>
        <button className='bg-blue-500 text-white p-2 m-2 rounded' onClick={() => setColor('blue')}>Blue</button>
        <button className='bg-yellow-500 text-white p-2 m-2 rounded' onClick={() => setColor('yellow')}>Yellow</button>
        <button className='bg-purple-500 text-white p-2 m-2 rounded' onClick={() => setColor('purple')}>Purple</button>
      </div>
    </div>
  )
}

export default App
