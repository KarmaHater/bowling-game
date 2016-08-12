import React, {Component} from 'react';
import '../styles/ball-styles.css';

export default class BowlingBall extends Component {

    handleRollBallClick = ()=> {
        this.props.actions.rollBall();
    }

    render() {
        return (
            <div className="ball-container" onClick={this.handleRollBallClick}>
                <img className="bowling-ball" src="http://simpleicon.com/wp-content/uploads/bowling-ball.png"
                     alt="ball"/>
                <div>Click the ball to play...</div>
            </div>
        );
    }
}
