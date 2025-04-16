import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("#212121");

  const colors = [
    "red",
    "yellow",
    "green",
    "blue",
    "pink",
    "wheat",
    "gray",
    "silver",
    "gold",
    "white",
    "purple",
  ];

  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
          {colors &&
            colors.length > 0 &&
            colors.map((c) => (
              <button
                className="outline-none px-4 py-1 font-semibold rounded-full text-black shadow-lg"
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              >
                {c.toUpperCase()}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
