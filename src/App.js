import logo from "./logo.svg";
import "./App.css";
import Field from "./components/field";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState([
    [" ", " ", "X", "X", "X", " ", " "],
    [" ", " ", "X", "X", "X", " ", " "],
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "O", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X"],
    [" ", " ", "X", "X", "X", " ", " "],
    [" ", " ", "X", "X", "X", " ", " "],
  ]);

  const [selection, setSelection] = useState([]);

  function onSelect(x, y) {
    if (board[y][x] !== " ") {
      if (board[y][x] === "X") {
        setSelection([x, y]);
      } else if (board[y][x] === "O") {
        if (selection !== []) {
          if (x === selection[0] && y === selection[1] - 2) {
            if (board[selection[1] - 1][selection[0]] === "X") {
              const newBoard = [...board];
              newBoard[selection[1]][selection[0]] = "O";
              newBoard[selection[1] - 1][selection[0]] = "O";
              newBoard[y][x] = "X";
              setSelection([]);
              setBoard(newBoard);
            }
          } else if (x === selection[0] && y === selection[1] + 2) {
            if (board[selection[1] + 1][selection[0]] === "X") {
              const newBoard = [...board];
              newBoard[selection[1]][selection[0]] = "O";
              newBoard[selection[1] + 1][selection[0]] = "O";
              newBoard[y][x] = "X";
              setSelection([]);
              setBoard(newBoard);
            }
          } else if (x === selection[0] - 2 && y === selection[1]) {
            if (board[selection[1]][selection[0] - 1] === "X") {
              const newBoard = [...board];
              newBoard[selection[1]][selection[0]] = "O";
              newBoard[selection[1]][selection[0] - 1] = "O";
              newBoard[y][x] = "X";
              setSelection([]);
              setBoard(newBoard);
            }
          } else if (x === selection[0] + 2 && y === selection[1]) {
            if (board[selection[1]][selection[0] + 1] === "X") {
              const newBoard = [...board];
              newBoard[selection[1]][selection[0]] = "O";
              newBoard[selection[1]][selection[0] + 1] = "O";
              newBoard[y][x] = "X";
              setSelection([]);
              setBoard(newBoard);
            }
          }
        }
      }
    }
  }

  console.log("rerender!");

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-board">
      {board.map((row, y) => (
        <div className="flex">
          {row.map((cell, x) => (
            <Field
              state={x === selection[0] && y === selection[1] ? "S" : cell}
              onClick={() => {
                onSelect(x, y);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
