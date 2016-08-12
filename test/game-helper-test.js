var expect = require('chai').expect;
import Game from '../src/reducers/utils/game-helpers.js';

describe('Reducers utils Game Helper', () => {

    describe('_updatePins update pins correct', () => {

        it('should return pinsHit if positive number', () => {
            const pins = 10;
            const pinsHit = 6;
            const totalPins = Game._updatePins(pins, pinsHit);
            const result = 4;
            expect(totalPins).to.eql(result);
        });

        it('should return 0 if negative number', () => {
            const pins = 6;
            const pinsHit = 8;
            const totalPins = Game._updateRoll(pins, pinsHit);
            const result = 0;
            expect(totalPins).to.eql(result);
        });
    });

    describe('_updateRoll update rolls correct', () => {

        it('should add one to roll count', () => {
            const roll = 0;
            const totalRolls = Game._updateRoll(roll);
            const result = 1;
            expect(totalRolls).to.eql(result)
        });

        it('should reset the roll count', () => {
            const roll = 2;
            const totalRolls = Game._updateRoll(roll);
            const result = 0;
            expect(totalRolls).to.eql(result);
        });
    });

    describe('_updateFrame update frame correct', () => {
        const roll = 2;

        it('should add one to frame count', () => {
            const frame = 3;
            const frameNumber = Game._updateFrame(roll, frame);
            const result = 4;
            expect(frameNumber).to.eql(result)
        });

        it('should reset frame count for new game', () => {
            const frame = 10;
            let frameNumber = Game._updateFrame(roll, frame);
            let result = 0;
            expect(frameNumber).to.eql(result);
        });
    });

    describe('_updateScore update score correct', () => {

        const score = 100;
        const result = 103;

        it('should add pins hit with positive number', () => {
            const pins = 10;
            const pinsHit = 3;
            const totalScore = Game._updateScore(score, pins, pinsHit);
            expect(totalScore).to.eql(result);
        });

        it('should add pins left with negative number', () => {
            const pins = 3;
            const pinsHit = 4;
            const totalScore = Game._updateScore(score, pins, pinsHit);
            expect(totalScore).to.eql(result);
        });
    });

    describe('_isStrick checks if strike conditions are meet', () => {

        it('should return true if it is the first roll and all pins are hit', () => {
            const pins = 0;
            const roll = 0;
            const isStrike = Game._isStrike(pins, roll);
            const result = true;
            expect(isStrike).to.eql(result);
        });

        it('should return false if it is not the first roll and pins are standing', () => {
            const pins = 0;
            const roll = 2;
            const isStrike = Game._isStrike(pins, roll);
            const result = false;
            expect(isStrike).to.eql(result);
        });
    });

    describe('_updateStrike update strike object correctly', () => {

        it('should update strike rolls by one', () => {
            const strike = {
                roll: 0
            };
            const isStrike = Game._updateStrikRoll(strike);
            const result = 1;
            expect(isStrike).to.eql(result);
        });

        it('should reset strike rolls by one', () => {
            const strike = {
                roll: 2
            };
            const isStrike = Game._updateStrikRoll(strike);
            const result = 0;
            expect(isStrike).to.eql(result);
        });
    });

});