import generateHtml from '../src/generateHtml';

describe('generateHtml', () => {
  test('works with empty data', () => {
    const expectedOutput = `<div id="nested-accordion">\n\n</div>`;
    expect(generateHtml([])).toBe(expectedOutput);
  });

  // TODO valid html tests
  // TODO less brittle div nesting tests?
});
