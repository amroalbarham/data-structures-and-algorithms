const Stack = require('../index').Stack;
const validateBrackets = require('../index').validateBrackets;
describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  describe(' brackets validation test', () => {
    it('test brackets validation if matching.... will back true', () => {
      expect(validateBrackets('{}[]')).toEqual(true);
    });
    it('test brackets validation if matching and balance....will back true)', () => {
      expect(validateBrackets('(a){[(amro)]}')).toEqual(true);
    });
    it('test brackets validation....will back false ', () => {
      expect(validateBrackets('{({{{{{}}}}}})[]')).toEqual(false);
    });
    it('test brackets validation....will back false', () => {
      expect(validateBrackets('{[[[[[]]]]]})([((((9999))))]')).toEqual(false);
    });
  });
});