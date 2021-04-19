import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(isRunning) {
      const id = window.setInterval(() => setSeconds(seconds => seconds + 1), 1500);
      return () => window.clearInterval(id);
    }
  }, [isRunning]);


  return (
    <div className="app">
      <div className='time-circle'>
        <div className="time">
          {seconds}
        </div>
      </div>
      <div disabled={isRunning} className="buttons">
        {isRunning ? (
          <button className="play-pause" onClick={() => {
            setIsRunning(false);
          }}>
            <i className="fa fa-pause fa-2x" />
          </button>
        ) : (
          <button className="play-pause" onClick={() => {
            setIsRunning(true);
          }}>
            <i className="fa fa-play fa-2x" />
          </button>
        )}
        <button className="reset" onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
