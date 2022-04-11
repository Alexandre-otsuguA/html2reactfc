const path = require('path');
const fs = require('fs/promises');
const converter = require('./converter.js');
const templates = require('./templates');
const { capitalize, toCamelCase } = require('./utils/text');

const INPUT_DIR = path.join(__dirname, '../input');
const OUTPUT_DIR = path.join(__dirname, '../output');

const generateOutputFiles = async inputFile => {
  // Get html content from HTML file
  const html = await fs.readFile(inputFile.path, {
    encoding: 'utf8',
  });

  // prettier-ignore
  const componentName = capitalize(toCamelCase(inputFile.name))
    .replace('.html', '');

  const reactFC = converter.HTMLToReactFC(
    templates.useNextPage,
    componentName,
    html
  );

  // Save to output directory
  await fs.writeFile(`${OUTPUT_DIR}/${componentName}.jsx`, reactFC);
};

const getInputFiles = async () =>
  (await fs.readdir(INPUT_DIR))
    .filter(fileName => fileName.endsWith('.html'))
    .map(fileName => ({
      name: fileName,
      path: path.join(INPUT_DIR, fileName),
    }));

(async function main() {
  const inputFiles = await getInputFiles();
  for (const inputFile of inputFiles) generateOutputFiles(inputFile);
})();
