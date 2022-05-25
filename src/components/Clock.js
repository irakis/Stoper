import { useEffect, useState } from 'react';
import styles from '../components/Clock.module.css';

const Clock = (props) => {

    const [time, setTime] = useState(0);
    const [stateIntervalId, setIntervalId] = useState(0);

    const timer = () => {
        setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1);
    }

    const timeToDisplay = props.action(time);


    

    const stop = () => {
        if (stateIntervalId) {
            clearInterval(stateIntervalId);
            setIntervalId(0);
            return
        }
        const newIntervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1);
        setIntervalId(newIntervalId);
    
    return () => {
        if (time) clearInterval(timer);
    },[] 
};

return (
    <div className={styles.container}>
        <p className={styles.displayField}>{timeToDisplay}</p>

        <button className={styles.button} onClick={timer}>START</button>

        <button className={styles.button} onClick={e => stop}>STOP</button >

        <button className={styles.button} onClick={e => setTime(time === 0)}> RESET</button >
    </div >
);
};

export default Clock;