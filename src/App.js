import { useState } from 'react';
import Clock from './components/Clock';
import './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const clockFunctions = {};

  const start = setInterval((time) => {
      setTime(preValue => preValue + 1);
    }, 1);

  clockFunctions.myStartInterval = start;

  clockFunctions.myStopInterval = clearInterval(clockFunctions.myStartInterval);
  //clearInterwal nie działa, xle napisana?

  clockFunctions.myResetInterval = setTime(time === 0);

  const numberToTime = () => {
    const miliseconds = parseInt(time, 10);
    let hours = Math.floor(miliseconds / 3600000);
    let minutes = Math.floor((miliseconds - (hours * 3600000)) / 60000);
    let seconds = Math.floor((miliseconds - (hours * 3600000) - (minutes * 60000))/1000);
    let mili_seconds = miliseconds - seconds * 1000;
  
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds + '.' + mili_seconds;
    //return nie działa
  }

  

  return (
    <div>
        <Clock porps={time} action={clockFunctions} />
    </div>
  );
}


export default App;

