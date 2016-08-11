function updatePins(pins, pinsHit) {
    const totalPins = pins - pinsHit;
    if (totalPins >= 0) {
        return totalPins;
    } else {
        return 0;
    }
}

function updateRoll(prevRoll) {
    if (prevRoll >= 2) {
        return 0;
    } else {
        return prevRoll + 1;
    }
}

function updateFrame(roll, frame) {
    if (frame >= 10 && roll === 2) {
        return 0;
    } else if (roll === 2) {
        return frame + 1;
    } else {
        return frame
    }
}

function updateScore(score, pins, pinsHit) {
    const negativeNum = pins - pinsHit;
    if (negativeNum < 0) {
        return score + pins;
    } else {
        return score + pinsHit
    }
}

export default class GameHelper {

    static  play(prevRoll, frame, pins, score, pinsHit) {
        const totalPins = updatePins(pins, pinsHit);
        const nextScore = updateScore(score, pins, pinsHit);

        if (totalPins === 0) {
            return {
                roll: 0,
                frame: frame + 1,
                pins: 10,
                score: nextScore
            }
        } else {
            return {
                roll: updateRoll(prevRoll),
                frame: updateFrame(prevRoll, frame),
                pins: totalPins,
                score: nextScore
            }
        }

    }

}