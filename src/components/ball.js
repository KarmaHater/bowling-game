import React, {Component, PropTypes} from 'react';
import '../styles/ball-styles.css';

export default class BowlingBall extends Component {
    static PropTypes = {
        }

    render() {
        return (
            <img className="bowling-ball" src="http://simpleicon.com/wp-content/uploads/bowling-ball.png" alt="ball"/>
        );
    }
}
