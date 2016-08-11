import * as Constants from '../constants/constants.js';

const initialState = {
    current: {
        roll: 0,
        frame: 0,
        pinsLeft: 10,
        score: 0
    },
    rules: {
        frameTotal: 10,
        rollTotal: 2
    }
};

function pinStanding(pinsLeft, pinsHit) {
    const pins = pinsLeft - pinsHit;
    if( pins >= 0) {
        return pins;
    } else {
        return 0;
    }
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.ROLL_BALL:
            return {
                ...state,
                current: {
                    pinsLeft: pinStanding(state.current.pinsLeft, action.data)
                }
            };
        default:
            return state;
    }
};

