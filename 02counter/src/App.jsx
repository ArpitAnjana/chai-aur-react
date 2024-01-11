import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 0;
  let [counter, setCounter] = useState(0);
  //counter variable he , setCounter function he 
  const addit = () => {
    counter = counter+1;

    if(counter>20){
      counter = 20;
    }
      setCounter(counter);
      console.log(counter)
  }

  const deductValue = () => {
    counter = counter - 1;
  
    if(counter<0){
      counter = 0;
    }
    console.log(counter)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <div className='btn'>
        <button
          onClick={addit}
        >add value</button>
        <button
          onClick={deductValue}
        >deduct value</button>
        <p>the result is : {counter}</p>

      </div>
    </>
  )
}

export default App
