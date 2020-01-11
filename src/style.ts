export default (activeColour: string, inactiveColor: string): string =>
  `<style> .header {
  border: 0;
  background-color: ${inactiveColor};
  color: black;
  display: block;
  cursor: pointer;
  padding: 1rem;
  margin: -0.5rem -1.5rem 0 -1.5rem;
  font-weight: bold;
  text-align: center;
}

.header.active {
  color: black;
  margin-top: 1rem;
  background-color: ${activeColour};
}

.header:hover {
  color: black;
  background-color: ${activeColour};
}

.header.disabled, .header.disabled:hover {
  background-color: ${inactiveColor};
  cursor: auto;
  color: ${activeColour};
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
  border-color: ${activeColour};
  margin: 0 -1.5rem 1rem -1.5rem;
}
 </style>`;
