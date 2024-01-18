import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : 'Arpit Anjana',
    age: 20
  }

  let newArray = [1,2,3,4];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className='bg-green-400 text-white p-5 rounded-xl'>Tailwind test</h1>
      <div className="flex justify-center space-x-5">
        <Card username={myobj.username} age={myobj.age} btnText="click me" />
        <Card username='soxy' />
      </div>
    </div>
  )
}

export default App
