const ipt = require('../dist/index.cjs').default;

describe('test ipt', () => {
  test('test usage: pure items', (done) => {
    const items = ['a', 'b', 'c'];
    ipt(items).then((res) => {
      expect(items.includes(res)).toBeTruthy();
      done();
    });
  });

  test('test usage: items with label', (done) => {
    const items = [
      { name: 'key1', value: 'value1' },
      { name: 'key2', value: 'value2' },
      { name: 'key3', value: 'value3' },
    ];
    const values = items.map((item) => item.value);
    ipt(items).then((res) => {
      expect(values.includes(res)).toBeTruthy();
      done();
    });
  });
});
