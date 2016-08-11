
var expect = require('chai').expect;
import Game from '../src/reducers/utils/game-helpers.js';

describe('Reducers utils Game Helper', () => {

    describe('_updatePins update pins correct', () => {
        it('should return pinsHit if positive number', () => {
            const pins = 10
            const pinsHit = 6
            let totalPins = Game._updatePins(pins, pinsHit)
            console.log(totalPins, "to")
            let result = 4;
            expect(totalPins).to.eql(result)
        });

        it('should return 0 if negative number', () => {
            const pins = 6
            const pinsHit = 8
            let totalPins = Game._updateRoll(pins, pinsHit)
            let result = 0;
            expect(totalPins).to.eql(result)
        });
    });

    describe('_updateRoll update rolls correct', () => {
        it('add ones', () => {
            const roll = 0
            let totalRolls = Game._updateRoll(roll)
            let result = 1;
            expect(totalRolls).to.eql(result)
        });

        it('reset the rolls', () => {
            const roll = 2
            let totalRolls = Game._updateRoll(roll)
            let result = 0;
            expect(totalRolls).to.eql(result)
        });
    });

});