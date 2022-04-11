const HtmlToJsx = require('htmltojsx');

const HTMLToJSX = html => {
  const converter = new HtmlToJsx({
    createClass: false,
  });

  return converter.convert(html);
};

const HTMLToReactFC = (useTemplate, componentName, html) =>
  useTemplate(componentName, HTMLToJSX(html), html);

module.exports = { HTMLToReactFC };
