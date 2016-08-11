import * as Constants from '../constants/constants.js';

export function rollBall() {
    const pinsHit = Math.floor((Math.random() * 10));
    return {
        type: Constants.ROLL_BALL,
        data: pinsHit
    };
}
