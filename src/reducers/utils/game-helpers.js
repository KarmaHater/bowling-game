export default class GameHelper {
    static _updatePins(pins, pinsHit) {
        const totalPins = pins - pinsHit;
        if (totalPins >= 0) {
            return totalPins;
        } else {
            return 0;
        }
    }

    static _updateRoll(prevRoll) {
        if (prevRoll >= 2) {
            return 0;
        } else {
            return prevRoll + 1;
        }
    }

    static _updateFrame(roll, frame) {
        if (frame >= 10 && roll === 2) {
            return 0;
        } else if (roll === 2) {
            return frame + 1;
        } else {
            return frame
        }
    }

    static _updateScore(score, pins, pinsHit) {
        const negativeNum = pins - pinsHit;
        if (negativeNum < 0) {
            return score + pins;
        } else {
            return score + pinsHit
        }
    }

    static  play(prevRoll, frame, pins, score, pinsHit) {
        const totalPins = this._updatePins(pins, pinsHit);
        const nextScore = this._updateScore(score, pins, pinsHit);

        if (totalPins === 0) {
            return {
                roll: 0,
                frame: frame + 1,
                pins: 10,
                score: nextScore
            }
        } else {
            return {
                roll: this._updateRoll(prevRoll),
                frame: this._updateFrame(prevRoll, frame),
                pins: totalPins,
                score: nextScore
            }
        }

    }

}