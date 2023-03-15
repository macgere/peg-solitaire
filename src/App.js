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


  const boardRow0 = [1,2,3]
  const boardRow1 = [1,2,3,4,5,6,7]
  const boardRow2 = [1,2,3,0,5,6,7]
  const boardRow3 = [1,2,3,4,5,6,7]
  const boardRow4 = [1,2,3]
  const board = [boardRow0, boardRow1, boardRow2, boardRow3, boardRow4]


  return (
    <div className="App">
            {/* <div className='row'>
        {boardRow0.map((x) => {
          if (x !== 0)
            return <button key={x} className='peg' onClick={() => handleClick(x)}>x</button>
          if (x == 0)
            return <div key={x} className='space'>O</div>
        })}
        </div>
      <div className='row'>
        {boardRow1.map((x) => {
          if (x !== 0)
            return <button key={x} className='peg' onClick={() => handleClick(x)}>x</button>
          if (x == 0)
            return <div className='space'>O</div>
        })}
        </div>
        <div className='row'>
          {boardRow2.map((x) => {
            if (x !== 0)
              return <button key={x} className='peg' onClick={() => handleClick(x)}>x</button>
            if (x == 0)
              return <div className='space'>O</div>
          })}
        </div>
        <div className='row'>
        {boardRow3.map((x) => {
          if (x !== 0) 
            return <button key={x} className='peg' onClick={() => handleClick(x)}>x</button>
          if (x == 0) 
            return <div className='space'>O</div>
        })}
      </div>
      <div className='row'>
        {boardRow4.map((x) => {
          if (x !== 0)
            return <button key={x} className='peg' onClick={() => handleClick(x)}>x</button>
          if (x == 0)
            return <div className='space'>O</div>
        })}
        </div> */}
        <div>
        {board.map((x) => {
          return x.map((y) => {
            if (y !== 0)
              return <button key={y} className='peg' onClick={() => handleClick(y)}>x</button>
            if (y == 0)
              return <div className='space'>O</div>
          })
        })}
        </div>
    </div>
  );
}

export default App;
