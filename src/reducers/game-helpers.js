export default class GameHelper {
    static updatePins(pinsLeft, pinsHit) {
        const pins = pinsLeft - pinsHit;
        if (pins >= 0) {
            return pins;
        } else {
            return 0;
        }
    }

    static updateRoll(prevRoll) {
        if (prevRoll >= 2) {
            return 0;
        } else {
            return prevRoll + 1;
        }
    }

    static updateFrame(roll, frame) {
        if (frame >= 10 && roll === 2) {
            return 0;
        } else if (roll === 2) {
            return frame + 1;
        } else {
            return frame
        }
    }

    static updateScore(score, pinsHit) {
        return score + pinsHit
    }

    static play(prevRoll, frame, pinsLeft, score, pinsHit) {
        const game = {
            roll: this.updateRoll(prevRoll),
            frame: this.updateFrame(prevRoll, frame),
            pinsLeft: this.updatePins(pinsLeft, pinsHit),
            score: this.updateScore(score, pinsHit)
        }

        return game;
    }

}