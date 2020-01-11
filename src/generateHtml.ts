export type SectionData = {
  title: string;
  text?: string;
  children?: Array<SectionData>;
};

const createHeader = (title: string, enabled: boolean): string => {
  if (enabled) return `<a class="header" tabindex="0">${title}</a>`;
  else return `<a class="header disabled">${title}</a>`;
};

const createSection = (sectionData: SectionData): string => {
  if (!('text' in sectionData || 'children' in sectionData)) {
    return createHeader(sectionData.title, false);
  }

  let contentsHtml = '<div class="contents">';
  if ('text' in sectionData) {
    contentsHtml += `<p>${sectionData.text}</p>`;
  }
  if ('children' in sectionData) {
    contentsHtml += sectionData.children.map(createSection).join('\n');
  }
  contentsHtml += '</div>';

  return createHeader(sectionData.title, true) + '\n' + contentsHtml;
};

export default (data: Array<SectionData>): string => {
  return `<div id="nested-accordion">\n${data
    .map(createSection)
    .join('\n')}\n</div>`;
};
