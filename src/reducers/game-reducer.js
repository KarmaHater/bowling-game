import * as Constants from '../constants/constants.js';
import Game from './game-helpers.js';

const initialState = {
    current: {
        roll: 0,
        frame: 0,
        pins: 10,
        score: 0
    },
    rules: {
        frameTotal: 10,
        rollTotal: 2
    }
};




export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.ROLL_BALL:
            return {
                ...state,
                current: Game.play(state.current.roll,
                    state.current.frame,
                    state.current.pins,
                    state.current.score,
                    action.data)
            };
        default:
            return state;
    }
};

