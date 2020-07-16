import { create, styles as indexStyles } from '../src/index';
import style from '../src/style';

describe('create', () => {
  test('works with empty data', () => {
    const expectedOutput = `<!-- AUTO-GENERATED ACCORDION CODE USING https://lukestorry.github.io/nested-accordion -->
<div id="nested-accordion">

</div>
<!-- END OF AUTO-GENERATED ACCORDION CODE -->`;

    expect(create([])).toBe(expectedOutput);
  });

  // TODO add less brittle tests
});

describe('styles', () => {
  test('defaults to grey/black', () => {
    expect(indexStyles()).toBe(style('grey', 'lightgrey', 'black'));
  });
  test('passes on inputs', () => {
    expect(indexStyles('red', 'blue', 'green')).toBe(
      style('red', 'blue', 'green'),
    );
  });
});

// TODO html validation?
