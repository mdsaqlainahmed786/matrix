import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [matrixState, setMatrixState] = useState();
  const [matrixIndexes, setMatrixIndexes] = useState([]);
  const [lastIndexColor, setLastIndexColor] = useState(Boolean);

  const handleChangeColor = (index) => {
    console.log("Clicked Index>>>", index);
    if (matrixIndexes.includes(index)) {
      console.log("Already Clicked>>>>", index);
      return;
    }
    setMatrixState(index);

    setMatrixIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes, index];
      console.log("Stored Matrix>>>>", updatedIndexes);
      return updatedIndexes;
    });
    if (index === 8) {
      console.log("This must be orange>>>>>>>>>>>>>>>>>>>>");
      setLastIndexColor(true);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center w-full max-w-[80vw]">
          <p className="font-semibold text-2xl py-10">Edxso assignment a 3x3 matrix</p>
          <div className="h-10 w-49">
            <div className="grid grid-cols-3 gap-2 w-[calc(var(--spacing) * 50)]">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeColor(index)}
                  className={`w-16 h-16 flex items-center justify-center border cursor-pointer ${
                    matrixState === index && index !== 8
                      ? "bg-green-500"
                      : "bg-gray-200"
                  } ${
                    lastIndexColor && matrixIndexes.includes(index)
                      ? "bg-orange-500"
                      : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
          className="mt-52 cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-300"
          onClick={() => {
            setMatrixState();
            setMatrixIndexes([]);
            setLastIndexColor(false);
          }}
        >
          Reset
        </button>
    </>
  );
}

export default App;
