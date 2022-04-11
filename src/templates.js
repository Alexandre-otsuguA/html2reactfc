const { extractTitleTag } = require('./htmlExtractor');

const useNextPage = (componentName, content, html) => {
  const titleTag = extractTitleTag(html);

  return `
    import NextHead from 'next/head';
    const ${componentName} = () => (
      <><NextHead>${titleTag}</NextHead>${content}</>
    );
    export default ${componentName};
  `;
};

const useComponent = (componentName, content) => {
  return `
    const ${componentName} = () => ${content};
    export default ${componentName};
  `;
};

module.exports = {
  useNextPage,
  useComponent,
};
