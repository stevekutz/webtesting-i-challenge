const weapon = require('./testObj');
const enhancer = require('./enhancer.js');

// test away!

describe('the enhancer', () => {
    // repair accepts item obj, returns new obj with durability set to 100
    describe('the repair function', () => {
      it('should restore the durability to 100', () => {
            // arrange - import up mock data
            expect(enhancer.repair(weapon.sword_dur50)).toBe(100);
      }) 
      it('should return a new item, not modified original item', () => {
            expect(enhancer.repair(weapon.sword_dur50)).not.toEqual(weapon.sword_dur50);

      })
    
    })
    // success increments enhancement by 1 to a max of 20
    describe('success increments enhancement by 1 if not already at 20', () => {
        it('should increment enhancement from 14 to 15', () => {
            expect(enhancer.succeed(weapon.sword_enh14)).toBe(15);
        })
        it('should no increment enhancement if already at max of 20', () => {
            expect(enhancer.succeed(weapon.sword_enh20)).toBe(20);
        })
        it('should return a new item, not modified original item', () => {
            expect(enhancer.repair(weapon.sword_enh20)).not.toEqual(weapon.sword_enh20);
        })

    })



});