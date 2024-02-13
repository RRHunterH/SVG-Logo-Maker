const prompts = require('prompts');
const fs = require('fs');
const { createSVG } = require('./lib/svgGenerator');

async function getUserInput() {
  const userInput = await prompts([
    {
      type: 'text',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: value => value.length <= 3,
    },
    {
      type: 'text',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'select',
      name: 'shape',
      message: 'Choose a shape:',
      choices: [
        { title: 'Circle', value: 'circle' },
        { title: 'Triangle', value: 'triangle' },
        { title: 'Square', value: 'square' },
      ],
    },
    {
      type: 'text',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
}

async function generateSVGFile(userInput) {
  const svgContent = createSVG(userInput);

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

(async () => {
  const userInput = await getUserInput();
  await generateSVGFile(userInput);
})();
