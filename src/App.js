import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const handleClick = (index) => {
    if (index == 3) {
      console.log('success!')
    }
  };


  const boardRow0 = [1,1,1]
  const boardRow1 = [1,1,1,1,1,1,1]
  const boardRow2 = [1,1,1,0,1,1,1]
  const boardRow3 = [1,1,1,1,1,1,1]
  const boardRow4 = [1,1,1]


  return (
    <div className="App">
            <div className='row'>
        {boardRow0.map((x, index) => {
          if (x == 1)
            return <button key={index} className='peg' onClick={() => handleClick(index)}>x</button>
          if (x == 0)
            return <div className='space'>O</div>
        })}
        </div>
      <div className='row'>
        {boardRow1.map((x, index) => {
          if (x == 1)
            return <button key={index} className='peg' onClick={() => handleClick(index)}>x</button>
          if (x == 0)
            return <div className='space'>O</div>
        })}
        </div>
        <div className='row'>
          {boardRow2.map((x, index) => {
            if (x == 1)
              return <button key={index} className='peg' onClick={() => handleClick(index)}>x</button>
            if (x == 0)
              return <div className='space'>O</div>
          })}
        </div>
        <div className='row'>
        {boardRow3.map((x, index) => {
          if (x == 1) 
            return <button key={index} className='peg' onClick={() => handleClick(index)}>x</button>
          if (x == 0) 
            return <div className='space'>O</div>
        })}
      </div>
      <div className='row'>
        {boardRow4.map((x, index) => {
          if (x == 1)
            return <button key={index} className='peg' onClick={() => handleClick(index)}>x</button>
          if (x == 0)
            return <div className='space'>O</div>
        })}
        </div>
    </div>
  );
}

export default App;
