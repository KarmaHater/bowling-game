import React, {Component, PropTypes} from 'react';
import '../styles/pin-styles.css';

function makePin() {
    return <img className="bowling-pin" src="http://cliparts.co/cliparts/gTe/o5L/gTeo5Lgac.png" alt="pin"/>;
}

function makePins(pins) {
    return  Array(pins).fill().map(()=> {
        return makePin();
    });
}

export default class BowlingPins extends Component {
    static PropTypes = {
        pins: PropTypes.number.isRequired
    }

    render() {
        const renderPins = makePins(this.props.pins);
        return (
            <div className="bowling-pin-container">{renderPins}</div>
        );
    }
}
