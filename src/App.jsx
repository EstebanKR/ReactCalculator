import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Evaluar la expresión (uso limitado por seguridad)
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-72">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right text-lg border rounded mb-2"
        />
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? handleCalculate() : handleClick(char)
              }
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded text-lg"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
