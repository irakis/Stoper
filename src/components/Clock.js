import styles from '../components/Clock.module.scss';
import { numberToTime } from '../App.js';
import { myInterval, myResetInterval, myStopInterval } from '../App'

const Clock = (props) => {

    return (
        <div>
            <input className={styles.input} type='text' value={props}>{props.action.numberToTime(props)}</input>

            <button className={styles.button} onClick={e => props.action.myStartInterval(props)}>START</button>;

            <button className={styles.button} onClick={e => props.action.myStopInterval(props)}>STOP</button >;

            <button className={styles.button} onClick={e => props.action.myResetInterval(props)}> RESET</button >;
        </div >
    );
};

export default Clock;