const delay = require('./delay');

describe('square', () => {
  test('Тайминг', async () => {
    const result = await delay(() => 100 + 200, 1000);
    expect(result).toBe(300);
  });
});
