
describe('---- typeOf.js ----', () => {
    beforeAll(() => { // setup
        let Flair = require('../../dist/flair.js');
        Flair();
    });
    afterAll(() => { // cleanup
        Flair('END');
    });

    describe('Without Params', () => {
        it('should return undefined', () => {
            expect(typeOf()).toEqual('undefined');
        });
    });

    describe('With Params', () => {
        it('should not throw', () => {
            expect(typeOf('test')).toEqual('string');
        });
    });

    describe('With Javascript Types', () => {
        it('should be valid', () => {
            expect(typeOf(true)).toEqual('boolean');
            expect(typeOf(false)).toEqual('boolean');
            expect(typeOf([])).toEqual('array');
            expect(typeOf(new Date())).toEqual('date');
            expect(typeOf(null)).toEqual('null');
        });        
    });    

    describe('With Flair Types', () => {
        it('should be valid', () => {
            let CL = Class('MyClass', function() { });
            expect(typeOf(CL)).toEqual('class');
        });        
    });    
});