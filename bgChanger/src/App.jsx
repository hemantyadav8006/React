import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('#212121')

  return (
    <div className='w-full h-screen duration-1000' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}}
          onClick={() => setColor("yellow")}
          >Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "pink"}}
          onClick={() => setColor("pink")}
          >Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "wheat"}}
          onClick={() => setColor("wheat")}
          >Wheat</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "gray"}}
          onClick={() => setColor("gray")}
          >Gray</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "silver"}}
          onClick={() => setColor("silver")}
          >Silver</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "gold"}}
          onClick={() => setColor("gold")}
          >Gold</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}
          onClick={() => setColor("white")}
          >White</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}
          >Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
