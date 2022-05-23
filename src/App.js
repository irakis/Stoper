import { useState, useEffect } from 'react';
import Clock from './components/Clock';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const clockFunctions = {};

  const start = setInterval(() => {
      setTime(preValue => preValue + 1);
    }, 1);

  clockFunctions.myStartInterval = start;

  const myStopInterval = clearInterval(clockFunctions.myStartInterval);
  //clearInterwal nie działa, xle napisana?

  clockFunctions.myResetInterval = setTime(time == 0);

  clockFunctions.numberToTime = (time) => {
    const miliseconds = parseInt(time, 10);
    const hours = Math.floor(miliseconds / 3600000);
    const minutes = Math.floor((miliseconds - (hours * 3600000)) / 60000);
    const seconds = Math.floor((miliseconds - (hours * 3600000) - (minutes * 60000))/1000);
    const mili_seconds = miliseconds - seconds * 1000;
    console.log(miliseconds,' : ', hours, ' : ',minutes, ' : ' ,seconds, ' . ',mili_seconds);
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds + '.' + mili_seconds;
    //return nie działa
  }

  console.log('numberToTime: ',clockFunctions.numberToTime(1003));

  return (
    <div className={styles.container}>
        <Clock porps={time} action={clockFunctions} />
    </div>
  );
}


export default App;

