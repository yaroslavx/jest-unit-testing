const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('Корректное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Разные значения', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'hiMyNameIs'])).toEqual([
      '1',
      '2',
      '3',
    ]);
  });
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('Пустой массив', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
