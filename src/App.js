import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [target, setTarget] = useState(0)

  const handleClick = (number) => {
    boardRow0.filter((number) => number = 0)
    setTarget(number)
  };

  useEffect(()=>{
    console.log(target)
  }, [target])


  const boardRow0 = [0,0,1,1,1,0,0]
  const boardRow1 = [1,1,1,1,1,1,1]
  const boardRow2 = [1,1,1,0,1,1,1]
  const boardRow3 = [1,1,1,1,1,1,1]
  const boardRow4 = [0,0,1,1,1,0,0]
  const board = [boardRow0, boardRow1, boardRow2, boardRow3, boardRow4]


  return (
    <div className="App">
        <div>
        {board.map((x, rowX) => {
          let row = rowX.toString()
          return x.map((y, position) => {
            let column = position.toString()
            if (y !== 0)
              return <button key={row + column} className='peg' onClick={() => handleClick((row + column).toString())}>x</button>
            else return <div className='space'>'  '</div>
          })
        })}
        </div>
    </div>
  );
}

export default App;
