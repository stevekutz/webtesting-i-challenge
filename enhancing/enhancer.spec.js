const weapon = require('./testObj');
const enhancer = require('./enhancer.js');

// test away!

describe('the enhancer', () => {
    describe('the repair function', () => {
      it('should restore the durability to 100', () => {
            // arrange - import up mock data
            expect(enhancer.repair(weapon.sword_dur50)).toBe(100);
      }) 
      it('should return a new item, not modified original item', () => {
            expect(enhancer.repair(weapon.sword_dur50)).not.toEqual(weapon.sword_dur50);

      })
      
    })


});