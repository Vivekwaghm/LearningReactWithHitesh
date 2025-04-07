import { useState } from "react";


function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={() => setBgColor("red")} className="outline-none px-4 rounded-full text-white shadow-2xl" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setBgColor("green")} className="outline-none px-4 rounded-full text-white shadow-2xl" style={{backgroundColor: "green"}}>green</button>
        <button onClick={() => setBgColor("blue")} className="outline-none px-4 rounded-full text-white shadow-2xl" style={{backgroundColor: "blue"}}>blue</button>
        <button onClick={() => setBgColor("violet")} className="outline-none px-4 rounded-full text-white shadow-2xl" style={{backgroundColor: "violet"}}>violet</button>
        <button onClick={() => setBgColor("yellow")} className="outline-none px-4 rounded-full text-black shadow-2xl" style={{backgroundColor: "yellow"}}>yellow</button>
        <button onClick={() => setBgColor("white")} className="outline-none px-4 rounded-full text-black shadow-2xl" style={{backgroundColor: "white"}}>white</button>
        </div>
      </div>
    </div>
  )
}

export default App
