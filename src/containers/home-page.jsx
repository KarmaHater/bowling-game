import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as GameActions from './../actions/game-actions.js';
import ScoreBoard from './../components/score-board.js';
import ButtonBowl from '../components/bowl-button.js';
import Pins from './../components/bowling-pins.js';

class HomePage extends Component {
    render() {
        const {current} = this.props;
        return (
            <div>
                <ScoreBoard current={current}/>
                <ButtonBowl actions={this.props.actions}/>
                <Pins pins={current.pins}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rules: state.game.rules,
        current: state.game.current
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(GameActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);