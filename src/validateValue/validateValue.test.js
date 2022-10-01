const validateValue = require('./validateValue');

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('Меньше корректного', () => {
    expect(validateValue(-300)).toBe(false);
  });
  test('Больше корректного', () => {
    expect(validateValue(3000)).toBe(false);
  });
  test('Меньше корректного', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('Больше корректного', () => {
    expect(validateValue(1000)).toBe(true);
  });
});
