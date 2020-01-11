import { generateHtml } from '../src/index';

describe('overall', () => {
  test('empty data', () => {
    expect(generateHtml())
    .toBe(`<h1>Accordion</h1>{}`);
  });

  test('with a', () => {
    expect(generateHtml({ a: 'a' }))
    .toBe(`<h1>Accordion</h1>{"a":"a"}`)
  });
});
