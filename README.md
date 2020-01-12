# nested-accordion

[![npm version](https://img.shields.io/npm/v/nested-accordion)](https://www.npmjs.com/nested-accordion)
[![Build Status](https://img.shields.io/travis/lukestorry/nested-accordion/master.svg)](https://travis-ci.org/lukestorry/nested-accordion)
[![Coverage Status](https://img.shields.io/codecov/c/github/lukestorry/nested-accordion/master.svg)](https://codecov.io/gh/lukestorry/nested-accordion/branch/master)
[![install size](https://packagephobia.now.sh/badge?p=nested-accordion)](https://packagephobia.now.sh/result?p=nested-accordion)

Generates a series of nested css accordions from a json datafile

---

## Install

    $ yarn add nested-accordion

---

## Usage

#### Import:
```js
const nestedAccordion = require('nested-accordion');
```

#### `.create(data)` gives a html string with a nested-accordion div to be inserted in a website
```js
const nestedAccordionDiv = nestedAccordion.create(data)
```

#### Data should be an array of SectionData
Title is required, optional text and children. 
If both text and children are ommitted, that child accordion will be diabled

```js
type SectionData = {
  title: string;
  text?: string;
  children?: Array<SectionData>;
};
```

#### `.styles()`` gives a string with the css you should add to your site
Optional colour parameters default to grey boxes
```js
const styles = nestedAccordion.styles(
  activeColour: 'grey',
  inactiveColor: 'lightgrey',
  textColor: 'black')
export css = `<style>\n${styles}\n</style>`
```

---

## Example
```js
  const data = [
    {
      title: 'Grandparent 1',
      text: 'Grandparent 1 description.',
      children: [
        {
          title: 'Parent 1',
        },
        {
          title: 'Parent 1',
          children: [
            {
              title: 'First Child',
              text: 'I am the first child',
            },
            {
              title: 'Second Child',
              text: 'I am the first child',
            }
          ]}
      ]},
      {
      title: 'Grandparent 2',
      text: 'Grandparent 2 description.',
      children: [
        {
          title: 'Parent 3',
          children: [
            {
              title: 'First Child',
              text: 'I am the first child',
            },
            {
              title: 'Second Child',
              text: 'I am the first child',
            }
          ]}
      ]}
  ];

const css = `<style>${nestedAccordion.styles('cyan', 'lightcyan')}</style>`
const div = nestedAccordion.create(data)
```
Then when the css string is put in the body of the page, and the div where you want the accordion to appear, to looks like:
![demo gif](demo.gif)

### Live usage
This can be used to visualise large mind-map style datasets, for example on [this site looking tinto university courses](https://marniewoodmeade.co.uk/authenticlearning/).

---

## Bugs or updates

If you want to use this accordion for you project, but it isn't quite working, let me know and I'll see what I can do!

This was originally made for a specific purpose (visualisation of a json dataset for an eleventy-genreated website), so may not work in all scenarios yet!
