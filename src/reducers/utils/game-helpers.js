export default class GameHelper {
    static _updatePins(pins, pinsHit, prevRoll) {

        const totalPins = pins - pinsHit;

        if (prevRoll >= 2) {
            console.log(prevRoll)
            return 10;
        } else if(totalPins > 0) {
            return totalPins;
        } else {
            return pins;
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
            return frame;
        }
    }

    static _updateScore(score, pins, pinsHit, frame) {
        const negativeNum = pins - pinsHit;

        if (frame === 10) {
            return 0;
        } else if (negativeNum < 0) {
            return score + pins;
        } else {
            return score + pinsHit;
        }
    }

    static _updateStrikeRoll(strike) {

        if (strike.roll >= 2) {
            return 0;
        } else {
            return strike.roll + 1;
        }
    }

    static _isStrike(totalPins, prevRoll) {

        if (totalPins === 0 && prevRoll === 0) {
            return true;
        } else {
            return false;
        }
    }

    static _updateSpareRoll(spare) {

        if (spare.roll >= 1) {
            return 0;
        } else {
            return spare.roll + 1;
        }
    }

    static _isSpare(totalPins, prevRoll) {

        if (totalPins === 0 && prevRoll === 1) {
            return true;
        } else {
            return false;
        }
    }

    static _isNewGame(frame) {
        if(frame >= 10) {
            return true;
        } else  {

        }
    }

    static  play(prevRoll, frame, pins, score, strike, spare, pinsHit) {
        const totalPins = this._updatePins(pins, pinsHit, prevRoll);
        const nextScore = this._updateScore(score, pins, pinsHit);
        const nextFrame = this._updateFrame(prevRoll, frame, totalPins);
        const isNewGame = this._isNewGame(frame);
        const isStrike = this._isStrike(totalPins, prevRoll);
        const isSpare = this._isSpare(totalPins, prevRoll);

        let result = {
            roll: prevRoll,
            frame: frame,
            score: score,
            strike: {
                roll: strike.roll
            },
            spare: {
                roll: spare.roll
            }

        };

        if(isNewGame) {
            result.roll = 0;
            result.frame = 0;
            result.pins = 10;
            result.score = 0;
            result.strike.roll = 0;
            result.spare.roll = 0;

        } else if(isStrike || strike.roll > 0) {

            const strikeRoll = this._updateStrikeRoll(strike);
            result.pins = totalPins;
            result.score = nextScore;
            result.strike.roll = strikeRoll;

        } else if (isSpare || spare.roll > 0) {

            const spareRoll = this._updateSpareRoll(spare);
            result.pins = totalPins;
            result.score = nextScore;
            result.spare.roll = spareRoll;

        } else if (totalPins === 0) {

            result.roll = 0;
            result.frame = frame + 1;
            result.pins = 10;
            result.score = nextScore;

        } else {
            result.roll = this._updateRoll(prevRoll);
            result.frame = nextFrame;
            result.pins = totalPins;
            result.score = nextScore;

        }

        return result;

    }

}