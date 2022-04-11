const capitalize = ([first, ...rest]) =>
  `${first.toUpperCase()}${rest.join('')}`;

const toCamelCase = str =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

module.exports = { capitalize, toCamelCase };
