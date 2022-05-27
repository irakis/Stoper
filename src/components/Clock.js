import { useEffect, useState } from 'react';
import styles from '../components/Clock.module.scss';

const Clock = (props) => {

    const [time, setTime] = useState(0);
    const [isStopped, setIsStopped] = useState(true);

    const timeToDisplay = props.action(time);

    useEffect(() => {
        let interval = null;
        if (!isStopped) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isStopped]);

    return (
        <div className={styles.main_container}>
            <p className={styles.displayField}>{timeToDisplay}</p>
            <button className={styles.button_left} onClick={e => setIsStopped(false)}>START</button>
            <button className={styles.button} onClick={e => setIsStopped(true)}>STOP</button >
            <button className={styles.button_right} onClick={e => setTime(time === 0)}> RESET</button >
        </div >
    );
};

export default Clock;