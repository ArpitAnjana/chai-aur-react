import { useState } from "react";

function App(){
  const [color, setColor] = useState('olive');



  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2  ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg p-2 bg-white rounded-3xl">
          <button 
          onClick={()=> setColor('red')}
          className="outline-none px-6 py-2 rounded-full text-white" 
          style={{backgroundColor: "red"}}>
            red
          </button>

          <button 
          onClick={()=> setColor("greenyellow")}
          className="outline-none px-6 py-2 rounded-full text-white" 
          style={{backgroundColor: "greenyellow"}}>
            green-y
          </button>

          <button 
          onClick={()=> setColor("blueviolet")}
          className="outline-none px-6 py-2 rounded-full text-white" 
          style={{backgroundColor: "blueviolet"}}>
            blue-v
          </button>

          <button 
          onClick={()=> setColor("purple")}
          className="outline-none px-6 py-2 rounded-full text-white" 
          style={{backgroundColor: "purple"}}>
            purple
          </button>
          
        </div>
      </div>
        
    </div>

  )
}

export default App;