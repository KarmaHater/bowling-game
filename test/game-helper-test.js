var expect = require('chai').expect;
import Game from '../src/reducers/utils/game-helpers.js';

describe('Reducers utils Game Helper', () => {

    describe('_updatePins update pins correct', () => {

        it('should return pinsHit if positive number', () => {
            const roll = 1
            const pins = 10;
            const pinsHit = 6;
            const totalPins = Game._updatePins(pins, pinsHit, roll);
            const result = 4;
            expect(totalPins).to.eql(result);
        });

        it('should return 0 if negative number', () => {
            const roll = 1
            const pins = 6;
            const pinsHit = 8;
            const totalPins = Game._updateRoll(pins, pinsHit, roll);
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

        it('should add pins hit with positive number', () => {
            const score = 100;
            const pins = 10;
            const pinsHit = 3;
            const frame = 4;
            const result = 103;
            const totalScore = Game._updateScore(score, pins, pinsHit, frame);
            expect(totalScore).to.eql(result);
        });

        it('should reset score if frame is equal to ten', () => {
            const score = 100;
            const pins = 3;
            const pinsHit = 4;
            const frame = 10;
            const result = 0;
            const totalScore = Game._updateScore(score, pins, pinsHit, frame);
            expect(totalScore).to.eql(result);
        });

        it('should add pins left with negative number', () => {
            const score = 100;
            const pins = 3;
            const pinsHit = 4;
            const frame = 4;
            const result = 103;
            const totalScore = Game._updateScore(score, pins, pinsHit, frame);
            expect(totalScore).to.eql(result);
        });
    });

    describe('_isStrike checks if strike conditions are meet', () => {

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

    describe('_updateStrikeRoll update strike object correctly', () => {

        it('should update strike rolls by one', () => {
            const strike = {
                roll: 1
            };
            const strikeRoll = Game._updateStrikeRoll(strike);
            const result = 2;
            expect(strikeRoll).to.eql(result);
        });

        it('should reset strike rolls', () => {
            const strike = {
                roll: 2
            };
            const strikeRoll = Game._updateStrikeRoll(strike);
            const result = 0;
            expect(strikeRoll).to.eql(result);
        });
    });

    describe('_isSpare checks if strike conditions are meet', () => {

        it('should return true if the first spare roll and all pins are hit', () => {
            const pins = 0;
            const roll = 1;
            const isSpare = Game._isSpare(pins, roll);
            const result = true;
            expect(isSpare).to.eql(result);
        });

        it('should return false if the first spare roll equal 0', () => {
            const pins = 0;
            const roll = 0;
            const isSpare = Game._isSpare(pins, roll);
            const result = false;
            expect(isSpare).to.eql(result);
        });
    });

    describe('_updateSpareRoll checks if spare conditions are meet', () => {

        it('should update strike rolls by one', () => {
            const spare = {
                roll: 0
            };
            const spareRoll = Game._updateSpareRoll(spare);
            const result = 1;
            expect(spareRoll).to.eql(result);
        });

        it('should reset strike rolls', () => {
            const spare = {
                roll: 1
            };
            const spareRoll = Game._updateSpareRoll(spare);
            const result = 0;
            expect(spareRoll).to.eql(result);
        });
    });

    describe('play runs the correct type pf roll', () => {
        describe('strike conditions', () => {
            it('should run strike roll if correct conditions are meet', () => {
                const prevRoll = 0;
                const frame = 2;
                const pins = 10;
                const score = 103;
                const strike = {roll: 1};
                const spare = {roll: 0};
                const pinsHit = 10;
                const result = {
                    roll: prevRoll,
                    frame: frame,
                    pins: 10,
                    score: 113,
                    strike: {roll: 2},
                    spare: spare
                }
                const spareRoll = Game.play(prevRoll, frame, pins, score, strike, spare, pinsHit);

                expect(spareRoll).to.eql(result);
            });
        });

        describe('spare conditions', () => {
            it('should run spare roll if correct conditions are meet', () => {
                const prevRoll = 1;
                const frame = 2;
                const pins = 0;
                const score = 113;
                const strike = {roll: 0};
                const spare = {roll: 0};
                const pinsHit = 6;
                const result = {
                    roll: prevRoll,
                    frame: frame,
                    pins: pins,
                    score: 113,
                    strike: strike,
                    spare: {roll: 1}
                }
                const spareRoll = Game.play(prevRoll, frame, pins, score, strike, spare, pinsHit);

                expect(spareRoll).to.eql(result);
            });
        });

        describe('reset conditions', () => {
            it('should return correct game results when 0 pins are standing', () => {
                const prevRoll = 2;
                const frame = 2;
                const pins = 4;
                const score = 100;
                const strike = {roll: 0};
                const spare = {roll: 0};
                const pinsHit = 4;
                const result = {
                    roll: 0,
                    frame: 3,
                    pins: 10,
                    score: 104,
                    strike: strike,
                    spare: spare
                }
                const spareRoll = Game.play(prevRoll, frame, pins, score, strike, spare, pinsHit);

                expect(spareRoll).to.eql(result);
            });
        });

        describe('normal conditions', () => {
            it('should return correct game results when # pins are standing', () => {
                const prevRoll = 0;
                const frame = 2;
                const pins = 4;
                const score = 100;
                const strike = {roll: 0};
                const spare = {roll: 0};
                const pinsHit = 2;
                const result = {
                    roll: 1,
                    frame: 2,
                    pins: 2,
                    score: 102,
                    strike: strike,
                    spare: spare
                }
                const spareRoll = Game.play(prevRoll, frame, pins, score, strike, spare, pinsHit);

                expect(spareRoll).to.eql(result);
            });
        });
    });

});