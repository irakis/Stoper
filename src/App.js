import Clock from './components/Clock';
import styles from './App.module.scss';

const App = () => {

  const numberToTime = (time) => {
    let miliseconds = time;
    let hours = Math.floor(miliseconds / 3600000);
    let minutes = Math.floor((miliseconds - (hours * 3600000)) / 60000);
    let seconds = Math.floor((miliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
    let mili_seconds = Math.round(Math.floor(miliseconds - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)) * 10) / 100;

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    return hours + ':' + minutes + ':' + seconds + '.' + mili_seconds;
  }

  return (
    <div className={styles.container}>
      <Clock action={numberToTime} />
    </div>
  );
}

export default App;

