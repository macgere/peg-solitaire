import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [target, setTarget] = useState(0)
  const [previousTarget, setPreviousTarget] = useState(0)

  const handleClick = (number) => {
    boardRow0.filter((number) => number = 0)
    setTarget(number)
  };

  useEffect(()=>{
    setPreviousTarget(target)
    console.log(target)
    console.log(previousTarget)
  }, [target])


  const boardRow0 = [0,0,1,1,1,0,0,-1]
  const boardRow1 = [1,1,1,1,1,1,1,-1]
  const boardRow2 = [1,1,1,0,1,1,1,-1]
  const boardRow3 = [1,1,1,1,1,1,1,-1]
  const boardRow4 = [0,0,1,1,1,0,0,-1]
  const board = [boardRow0, boardRow1, boardRow2, boardRow3, boardRow4]


  return (
    <div className="App">
        <div className='row'>
        {board.map((x, rowX) => {
          let row = rowX.toString()
          return x.map((y, position) => {
            let column = position.toString()
            if (y > 0)
              return <button key={row + column} className='peg' onClick={() => handleClick((row + column))}>x</button>
            if (y === -1)
              return <><br></br></>
            else return <button key={row + column} className='space' onClick={() => handleClick((row + column))}>x</button>
          })
        })}
        </div>
    </div>
  );
}

export default App;
