import { useEffect, useState } from 'react';
import styles from '../components/Clock.module.css';

const Clock = (props) => {

    const [time, setTime] = useState(0);

    const start = () => {
        setInterval((time) => {
            setTime(prevValue => prevValue + 1);
        }, 1);
    }

    const timeToDisplay = props.action(time);

    const stop =
        useEffect(() => {
            return () => {
                if (time) clearInterval(start);
            };
        }, []);

    return (
        <div className={styles.container}>
            <p className={styles.displayField}>{timeToDisplay}</p>

            <button className={styles.button} onClick={e => start(time)}>START</button>

            <button className={styles.button} onClick={e => stop}>STOP</button >

            <button className={styles.button} onClick={e => setTime(time === 0)}> RESET</button >
        </div >
    );
};

export default Clock;