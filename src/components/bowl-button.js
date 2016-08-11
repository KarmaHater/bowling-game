import React, {Component, PropTypes} from 'react';
import '../styles/bowl-button-styles.css';

export default class BowlingBall extends Component {
    static PropTypes = {
    }

    render() {
        return (
            <div className="bowl-button">Click to roll the ball</div>
        );
    }
}
