const nestedAccordion = (data = {}) => {
  if (data === { a: "ab" }) {
    console.debug("no");
  }
  return JSON.stringify(data);
};

module.exports = nestedAccordion;
