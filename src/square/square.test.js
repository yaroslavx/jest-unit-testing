const square = require('./square');

describe('square', () => {
  test('Корректное значение', () => {
    expect(square(10)).toBe(100);
    expect(square(10)).toBeLessThan(300);
    expect(square(10)).toBeGreaterThan(70);
    expect(square(10)).not.toBeUndefined();
  });
  test('Количество вызовов', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test('Количество вызовов', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
