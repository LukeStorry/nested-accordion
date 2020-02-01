export type SectionData = {
  title: string;
  text?: string;
  children?: Array<SectionData>;
};

const createHeader = (title: string, enabled: boolean): string => {
  if (enabled)
    return `<a class="header" tabindex="0" onclick="this.classList.toggle('active'); this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'? 'block':'none';">${title}</a>`;
  else return `<a class="header disabled">${title}</a>`;
};

const createSection = (sectionData: SectionData): string => {
  const hasText = 'text' in sectionData && sectionData.text.length > 0;
  const hasChildren =
    'children' in sectionData && sectionData.children.length > 0;

  if (!hasText && !hasChildren) {
    return createHeader(sectionData.title, false);
  }

  let contentsHtml = '<div class="contents" style="display: none;">';
  if (hasText) {
    contentsHtml += `<p>${sectionData.text}</p>`;
  }
  if (hasChildren) {
    contentsHtml += sectionData.children.map(createSection).join('\n');
  }
  contentsHtml += '</div>';

  return createHeader(sectionData.title, true) + '\n' + contentsHtml;
};

const generateHtml = (data: Array<SectionData>): string => {
  return `<div id="nested-accordion">\n${data
    .map(createSection)
    .join('\n')}\n</div>`;
};

export default generateHtml;
