import generateHtml, { SectionData } from './generateHtml';
import style from './style';
import addClickHandlersScript from './addClickHandlersScript';

export const create = (data: Array<SectionData>): string =>
  `<!-- AUTO-GENERATED ACCORDION CODE USING https://lukestorry.github.io/nested-accordion -->
${generateHtml(data)}
${addClickHandlersScript}
<!-- END OF AUTO-GENERATED ACCORDION CODE -->`;

export const styles = (
  activeColour = 'grey',
  inactiveColor = 'lightgrey',
  textColor = 'black',
): string => style(activeColour, inactiveColor, textColor);

// TODO fix indentation of produced string?
