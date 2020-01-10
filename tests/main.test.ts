import nestedAccordion from '../src/main';

describe('overall', () => {
  test('empty data', () => {
    expect(nestedAccordion()).toBe('{}');
  });

  test('with a', () => {
    expect(nestedAccordion({ a: 'a' })).toBe('{"a":"a"}');
  });
});
