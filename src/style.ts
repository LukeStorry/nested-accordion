export default (
  activeColour: string,
  inactiveColor: string,
  textColor: string,
): string =>
  `.header {
  border: 0;
  background-color: ${inactiveColor};
  color: ${textColor};
  display: block;
  cursor: pointer;
  padding: 1rem;
  margin: -0.5rem -1.5rem 0 -1.5rem;
  font-weight: bold;
  text-align: center;
}

.header.active {
  color: ${textColor};
  margin-top: 1rem;
  background-color: ${activeColour};
}

.header:hover {
  color: ${textColor};
  background-color: ${activeColour};
}

.header.disabled, .header.disabled:hover {
  background-color: ${inactiveColor};
  cursor: auto;
  color: ${activeColour};
  font-style: italic;
}

.contents {
  padding: 1rem 2rem 1rem 2rem;
  background-color: white;
  border-style: solid;
  border-color: ${activeColour};
  margin: 0 -1.5rem 1rem -1.5rem;
}`;
