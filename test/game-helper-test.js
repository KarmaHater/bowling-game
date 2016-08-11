
var expect = require('chai').expect;
import Game from '../src/reducers/utils/game-helpers.js';

describe('Reducers utils Game Helper', () => {

    describe('_updateRoll update rolls correct', () => {
        it('add ones', () => {
            const roll = 0
            let totalRolls = Game._updateRoll(0)
            let result = 1;
            expect(totalRolls).to.eql(result)
        });

        it('reset the rolls', () => {
            const roll = 2
            let totalRolls = Game._updateRoll(0)
            let result = 0;
            expect(totalRolls).to.eql(result)
        });
    });
});