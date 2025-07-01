import { useState,useCallback,useEffect,useRef, use } from 'react'
import './App.css'

function App() {
   const [length, setLength] = useState(8);
   const [nAllowed, setNAllowed] = useState(false);
   const [sAllowed, setSAllowed] = useState(false);
   const [password, setPassword] = useState('');
   const passwordRef = useRef(null);
   const passwordGenerator = useCallback(()=>{
    let pass= '';
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(nAllowed) characters += '0123456789';
    if(sAllowed) characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * characters.length+1);
      //pass += characters[char];
      pass += characters.charAt(char);
      
    }
    setPassword(pass);
   },[length,sAllowed,nAllowed,setPassword]);

   useEffect(()=>{
    passwordGenerator();
   },[length,nAllowed,sAllowed,passwordGenerator]);

  const copyClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4); // For mobile devices
    window.navigator.clipboard.writeText(password)
  },[password]);

  return (
    <>
    <div className='w-full text-center px-4 my-8 max-w-md mx-auto shadow-md rounded-lg text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow-rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none bg-white w-full py-1 px-3 '
        placeholder='Password' readOnly ref={passwordRef}/>
        <button onClick={copyClip} className='rounded'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label >Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={nAllowed}
          onChange={(e)=>setNAllowed((prev)=>!prev)}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={sAllowed}
          onChange={(e)=>setSAllowed((prev)=>!prev)}
           />
           <label>Symbol</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
