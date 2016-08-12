import React, {Component, PropTypes} from 'react';
import './../styles/score-board-styles.css';

export default class ScoreBoard extends Component {
    static PropTypes = {
        score: PropTypes.number.isRequired,
        frame: PropTypes.number.isRequired,
        pinsLeft: PropTypes.number.isRequired,
        roll: PropTypes.number.isRequired
    }

    render() {
        const {score, frame, pins, roll, strike} = this.props.current;
        return (
            <div className="score-board">
                <div>score: {score}</div>
                <div>frame: {frame}</div>
                <div>Pins Left: {pins}</div>
                <div>roll: {roll}</div>
                <div>extra Roll: {strike.roll}</div>
            </div>
        );
    }
}
