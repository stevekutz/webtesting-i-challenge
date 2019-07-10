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
            expect(enhancer.succeed(weapon.claw_enh14_dur4)).toBe(15);
        })
        it('should no increment enhancement if already at max of 20', () => {
            expect(enhancer.succeed(weapon.claw_enh20)).toBe(20);
        })
        it('should return a new item, not modified original item', () => {
            expect(enhancer.repair(weapon.claw_enh20)).not.toEqual(weapon.sword_enh20);
        })

    })
    // fail- decreases durability by 5 if enhancement is less than 5
   describe('fail decrements durability by 5', () => {
       it('should decrement durability by 5 if enhancement is < 15', () => {
            const result = {
                name: 'Macey1',
                enhancement: 14,
                durability: 1,
            };  
            expect(enhancer.fail(weapon.mace_enh14_dur6)).toEqual(result);
       })
       it('should set durability to 0 if becomes negative or less when enhancement is < 15', () => {
            const result = {
                name: 'claw',
                enhancement: 14,
                durability: 0, 
            };
            expect(enhancer.fail(weapon.claw_enh14_dur4)).toEqual(result);

       })
       it('should set the decrement the durability by 10 if enhancement is >= 15', () => {
            const result = {
                name: 'Macey2',
                enhancement: 16,
                durability: 10,
            };
            expect(enhancer.fail(weapon.mace_enh16_dur20)).toEqual(result);
       })
       it('should set the durability to 0 if it becomes negative when enhancement is >= 15', () => {
            const result = {
                name: 'Macey2',
                enhancement: 16,
                durability: 0,
            };
            expect(enhancer.fail(weapon.mace_enh16_dur9)).toEqual(result);
       })
       it('should decrement the enhancement level by 1 when enhancement > 16', () => {
           const result = {
                name: 'Macey2',
                enhancement: 17,
                durability: 0,
            }; 
            expect(enhancer.fail(weapon.mace_enh18_dur9)).toEqual(result);
       })
       it(`should NOT decrement the enhancement level by 1 when the enhancement is 20
            BUT will decrement the durability by 10 `, () => {
           const result = {
                name: 'Macey2',
                enhancement: 21,
                durability: 90,
          };
          expect(enhancer.fail(weapon.mace_enh21_dur100)).toEqual(result);
       })

   })



});
