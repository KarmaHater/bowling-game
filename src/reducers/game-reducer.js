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


export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.DUMMY:
            return {
                ...state
            };
        default:
            return state;
    }
};

