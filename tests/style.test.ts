import style from '../src/style';

describe('styles', () => {
  test('sets colors correctly', () => {
    const result = style('blue', '#abcdef', 'yellow');
    expect(result).toContain('blue');
    expect(result).toContain('abcdef');
    expect(result).toContain('yellow');
  });

  // TODO test for incorrect color strings throws
  // TODO test for valid css
});
