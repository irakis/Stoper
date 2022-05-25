import { useEffect, useState } from 'react';
import styles from '../components/Clock.module.css';

const Clock = (props) => {

    const [time, setTime] = useState(0);
    const [isStopped, setIsStopped] = useState(true);

    const timeToDisplay = props.action(time);

    useEffect(() => {
        let interval = null;
        if (!isStopped) {
            interval = //dlaczego jak wpiszę let interval, stop przestaje działać?
                setInterval(() => {
                    setTime(prevTime => prevTime + 1);
                }, 1);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isStopped]);

    return (
        <div className={styles.container}>
            <p className={styles.displayField}>{timeToDisplay}</p>

            <button className={styles.button} onClick={e => setIsStopped(false)}>START</button>
            <button className={styles.button} onClick={e => setIsStopped(true)}>STOP</button >
            <button className={styles.button} onClick={e => setTime(time === 0)}> RESET</button >
        </div >
    );
};

export default Clock;