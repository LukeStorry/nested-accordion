import style from '../src/style';

describe('styles', () => {
  test('sets colors correctly', () => {
    const expectedOutput = `.header {
  border: 0;
  background-color: #abcdef;
  color: yellow;
  display: block;
  cursor: pointer;
  padding: 1rem;
  margin: -0.5rem -1.5rem 0 -1.5rem;
  font-weight: bold;
  text-align: center;
}

.header.active {
  color: yellow;
  margin-top: 1rem;
  background-color: blue;
}

.header:hover {
  color: yellow;
  background-color: blue;
}

.header.disabled, .header.disabled:hover {
  background-color: #abcdef;
  cursor: auto;
  color: blue;
  font-style: italic;
}

.contents {
  display: none;
}

.contents.active {
  display: block;
  padding: 1rem 2rem 1rem 2rem;
  background-color: white;
  border-style: solid;
  border-color: blue;
  margin: 0 -1.5rem 1rem -1.5rem;
}`;
    expect(style('blue', '#abcdef', 'yellow')).toBe(expectedOutput);
  });

  // TODO test for incorrect color strings throws
});
