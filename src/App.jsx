import { useState } from 'react';  
import './App.css';  // Assume you are using a separate CSS file  

function App() {  
  const [color, setColor] = useState("olive");  

  return (  
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>  
      {/* <div className="button-container">  
        <button className="stylish-button" onClick={() => setColor("red")}>Red</button>  
        <button className="stylish-button" onClick={() => setColor("green")}>Green</button>  
        <button className="stylish-button" onClick={() => setColor("blue")}>Blue</button>  
        <button className="stylish-button" onClick={() => setColor("purple")}>Purple</button>  
      </div>   */}

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-2xl">
        <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-red shadow-lg" style={{backgroundColor:"white"}}>White</button>
        <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=> setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
        </div>
      </div>
    </div>  
  );  
}  

export default App;