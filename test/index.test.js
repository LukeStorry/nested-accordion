const nestedAccordion = require("../src/index.js");

test("empty data", () => {
  expect(nestedAccordion()).toBe("{}");
});
test("with a", () => {
  expect(nestedAccordion({ a: "a" })).toBe('{"a":"a"}');
});

test("with ab", () => {
  expect(nestedAccordion({ a: "a" })).toBe('{"a":"b"}');
});
