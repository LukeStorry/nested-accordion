import generateHtml from '../src/generateHtml';

describe('generateHtml', () => {
  test('works with empty data', () => {
    const expectedOutput = `<div id="nested-accordion">\n\n</div>`;
    expect(generateHtml([])).toBe(expectedOutput);
  });

  test('creates one accordion', () => {
    const testData = [
      {
        title: 'Title',
        text: 'Description.\nLorem ipsum',
      },
    ];
    const expectedOutput = `<div id="nested-accordion">
<a class="header" tabindex="0">Title</a>
<div class="contents"><p>Description.
Lorem ipsum</p></div>
</div>`;
    expect(generateHtml(testData)).toBe(expectedOutput);
  });

  test('creates two accordions', () => {
    const testData = [
      {
        title: 'Accordion One',
        text: 'Description 1.\nLorem ipsum',
      },
      {
        title: 'Accordion Two',
        text: 'Description 2.\nLorem ipsum',
      },
    ];
    const expectedOutput = `<div id="nested-accordion">
<a class="header" tabindex="0">Accordion One</a>
<div class="contents"><p>Description 1.
Lorem ipsum</p></div>
<a class="header" tabindex="0">Accordion Two</a>
<div class="contents"><p>Description 2.
Lorem ipsum</p></div>
</div>`;
    expect(generateHtml(testData)).toBe(expectedOutput);
  });

  test('creates three levels of nested accordion', () => {
    const testData = [
      {
        title: 'Grandparent',
        text: 'Grandparent description.',
        children: [
          {
            title: 'Parent',
            children: [
              {
                title: 'First Child',
                text: 'I am the first child',
              },
              {
                title: 'Second Child',
                text: 'I am the first child',
              },
            ],
          },
        ],
      },
    ];

    const expectedOutput = `<div id="nested-accordion">
<a class="header" tabindex="0">Grandparent</a>
<div class="contents"><p>Grandparent description.</p><a class="header" tabindex="0">Parent</a>
<div class="contents"><a class="header" tabindex="0">First Child</a>
<div class="contents"><p>I am the first child</p></div>
<a class="header" tabindex="0">Second Child</a>
<div class="contents"><p>I am the first child</p></div></div></div>
</div>`;
    expect(generateHtml(testData)).toBe(expectedOutput);
  });
});
