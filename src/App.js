import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [position, setPosition] = useState([][0])

  const handleClick = (event) => {
      setPosition(event.currentTarget.index)
  };


  const boardRow1 = [1,1,1,1,1]
  const boardRow2 = [1,1,0,1,1]
  const boardRow3 = [1,1,1,1,1]

  return (
    <div className="App">
      <div className='row'>
        {boardRow1.map((x) => {
          if (x == 1)
            return <button key={x.id} className='peg' onClick={handleClick(index)}>x</button>
          if (x == 0)
            return <div className='space'>O</div>
        })}
        </div>
        <div className='row'>
          {boardRow2.map((x) => {
            if (x == 1)
              return <button key={x.id} className='peg' onClick={handleClick(index)}>x</button>
            if (x == 0)
              return <div className='space'>O</div>
          })}
        </div>
        <div className='row'>
        {boardRow3.map((x) => {
          if (x == 1) 
            return <button key={x.id} className='peg' onClick={handleClick(index)}>x</button>
          if (x == 0) 
            return <div className='space'>O</div>
        })}
      </div>
    </div>
  );
}

export default App;
