export default class GameHelper {
    static pinStanding(pinsLeft, pinsHit) {
        const pins = pinsLeft - pinsHit;
        if( pins >= 0) {
            return pins;
        } else {
            return 0;
        }
    }

    static updateRoll(prevRoll) {
        console.log(prevRoll)
        if( prevRoll >= 2) {
            return 0;
        } else {
            return prevRoll + 1;
        }
    }

    static updateFrame(roll, frame) {
        console.log(frame, "frame")
        console.log(roll, "roll")
        if( frame >= 10 && roll === 2) {
            return 0;
        } else if (roll === 2) {
            return frame + 1;
        } else {
            return frame
        }
    }
}