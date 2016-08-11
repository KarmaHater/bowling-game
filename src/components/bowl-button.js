import React, {Component, PropTypes} from 'react';
import '../styles/bowl-button-styles.css';

export default class BowlingBall extends Component {
    static PropTypes = {}

    handleRollBallClick = ()=> {
        this.props.actions.rollBall()
    }

    render() {
        return (
            <div onClick={this.handleRollBallClick} className="bowl-button">
                Click to roll the ball
            </div>
        );
    }
}
