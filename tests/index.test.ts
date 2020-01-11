import { create, styles as indexStyles } from '../src/index';
import style from '../src/style';
import generateHtml from '../src/generateHtml';

describe('create', () => {
  test('works with empty data', () => {
    const expectedOutput = `<!-- AUTO-GENERATED ACCORDION CODE USING https://lukestorry.github.io/nested-accordion -->
<div id="nested-accordion">

</div>
<script id="nestedAccordionClickHandlersScript">
var headers = document.getElementsByClassName("header");for (let i = 0; i < headers.length; i++) {if (headers[i].classList.contains('disabled')) continue;headers[i].addEventListener("click", function() {this.classList.toggle("active");this.nextElementSibling.classList.toggle("active");});headers[i].addEventListener('keydown', function(event) {if (event.code === 'Space' || event.code === 'Enter') {headers[i].click();}});}
</script>
<!-- END OF AUTO-GENERATED ACCORDION CODE -->`;

    expect(create([])).toBe(expectedOutput);
  });

  test('creates a nested accordion with script', () => {
    const testData = [
      {
        title: 'Grandparent',
        children: [
          {
            title: 'Parent',
          },
        ],
      },
    ];

    const expectedOutput = `<!-- AUTO-GENERATED ACCORDION CODE USING https://lukestorry.github.io/nested-accordion -->
${generateHtml(testData)}
<script id="nestedAccordionClickHandlersScript">
var headers = document.getElementsByClassName("header");for (let i = 0; i < headers.length; i++) {if (headers[i].classList.contains('disabled')) continue;headers[i].addEventListener("click", function() {this.classList.toggle("active");this.nextElementSibling.classList.toggle("active");});headers[i].addEventListener('keydown', function(event) {if (event.code === 'Space' || event.code === 'Enter') {headers[i].click();}});}
</script>
<!-- END OF AUTO-GENERATED ACCORDION CODE -->`;

    expect(create(testData)).toBe(expectedOutput);
  });
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
