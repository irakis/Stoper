import { numberToTime } from '../App.js';
import { myInterval, myResetInterval, myStopInterval } from '../App'

const Clock = (props) => {

    return (
        <div>
            <input type='text' value={props}>{props.action.numberToTime(props)}</input>

            <button onClick={e => props.action.myStartInterval(props)}>START</button>;

            <button onClick={e => props.action.myStopInterval(props)}>STOP</button >;

            <button onClick={e => props.action.myResetInterval(props)}> RESET</button >;
        </div >
    );
};

export default Clock;