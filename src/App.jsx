import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "red", "blue", "green", "white", "purple", "yellow", "pink", "orange", "lavender",
    "teal", "indigo", "cyan", "beige", "brown", "gray", "maroon", "salmon", "skyblue",
    "lime", "gold", "navy", "mintcream", "hotpink", "coral", "darkgreen"
  ];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-2xl max-w-[90%]">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
              style={{
                backgroundColor: clr,
                color: ["white", "beige", "yellow", "mintcream", "lavender", "cyan"].includes(clr) ? "black" : "white"
              }}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
